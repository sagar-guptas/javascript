// singleton


// object literal

// Object.create  

const mySym= Symbol('abc')

const jsUser = {
    name:'sagar',
   [ mySym ] :'key1',
    "fullname":'sagar gupta',
    age: 18,
    location:"jaipur",
    email:"sagar@epic.com"
}

// console.log(jsUser.email);
// console.log(jsUser.fullname);
// console.log(typeof jsUser['fullname']);
// console.log(jsUser['email']);
// console.log(jsUser[mySym]);

jsUser.email="sagar.pubg.com"
// console.log(jsUser.email);
// Object.freeze(jsUser);
jsUser.email="sagar.carbon.com"
// console.log(jsUser.email);

// console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello india");
}

jsUser.greeting2 = function () {
    console.log(`hello ${this.fullname}`);
}

console.log(jsUser.greeting2());