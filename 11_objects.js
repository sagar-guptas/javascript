const makerusr = new Object()   //singlton 

const maker = {}   //nonsingleton

maker.name="sagar"
maker.phone="912242"

// console.log(maker);

const regUser ={
    email: 'sum@gmail',
    fullname: {
        firstname:"sagar",
        lastname:"gupta"
    }
}

// console.log(regUser);
// console.log(regUser.fullname.firstname);
// console.log(regUser.fullname?.firstname);

const obj= {
    1:"sagar",
    2:"gupta"
}

const obj2={
    3:"aman",
    4:"raj"
}

const obj3={obj,obj2}
console.log(obj3);

const obj4 = Object.assign(obj,obj2)
console.log(obj4);
console.log(obj);

const obj6 = {...obj, ...obj2}
console.log(obj6);

const user = [
    {
        1:"sagar",
        2:"gupta"
    }
]

