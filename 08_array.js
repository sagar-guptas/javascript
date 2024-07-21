// arrays

const myArray = [ 0,1,2,3,4,5]
const hero = ['sagar','gupta']

const new2 = new Array('sagar' , 'cartoon')

// console.log(hero[0]);
// console.log(new2);


//  Array methods

myArray.push(6)
myArray.push(7)
// console.log(myArray);
myArray.pop()
// console.log(myArray);

myArray.unshift(9)
// console.log(myArray);


myArray.shift()
// console.log(myArray);

myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(6));
// console.log(myArray.indexOf(6));

const newArray = myArray.join()

// console.log(newArray);

// =========== slice , splice ===============


console.log("A",myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("C",myArray);
