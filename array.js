// array methods 

 
// push
// pop
// shift 
// unshift 
// splice 
// sort 
// reverse  


let psh = [10,20,30,40,50]
psh.push(60)
console.log(psh);

let po = [10,20,30,40,50]
po.pop()
console.log(po);

let shi = [10,20,30,40,50]
shi.shift()
console.log(shi);

let unshi = [10,20,30,40,50]
unshi.unshift(9)
console.log(unshi);

// splice 
// syntax 
// variable name.splice(index,splice,value)

// 0 its use to add a particular value in the given index space 
// 1 its use to add a particular value in the given index space but it will remove the already existing value(or) replace

let days = ["sunday","monday","wednesday","thuresday","friday","saturday"]
days.splice(2,1,"tuesday")
console.log(days);


// sort 

let sot = ["orange","banana","mango","apple","guava","carrot","aalone"]
console.log(sot.sort());

let numm = [2,3,1,5,4,6,9,7,11,16]
console.log(numm.sort());

// reverse 
let rev = "esrever"
console.log(rev.split("").reverse("").join(""));

let fru = "banana"
console.log(fru.split("a").length-1);

