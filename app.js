const express=require("express");
const bp=require("body-parser");
const ejs=require("ejs");
const app=express();
const mongoose=require("mongoose");
const { redirect } = require("express/lib/response");
const time=require(__dirname+"/time.js");
app.use(bp.urlencoded({extended:true}))
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser());
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID="196256140389-eub6bqb3jiikg7kei2fn2ooulsvq9ffv.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);
const {todoSchema, Todo, dsa}=require( "./dsa.js");

var baccha;
console.log(dsa);


mongoose.connect("mongodb+srv://Paras:Paras%402001@cluster0.9t5bt.mongodb.net/todoDB")
var conn = mongoose.connection;





const listSchema={
 name:String,
 items:[todoSchema]
};

const List=mongoose.model("List",listSchema);



app.get("/",(req,res)=>{

    res.render("signIn");
    
})



app.post("/login" , (req, res)=>{
    let token =req.body.token;


    console.log("2"+token);
        async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        baccha=payload;
        console.log(payload);
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
    
   res.render("profile" ,{title:user.name});

   
})





app.get("/:id",checkAuthenticated,(req,res)=>{
    
    var id=req.params.id;
    let user=req.user;
    var id1=user.sub;
     console.log(dsa[id])
    List.findOne({name:(id1+id)},(err,foundList)=>{
        if(err) console.log(err)
        else{ if(foundList){ console.log(foundList.items);res.render("list",{title:id,todos:foundList.items, rout:"/"+id})}
            else {
                const list=new List({
                    name:(id1+id),
                    items:dsa[id]
                });
                
                list.save();
                res.redirect("/"+id);
            }} 

    })
})



function checkAuthenticated(req, res, next){

    let token = req.cookies['session-token'];

    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
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