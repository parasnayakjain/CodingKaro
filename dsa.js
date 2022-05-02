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

string=[Todo12];
const dsa={"string":string ,"array":[], "matrix":[]};
module.exports = {Todo, todoSchema , dsa } ;