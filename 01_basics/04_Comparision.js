console.log(2 > 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 < 1);
console.log(2 != 1);

console.log("2" > 1);        //bad practice 
console.log("2" > 3);        //bad practice
console.log("02" > 3);       //bad practice
console.log("1"  ==  true) ; //bad practice

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);      // why true

// the reason is that an equality check == and comparisions >< >= 
// <= works differently
// Comparisions convert null to a number , treating it as 0.
// that's why (0) null >= 0 is true and (1) null > 0 is false.

// === is strictly check (it checks value along with data type)
// good practice

console.log("2" === 1);        
console.log("1"  ===  true) ; 
console.log(null == 0);


