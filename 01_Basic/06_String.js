const name = "Aaryan"
const marks = 17
console.log(name+ marks);


console.log(`hello my name is ${name} my marks is ${marks}`);

const Game = new String("Chess-master-pro")
console.log(Game.__proto__);

console.log(Game.length);

console.log(Game.toUpperCase());

console.log(Game.charAt(2));

console.log(Game.indexOf("s"));

const newStr = Game.substring(0,2)
console.log(newStr);

const anotherStr = Game.slice(-4,2);
console.log(anotherStr);

const newStr1 = "    Aaryan     ";
console.log(newStr1);
console.log(newStr1.trim());

const url = "https//aaryan.com "
console.log(url.replace(' ',' %20'))
console.log(url.includes('a'))

console.log(Game.split('-'));
