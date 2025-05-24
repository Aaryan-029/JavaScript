const tinderUser = new Object() // singleton object
const tinderUser1 = {} // non-singleton object

tinderUser1.id = "123abc"
tinderUser1.name = "Aaryan"
tinderUser1.isLogging = false

// console.log(tinderUser1);

const regularUser = {
    email:"user123@gmail.com",
    fullname:{
        userfullName:{
            firstName:"Aaryan",
            lastName:"Bhandari"
        }
    }
}

console.log(regularUser.fullname.userfullName.firstName);


const obj1 = {1:"a",2:"b",3:"C"}
const obj2 = {4:"a",5:"b",6:"C"}

// const obj3 = { obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        id :1,
        email:"r@gmail.com"
    },
    {
        id :2,
        email:"t@gmail.com"
    },
    {
        id :3,
        email:"y@gmail.com"
    }
]
// console.log(user[1].email)
// console.log(user);
// console.log(tinderUser1);
// console.log(Object.keys(tinderUser1));
// console.log(Object.values(tinderUser1));
// console.log(Object.entries(tinderUser1));
// console.log(tinderUser1.hasOwnProperty('id'));



const course = {
    courseName : "javaScript",
    price : "999",
    courseInstructor:"Aaryan"
}
// console.log(course.price);

const {price:p} = course
console.log(p);

{
    "name":"Aaryan",
    "courseName" : "javaScript",
    "price" : "999"
}