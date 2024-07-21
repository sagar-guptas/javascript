const marvel = ['thor',"ironman",'ironman']
const dc = ['superman', 'flashman','gadi']

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][1]);

// const allhero = marvel.concat(dc)
// console.log(allhero);

// const allHero = [...marvel,...dc]

// console.log(allHero);

const anotherArr = [1,2,3,4,[6,7,8,[9,10]]]

const real = anotherArr.flat(Infinity)

// console.log(real);

Array.isArray("sagar")
console.log(Array.isArray("sagar"));

console.log(Array.from("sagar"));


console.log(Array.from({name:'sagar'}));  //intersting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));