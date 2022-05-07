const { Ds , Ques}=require("./schema");


const array=[ { name: 'Construct a trie from scratch',
gfgURL: 'https://www.geeksforgeeks.org/trie-insert-and-search/',
isDone: false,
isReview: false },
{ name: 'Find shortest unique prefix for every word in a given list',
gfgURL: 'https://www.geeksforgeeks.org/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/',
isDone: false,
isReview: false },
{ name: 'Word Break Problem | (Trie solution)',
gfgURL: 'https://www.geeksforgeeks.org/word-break-problem-trie-solution/',
isDone: false,
isReview: false },
{ name: 'Given a sequence of words, print all anagrams together',
gfgURL: 'https://practice.geeksforgeeks.org/problems/k-anagrams-1/0',
isDone: false,
isReview: false },
{ name: 'Implement a Phone Directory',
gfgURL: 'https://practice.geeksforgeeks.org/problems/phone-directory/0',
isDone: false,
isReview: false },
{ name: 'Print unique rows in a given boolean matrix',
gfgURL: 'https://practice.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1',
isDone: false,
isReview: false } ];




const Trie = new Ds(
    {
        name:"Trie",
        items:array
    }   
);

 module.exports={Trie};