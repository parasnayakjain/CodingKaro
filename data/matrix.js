const { Ds , Ques}=require("./schema");

   const array=[ { name: 'Spiral traversal on a Matrix',
   gfgURL: 'https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0',
   isDone: false,
   isReview: false },
 { name: 'Search an element in a matriix',
   gfgURL: 'https://leetcode.com/problems/search-a-2d-matrix/',
   isDone: false,
   isReview: false },
 { name: 'Find median in a row wise sorted matrix',
   gfgURL: 'https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1',
   isDone: false,
   isReview: false },
 { name: 'Find row with maximum no. of 1\'s',
   gfgURL: 'https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1',
   isDone: false,
   isReview: false },
 { name: 'Print elements in sorted order using row-column wise sorted matrix',
   gfgURL: 'https://practice.geeksforgeeks.org/problems/sorted-matrix/0',
   isDone: false,
   isReview: false },
 { name: 'Maximum size rectangle',
   gfgURL: 'https://practice.geeksforgeeks.org/problems/max-rectangle/1',
   isDone: false,
   isReview: false },
 { name: 'Find a specific pair in matrix',
   gfgURL: 'https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/',
   isDone: false,
   isReview: false },
 { name: 'https://leetcode.com/problems/rotate-image/(rotate matrix by 90 deg)',
   gfgURL: 'https://leetcode.com/problems/rotate-image/(rotate%20matrix%20by%2090%20deg)',
   isDone: false,
   isReview: false },
 { name: 'Kth smallest element in a row-cpumn wise sorted matrix(same as median)',
   gfgURL: 'https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1',
   isDone: false,
   isReview: false },
 { name: 'Common elements in all rows of a given matrix',
   gfgURL: 'https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/',
   isDone: false,
   isReview: false } ];

 const Matrix = new Ds(
    {
        name:"Matrix",
        items:array
    }
);

 module.exports={Matrix};