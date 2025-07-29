// function 

// syntax 
// function name (){}

function box (){

var a = 10;
var a = 20;
console.log(a);

let b = 30;
b = 40;
console.log(b);

const c = 50;
console.log(c);
}
box();


// Function  statement Declaration  --parameter & argument
// var h = "hello";
function box1 (h){
    console.log(h);
}
box1("hello");

// Function Expression or Anonymous Function
let fun = function box2 (h){
    console.log(h);
}
fun("hello");

// anonymous function 
let funt = function (h){
    console.log(h);
}
funt("hello");

// Immediate Invoke Function Expression 

(function (js){
    console.log(js);  
})("hello world");
// Arrow Function

// syntax 
// ()=>{}

    let aro = (fun)=>{console.log(fun)}
    aro("arrow function");


