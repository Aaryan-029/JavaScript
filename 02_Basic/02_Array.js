const Name = ["Aaryan","bhandari","mahesh"]
const friends = ["yash","pritesh","jeet"]

// Name.push(friends)
// console.log(Name);
// console.log(Name[3][1]);

// NEWarr = Name.concat(friends)
// console.log(NEWarr);

const all = [...Name,...friends]
console.log(all);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real = anotherArr.flat(Infinity)
console.log(real);


console.log(Array.isArray("Aaryan"))
console.log(Array.from("Aaryan"))
console.log(Array.from({name:"Aaryan"}))

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))