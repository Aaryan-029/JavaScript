// Primitive Data type
// number , undefind , string , null , symbol , boolean , BigInt

const score = 100;
const scoreValue = 100.8;
const isLoggin = false;
const temp = null;
const id = Symbol('123');
const anotherId= Symbol('123')
console.log(id);


console.table([id,anotherId]);
console.table(id === anotherId);

// reference data type(Non-primitive)
//Array , Object , Funtions

const heros = ["shaktiman","Aaryan","doga"];

    let obj = {
    name:"Aaryan",
    age:17,
}

const myfun = function(){
    console.log("Hello world");
    
}
console.log(myfun)




 