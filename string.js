const mongoose=require("mongoose");

const todoSchema={
    
    name:String,
    gfgURL:String,
    isDone:Boolean,

};

const Todo= mongoose.model(
    "Todo",todoSchema
);
 
 
 
 const Todo12=new Todo(
    {
        name:"Reverse String",
        gfgURL:"https://leetcode.com/problems/reverse-string/",
        isDone:false
    }
 );

listString=[Todo12];
module.exports = {Todo, todoSchema , listString } ;