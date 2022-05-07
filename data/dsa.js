const mongoose=require("mongoose");
const {Heap}=require("./heap");
const {Matrix}=require("./matrix")
const {Array}=require("./array");
const {string}=require("./string");
const { Backtracking } = require("./backtracking");
const { BST } = require("./binarySearchTree");
const { Graph } = require("./graph");
const { Greedy } = require("./greedy");
const { BinaryTree } = require("./binaryTree");
const { BitManipulation } = require("./bitmanipulation");
const { DynamicPrograming } = require("./dp");
const { LinkedList } = require("./linkedList");
const { SearchAndSort } = require("./sortingAndSearching");
const { StackAndQueue } = require("./stackAndQueue");
const { Trie } = require("./trie");


const DataStructure=[Array , string , Matrix , Heap,Backtracking, BST,Graph,Greedy,BinaryTree,BitManipulation,DynamicPrograming,LinkedList,SearchAndSort,StackAndQueue,Trie];

module.exports = { DataStructure } ;




 