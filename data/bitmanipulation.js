const { Ds , Ques}=require("./schema");



const array=	[ { name: 'Count set bits in an integer',
gfgURL: 'https://practice.geeksforgeeks.org/problems/set-bits0143/1',
isDone: false,
isReview: false },
{ name: 'Find the two non-repeating elements in an array of repeating elements',
gfgURL: 'https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1',
isDone: false,
isReview: false },
{ name: 'Count number of bits to be flipped to convert A to B',
gfgURL: 'https://practice.geeksforgeeks.org/problems/bit-difference/0',
isDone: false,
isReview: false },
{ name: 'Count total set bits in all numbers from 1 to n',
gfgURL: 'https://practice.geeksforgeeks.org/problems/count-total-set-bits/0',
isDone: false,
isReview: false },
{ name: 'Program to find whether a no is power of two',
gfgURL: 'https://practice.geeksforgeeks.org/problems/power-of-2/0',
isDone: false,
isReview: false },
{ name: 'Find position of the only set bit',
gfgURL: 'https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1',
isDone: false,
isReview: false },
{ name: 'Copy set bits in a range',
gfgURL: 'https://www.geeksforgeeks.org/copy-set-bits-in-a-range/',
isDone: false,
isReview: false },
{ name: 'Divide two integers without using multiplication, division and mod operator',
gfgURL: 'https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/',
isDone: false,
isReview: false },
{ name: 'Calculate square of a number without using *, / and pow()',
gfgURL: 'https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/#:~:text=Given%20an%20integer%20n%2C%20calculate,*%2C%20%2F%20and%20pow().&text=A%20Simple%20Solution%20is%20to%20repeatedly%20add%20n%20to%20result.',
isDone: false,
isReview: false },
{ name: 'Power Set',
gfgURL: 'https://practice.geeksforgeeks.org/problems/power-set4302/1',
isDone: false,
isReview: false } ];




const BitManipulation = new Ds(
    {
        name:"BitManipulation",
        items:array
    }   
);

 module.exports={BitManipulation};