const userEmail = []

// False values
// 1.false
// 2.0
// 3.Bigint 0n
// 4.""
// 5.null
// 6.undefined,
// 7.NaN

//TRUE VALUES
//1."0"
//2.'false
//3." "
//4.[]
//5.{}
//6.function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }

const obj = {}

if(Object.keys(obj).length === 0){
    console.log("object is empty");
    
}

//Nullish Coalescing Operator(??):null undefined

let val1;
val1 = 10 ?? 15 // 10
val1 = null ?? 15 // 15
val1 = undefined ?? 13 // 13
console.log(val1);

// terniary operator
// condition ? true : false

const price  = 100
price <= 80 ? console.log("less") : console.log("greater");
;

