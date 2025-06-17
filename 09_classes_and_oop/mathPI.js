const discripter = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(discripter);


const user = {
    userName : 'Aaryan',
    password : 123,
    email : 'aaryan@gmail.com'
}

console.log(Object.getOwnPropertyDescriptor(user,'userName'));

Object.defineProperty(user,'userName',{
    //writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(user,'userName'));

for (const [key,value] of Object.entries(user)) {
    console.log(`${key}:${value}`);
    
}