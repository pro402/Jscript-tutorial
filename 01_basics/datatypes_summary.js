// Datatypes => Primitive(7-types) and Non-Primitive

// PRIMITIVE
// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
let userEmail;    //if not provided any data it is by default set as undefined

const id = Symbol('123') 
const anotherId = Symbol('123')
// console.log(id);
// console.log(anotherId);
console.log(id === anotherId);

const Bnt = 32424234234242424      //number
const BigInt = 32424234234242424n  //bigint
console.log(typeof BigInt);

// REFERENCE OR Non-Primitive
// Arrays,Objects,Functions ==> datatypes object
const heros = ['iron man','spider man','deadpool','captain america']
let myObj = {
    name: "prasun",
    surName : "maity",
    age : 21
}

const myFunction = function(){
    console.log("Hello World");
}
myFunction()

// JavaScript is a dynamically typed language



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive) and Heap(Reference)
// Stack(Primitive)
let ytname = 'prasunmaity.com'
let yt2name = ytname
yt2name = 'parthamaity.com'

console.log(ytname);
console.log(yt2name);

// Heap(Reference)
let det1 = {
    name : "prasun",
    age : 23
}
let det2 = det1
det2.age = 21

console.log(det1.age);
console.log(det2.age);