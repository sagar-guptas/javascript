// ther are two type of datatype , it is divided by call by value and call by refrence  
// premitive and non premitive 
// premitive is call by value 

// types string , number , boolean , null , undefined , symbol bigint

const id = Symbol('123')
const other = Symbol('123')

console.log(id===other);


// javascript is a dynamic language


// non premitive call by reference 

//  array , object , functions dataType is object 

const hero =['sagar','raja','jackey']

console.log(hero);

let myObj = {
    name:"sagar",
    age:32
}

const myFunction = function(){
    console.log('hello india ');
}

myFunction()


//  +++++++++++++++++++

// stack (primitive ) call by value it gives a copy of actual data ,
//  heap (non primitive) call by refrence its change the actual value