const express=require("express");
const bp=require("body-parser");
const ejs=require("ejs");
const app=express();

const mongoose=require("mongoose");
const { redirect } = require("express/lib/response");
const time=require(__dirname+"/time.js");
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
const {User, Ds, Ques , DataStructure}=require( "./dsa.js");

 const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
 

mongoose.connect(process.env.MONGO);
var conn = mongoose.connection;



app.get("/",(req,res)=>{

    console.log(CLIENT_ID);
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
            if(foundUser){ res.render("profile" , {title:foundUser.name})}
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
           
         res.render("list" , {title:id , array:array });
          }
        }
    })

  
    
})

app.post("/profile/:id" ,checkAuthenticated, (req,res)=>{
    const id=req.params.id;
      const a=req.body;
      let user=req.user;
    
     let done= req.body.done;
     if(done) quesname=done;
     let preview=req.body.preview;
     if(preview) quesname=preview;
     
     console.log(quesname);
    User.findOne({id:user.sub} , (err , foundUser)=>{
        if(err) console.log(err);
        else{
            if(!foundUser) {res.redirect("/profile"+id);}
            else{
                let array=[];
                foundUser.items.forEach((item)=>{if(item.name==id){array=item.items}});
                 
                   array.forEach((ques)=>{ if(ques.id==quesname){if(done){ques.isDone=true; console.log("done");} } } )
                
                foundUser.items.forEach((item)=>{if(item.name==id){item.items=array}});
                   
                   foundUser.save();
                  
            }
        }
    })
    
    res.redirect("/profile"+id)
  
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
          res.redirect('/login')
      })

};


app.listen(process.env.PORT||3000,()=>{});