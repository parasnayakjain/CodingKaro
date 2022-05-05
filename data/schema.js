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
 
module.exports ={User , Ques , Ds};