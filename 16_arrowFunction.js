const user = {
    username : "sagar",
    price : 500,


welconmeMessage:function(){
    console.log(`${this.username}, welcome to my website`);
    console.log(this);
}

}
// user.welconmeMessage()

// console.log("after changing context");

// user.username="dji"

// user.welconmeMessage()

// console.log(this);

function chai() {
    let name ="sagar"
    console.log(this.name);
}


function printf() {
    console.log(this.name);
}

// chai()

// const chacha = function () {
//     let username = "sagar"
//     console.log(this.username);
// }


const chacha =  () => {   //this is called arrow function
    let username = "sagar"
    console.log(this.username);
}
// chacha()

const addTwo = (num1 ,num2)=>{
    return num1+num2;      // explecet return  when we use retun keyboard then it is called implecet return 
}

const addTw = (num1 ,num2)=> num1+num2;   // implecet function 


console.log(addTwo(3 , 4))

console.log("implecet return ");

console.log(addTw(3,4));
