// if statement 
const temp=7
// if(temp===7){
//     console.log("temp = 7");
// }
// else{
//     console.log("temp!=7");
// }
// console.log("executed");


// const balance = 1000
// // if(balance>500) console.log("test");

// if(balance < 500) {
//     console.log("less than 500");
// }

// else if(balance < 750) {
//     console.log("less than 750");
// }

// else if(balance < 900) {
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy cource");
    
}

const userLoggedInFromGoogle = true
const userLoggedInFromEmail = false
if(userLoggedInFromEmail || userLoggedInFromGoogle){
    console.log("user logged in");
    
}