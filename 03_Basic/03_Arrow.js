const user = {
    username: "Aaryan",
    price:199,
    message: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}

// user.message()
// user.username = "ramesh"
// user.message()

// console.log(this)

function chai(){
    const name = "Aaryan"
    console.log(this.name);// not work in function only work in object.
    
}
// chai()

const chai1 = function(){
    const name = "Aaryan"
    console.log(this.name);// not work in function only work in object.
    
}
// chai1()

const chai2 = () => {
    const name = "Aaryan"
    console.log(this.name);// not work in function only work in object.
    
}
//chai2()

// const add = (num1,num2) => {
//     return num1+num2
    
// }

//implicit return
// const add = (num1,num2) => num1+num2

// const add = (num1,num2) => (num1+num2)

const add = (num1,num2) => ({username:"Aaryan"})//object
console.log(add(5,7))