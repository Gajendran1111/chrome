// operators 

// * Arithmetic Operator

// add +
// sub - 
// mul * 
// div /
// modlusu %
// exponent **
// increment ++
// decrement --

let a = 50;
let a1 = 5;
console.log(a+a1);
console.log(a-a1);
console.log(a*a1);
console.log(a/a1);
console.log(a%a1);
console.log(a**a1);

let b = 10;
b++
console.log(b);

let c = 10;
c--
console.log(c);


// * Assignment Operators

let d = 20;
d =5;
console.log(d);

// * Comparison Operator
// <
// >
// <=
// >=

let com = 10;
let par = 1;
console.log(com<par);
console.log(com>par);
console.log(com<=par);
console.log(com>=par);

// * Logical Operators

// && --> and
// || --> or
//  ! --> not

let no = 20;
let te = 20;
console.log(no!=te);

// * strict Operators

// == --> loose equality / double equal
// === -> strict equality / triple equal

let los = 10;
let str = "10";
console.log(los===str);

// * Ternary Operators

// syntax 
// variable name (condition)? "true valur": "false value"

let age = 100;
let result = (age>=18 && age <=100)? "he is eligible to vote" : "not eligible"
console.log(result);

let mark = 500;
let rank = (mark >= 35 || mark<= 100)? "pass": "fail"
console.log(rank);

