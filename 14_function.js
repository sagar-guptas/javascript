let a = 100;
// const b= 20 ;      //global scope
var c = 300;

if (true) {
    let a = 10;  // block scope
const b= 20;
var c = 30;
console.log(" inner ",a);
}


console.log("outter",a);
// console.log(b);
// console.log(c);