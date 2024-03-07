// const score = 400
// console.log(score);

// const ball = new Number(100)
// console.log(ball);

// console.log(ball.toString().length);
// console.log(ball.toFixed());
// console.log(ball.toFixed(2));

// const other =  23.934
// console.log(other.toPrecision(3));
// console.log(other.toPrecision(2));
// console.log(other.toPrecision(1));

// const hunderds = 100000000
// console.log(hunderds.toLocaleString());
// console.log(hunderds.toLocaleString('en-IN'));

// ++++++++++++++++++++ Maths ++++++++++++++++++++++++
console.log(Math); //write this code in browser
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(3,2,45,32,35,7,2,-55));
console.log(Math.max(3,2,45,32,35,7,2,-55));

console.log(Math.random()); //very usefull in JS
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10)+1);

// random number for dice throw
const max = 6
const min = 1

console.log(Math.floor(Math.random()*(max-min+1))+min);