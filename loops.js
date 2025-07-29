// loops

// 1) For loop
// 2) While Loop
// 3) Do While Loop
// 4) For in
// 5) For Of


//for(initialization ;condition ;iteration){};

for(let a = 1;a<=5;a++){
    console.log("java");
    
}

// initialization
// while(condition){
// console.log
// iteration
// }

let b = 1;
while(b<=5){
    console.log("trend");
    b++
}

// dowhile

let c = 1;
do{
    console.log(c);
    c++
}while(c<=5)


// for of 

let fruit =  ["orange","banana","mango","apple","guava","carrot","aalone"]
for(sap of fruit){
    console.log(sap);    
}

// for in 
let obj ={
    name : "trendnologies",
    place : "anna nagar",
    city : "chennai",
    floor : "4th"
}
for (sape in obj){
    console.log(sape+"="+obj[sape]);
}