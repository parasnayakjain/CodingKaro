const { Ds , Ques}=require("./schema");


const QuesHeap1=new Ques(
    {
        name:"Implement a Maxheap/MinHeap using arrays and recursion.",
        gfgURL:"https://www.geeksforgeeks.org/building-heap-from-array/",
        isDone: false,
        isReview:false
    }
 ); const QuesHeap2=new Ques(
    {
        name:"Sort an Array using heap. (HeapSort)",
        gfgURL:"https://www.geeksforgeeks.org/heap-sort/",
        isDone: false,
        isReview:false
    }
 );
 const QuesHeap3=new Ques(
    {
        name:"Maximum of all subarrays of size k.",
        gfgURL:"https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
        isDone: false,
        isReview:false
    }
 ); const QuesHeap4=new Ques(
    {
        name:"“k” largest element in an array",
        gfgURL:"https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1",
        isDone: false,
        isReview:false
    }
 ); const QuesHeap5=new Ques(
    {
        name:"Kth smallest and largest element in an unsorted array",
        gfgURL:"https://www.geeksforgeeks.org/heap-sort/",
        isDone: false,
        isReview:false
    }
 ); const QuesHeap6=new Ques(
    {
        name:"Merge “K” sorted arrays. [ IMP ]",
        gfgURL:"https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
        isDone: false,
        isReview:false
    }
 ); const QuesHeap7=new Ques(
    {
        name:"Merge 2 Binary Max Heaps",
        gfgURL:"https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap/",
        isDone: false,
        isReview:false
    }
 );
 const QuesHeap9=new Ques(
    {
        name:"Kth largest sum continuous subarrays",
        gfgURL:"https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/",
        isDone: false,
        isReview:false
    }
 );
 const QuesHeap10=new Ques(
    {
        name:"Leetcode- reorganize strings",
        gfgURL:"https://leetcode.com/problems/reorganize-string/",
        isDone: false,
        isReview:false
    }
 );
 const QuesHeap11=new Ques(
    {
        name:"Merge “K” Sorted Linked Lists [V.IMP]",
        gfgURL:"https://practice.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1",
        isDone: false,
        isReview:false
    }
 );
 const QuesHeap12=new Ques(
    {
        name:"Smallest range in “K” Lists",
        gfgURL:"https://practice.geeksforgeeks.org/problems/find-median-in-a-stream/0",
        isDone: false,
        isReview:false
    }
 );
 const QuesHeap13=new Ques(
    {
        name:"Median in a stream of Integers",
        gfgURL:"https://practice.geeksforgeeks.org/problems/find-median-in-a-stream/0",
        isDone: false,
        isReview:false
    }
 );
 const QuesHeap14=new Ques(
    {
        name:"Check if a Binary Tree is Heap",
        gfgURL:"https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1",
        isDone: false,
        isReview:false
    }
 );
 const QuesHeap15=new Ques(
    {
        name:"Connect “n” ropes with minimum cost",
        gfgURL:"https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0",
        isDone: false,
        isReview:false
    }
 );

 const QuesHeap17=new Ques(
    {
        name:"Convert BST to Min Heapv",
        gfgURL:"https://www.geeksforgeeks.org/convert-bst-min-heap/",
        isDone: false,
        isReview:false
    }
 );
 const QuesHeap18=new Ques(
    {
        name:"Convert min heap to max heap",
        gfgURL:"https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/",
        isDone: false,
        isReview:false
    }
 );
 const QuesHeap19=new Ques(
    {
        name:"Rearrange characters in a string such that no two adjacent are same.",
        gfgURL:"https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
        isDone: false,
        isReview:false
    }
 );

 const QuesHeap20=new Ques(
    {
        name:"Minimum sum of two numbers formed from digits of an array",
        gfgURL:"https://practice.geeksforgeeks.org/problems/minimum-sum4058/1",
        isDone: false,
        isReview:false
    }
 );

 const Heap= new Ds(
    {
        name:"Heap",
        items:[QuesHeap1 ,QuesHeap2 , QuesHeap3 ,QuesHeap4 ,QuesHeap5, QuesHeap6, QuesHeap7, QuesHeap9
        ,QuesHeap10 ,QuesHeap12 , QuesHeap13 ,QuesHeap14 ,QuesHeap15, QuesHeap17,QuesHeap18, QuesHeap19,QuesHeap20 ]
    }
);
 




 module.exports={Heap};