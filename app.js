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

const {todoSchema, Todo,listString}=require( "./string.js");

// 
// listString=[];
console.log(listString);
var todos=["Take Bath","Study","Mandir","Eat"];
var worktodos=[];
var day=time.day;
var store=[];

mongoose.connect("mongodb+srv://Paras:Paras%402001@cluster0.9t5bt.mongodb.net/todoDB")
var conn = mongoose.connection;
// const todoSchema={
    
//     name:String,
//     gfgURL:String,
//     isDone:Boolean,

// };

// const Todo= mongoose.model(
//     "Todo",todoSchema
// );

const todo1=new Todo({name:"Take Bath"});
const todo2 =new Todo({name:"Study"});
const todo3= new Todo({name:"Mandir"});

const arrayc=[todo1, todo2, todo3];
const listSchema={
 name:String,
 items:[todoSchema]
};

const List=mongoose.model("List",listSchema);



app.get("/",(req,res)=>{
    Todo.find((err,array)=>{
        
        if((array).length==0)
        {
            Todo.insertMany(arrayc ,()=>{});
            console.log("Hello");
        }
    // res.render("list",{title:("Today is "+day() ) ,todos:array,rout:"/"});
    res.render("signIn");
    })
})

app.post("/",(req,res)=>{
    console.log("hello");
    var todon=new Todo({name:req.body.todo})
    todon.save();
    res.redirect("/");
})

app.post("/delete",(req,res)=>{
 
   a=req.body;
   b=a.checkBox;
  Todo.findByIdAndDelete(b ,(err,res)=>{
        if(err) {console.log(err)}
        else {console.log("deleted")}
    })
   
   res.redirect("/");
    //Todo.deleteOne({name:})
})

app.get("/:id",(req,res)=>{
    var id=req.params.id;

    List.findOne({name:id},(err,foundList)=>{
        if(err) console.log(err)
        else{ if(foundList){res.render("list",{title:id,todos:foundList.items,rout:("/"+id)})}
            else {
                const list=new List({
                    name:id,
                    items:listString
                });
                list.save();
                res.redirect("/"+id);
            }} 

    })
   
})

app.post("/:id",(req,res)=>{
    
    var id=req.params.id;
    var todon=new Todo({name:req.body.todo})
    List.findOne({name:id},(err,foundList)=>{
        if(foundList){
            foundList.items.push(todon);
            foundList.save();
         
        }
    })
    res.redirect(("/"+id))
   
})

app.post("/delete/:id",(req,res)=>{
    var id=req.params.id;
    a=req.body;
    b=a.checkBox;
    List.findOneAndUpdate({name:id},
        {$pull : { items : { _id :b}}},
        
        (err,foundList)=>{

        })
        res.redirect("/"+id);
})

app.get("/:id/string",(req,res)=>{
    
    
    var id=req.params.id;
  
    List.findOne({name:(id+"string")},(err,foundList)=>{
        if(err) console.log(err)
        else{ if(foundList){ console.log(foundList.items);res.render("list",{title:"string",todos:foundList.items, rout:"/"+id+"/string"})}
            else {
                const list=new List({
                    name:(id+"string"),
                    items:listString
                });
                
                list.save();
                res.redirect("/"+id +"/string");
            }} 

    })
})
app.listen(process.env.PORT||3000,()=>{});