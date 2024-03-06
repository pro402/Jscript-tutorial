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
// Arrays,Objects,Functions 

// JavaScript is a dynamically typed language
