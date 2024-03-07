// Dates

// let date = new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toTimeString());
// console.log(date.toUTCString());


// let mydate =new Date(2024,7,2);
// let mydate = new Date(2024,7,2,14,44)
// let mydate = new Date("2024-08-03")
let mydate = new Date("08-03-2024")
console.log(mydate.toLocaleDateString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {dateStyle:'full',timeZone: "Asia/Kolkata"}))