// Immediately Invoked Function expressions (IIFE)

// syntex (function(name))('prasun');

// Example 1 
// named iife
(function chai(){
    console.log("DB CONNECTED")
})();

// example 2
(function cha(name){
    console.log(`DB CONNECTED to ${name}`)
})('prasun');

// example 3
// arrow functions
(()=>{
    console.log(`DB DISCONNECTED`);
})();

// example 4
((n)=>{
    console.log(`DB DISCONNECTED FROM ${n}`);
})('PRASUN');