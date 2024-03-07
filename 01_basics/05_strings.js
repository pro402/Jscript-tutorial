const name = "Prasun"
const age = 21

// Outdated approach
// console.log(name+" is "+age +" years old")

// Good Approach
console.log(`${name} is ${age} years old`);

// new String(' ') is almost same as normal string as" " but new String() provides various methods in the console
const gameName = new String("Prasun")
console.log(gameName)  //run this commanf=d in the browser console
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', ''))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
