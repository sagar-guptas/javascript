// console.log("s");
// console.log("a");
// console.log("g");
// console.log("a");
// console.log("r");

function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("g");
    console.log("a");
    console.log("r");
}

// sayMyName()

// function Add(num1,num2) {
//     console.log(num1+num2);
// }

function Add(num1,num2) {
    // let res = num1+num2
    // return res
    return num1+num2
}
// Add(2,3)
const res = Add(2,3)
// console.log("the result of add is ",res);

function loginUser(user ="user"){
    if(user===undefined){
        console.log("please enter a name");
        return
    }
    
    return`${user} just log in`;
}
loginUser("sagar")
// console.log(loginUser("sagar"))

function cartPrice(...num1) { //... rest or operator user combine all parament in array 
    return num1
}

// console.log(cartPrice(200));
// console.log(cartPrice(200 , 20));

const user ={
    user:"sagar",
    price:900,
    age:12
}

function HandelObject(anyObject) {
    console.log(`usernmae is ${anyObject.user} age is ${anyObject.age}`);
}

HandelObject(user)
HandelObject({
    user:"raj",
    age:34
})


const array =[200,90];
function HandelArray(anyArray) {
    return anyArray[1];
    
}

console.log(HandelArray(array));

console.log( HandelArray([
    30,40,50
]));