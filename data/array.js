const { Ds , Ques}=require("./schema");

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

 const Array = new Ds(
    {
        name:"Array",
        items:[QuesString1,QuesString2,QuesString3]
    }
);

 module.exports={Array};