// Primitive Data type
// number , undefind , string , null , symbol , boolean , BigInt

const score = 100;
const scoreValue = 100.8;
const isLoggin = false;
const temp = null;
const id = Symbol('123');
const anotherId= Symbol('123')
// console.log(id);


// console.table([id,anotherId]);
// console.table(id === anotherId);

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
// console.log(myfun)


//**************************** MEMORY ******************************//
// STACK MEMORY(primitive) , HEAP MEMORY(non-primitive)

let name = "Aaryan";
let anotherName = name
anotherName = "Mahesh"
console.log(anotherName);


 let user1 = {
    email:"user12334@gmail.com",
    upi : 'user@ybl',
 }
 let user2 = user1;

 user1.email = "aaryan@gmail.com";
 console.log(user1.email);
 console.log(user2.email);