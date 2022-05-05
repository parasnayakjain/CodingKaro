const mongoose=require("mongoose");


const quesSchema={
    
    name:String,
    gfgURL:String,
    isDone:Boolean,
    isReview:Boolean

};

const dsSchema={
    name:String,
    items:[quesSchema]
}

const userSchema={
    id:String,
    name:String,
    items:[dsSchema]
}

const Ques= mongoose.model(
    "Ques",quesSchema
);
 
const Ds = mongoose.model(
    "Ds" , dsSchema
);

const User =mongoose.model(
    "User" , userSchema
);
 
 
 const QuesString1=new Ques(
    {
        name:"Reverse String1",
        gfgURL:"https://leetcode.com/problems/reverse-string/",
        isDone: false,
        isReview:false
    }
 );
 const QuesString2=new Ques(
    {
        name:"Reverse String2",
        gfgURL:"https://leetcode.com/problems/reverse-string/",
        isDone: false,
        isReview:false
    }
 );
 const QuesString3=new Ques(
    {
        name:"Reverse String3",
        gfgURL:"https://leetcode.com/problems/reverse-string/",
        isDone: false,
        isReview:false
    }
 );
const string = new Ds(
    {
        name:"String",
        items:[QuesString1,QuesString2,QuesString3]
    }
);
const Array = new Ds(
    {
        name:"Array",
        items:[QuesString1,QuesString2,QuesString3]
    }
);
const Matrix = new Ds(
    {
        name:"atrix",
        items:[QuesString1,QuesString2,QuesString3]
    }
);

const DataStructure=[Array , string , Matrix];

module.exports = {User, Ds , Ques , DataStructure } ;