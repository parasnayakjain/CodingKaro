const express=require("express");
const bp=require("body-parser");
const ejs=require("ejs");
const app=express();

const mongoose=require("mongoose");
const { redirect } = require("express/lib/response");

require("dotenv").config();
app.use(bp.urlencoded({extended:true}))
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
app.use(bp.urlencoded({extended: true}));
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser());
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID=process.env.GoogleAuthLocal;

const client = new OAuth2Client(CLIENT_ID);
const {DataStructure}=require( "./data/dsa");
const {User}=require("./data/schema");

 

mongoose.connect(process.env.MONGO);
var conn = mongoose.connection;



app.get("/",(req,res)=>{


    res.render("signIn", {GoogleAuth:CLIENT_ID});
    
})



app.post("/login" , (req, res)=>{
    let token =req.body.token;


   
        async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        baccha=payload;
     
        }
        verify().
        then(()=>{
          res.cookie('session-token', token);
          res.send("ok");
        })
        .catch(console.error);

        
})




app.get("/profile",checkAuthenticated,(req,res)=>{

   let user=req.user;
    
  
    User.findOne({id:user.sub} , (err , foundUser)=>{
        if(err) console.log(err);
        else{
            if(foundUser){ res.render("mainPage" , {title:foundUser.name})}
            else{
                const NewUser = new User({
                    name:user.name,
                    id:user.sub,
                    items:DataStructure
                })
               NewUser.save();
               res.redirect("/profile");
            }
        }
    })
   
})





app.get("/profile/:id",checkAuthenticated,(req,res)=>{
    
    var id=req.params.id;
    let user=req.user;
    let array;
    User.findOne({id:user.sub}, (err , foundUser )=>{
        if(err) console.log(err);
        else{
          if(!foundUser) {res.redirect("/profile"+id);}
        
          else{
            
        foundUser.items.forEach((item)=>{if(item.name==id) {array=item.items} });
           
     
         res.render("questionList" , {topic:id , array:array });
          }
        }
    })

  
    
})

app.post("/profile/:id" ,checkAuthenticated, (req,res)=>{
    const id=req.params.id;
      const a=req.body;
      let user=req.user;
      var array=[];
     let done= req.body.done;
     
     if(done) quesname=done;
     let review=req.body.review;
     if(review) quesname=review;
     
  
    User.findOne({id:user.sub} , (err , foundUser)=>{
        if(err) console.log(err);
        else{
            if(!foundUser) {res.redirect("/profile"+id);}
            else{
              
                foundUser.items.forEach((item)=>{if(item.name==id){array=item.items}});
                 
                   array.forEach((ques)=>{ if(ques.id==quesname){if(done){ques.isDone = !ques.isDone; console.log("done");} if(review) ques.isReview= !ques.isReview; console.log("review");} } )
                
                // foundUser.items.forEach((item)=>{if(item.name==id){item.items=array}});
                   
                   foundUser.save();

                   console.log(array);
                   res.render("questionList" , {topic:id , array:array });
                  
            }
        }
    })
  
    
  
})



function checkAuthenticated(req, res, next){

    let token = req.cookies['session-token'];

    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
        user.sub=payload.sub;
      }
      verify()
      .then(()=>{
          req.user = user;
          next();
      })
      .catch(err=>{
          res.redirect('/');
      })

};


app.listen(process.env.PORT||3000,()=>{});