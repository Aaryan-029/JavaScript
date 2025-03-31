// object
//singleton
//object literals
const mySym = Symbol("key1")
const user = {
    name:"Aaryan",
    [mySym]:"mykey1",
    age:16,
    location:"Surat",
    email:"user123@gmail.com",
    isLogging:false,
    lastLogging:["mon","sun"]
}


// console.log(user["email"]);
// console.log(user[mySym]);


// Object.freeze(user) // unot add or modified in object
// console.log(user);

user.greet = function(){
    console.log("hello user");
}
console.log(user.greet());


user.greet2 = function(){
    console.log(`Hello user ,${this.name}`);
}
console.log(user.greet2());
