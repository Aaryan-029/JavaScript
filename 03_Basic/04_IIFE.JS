// Immediately Invoked Function Expressions(IIFE)

// function chai(){
//    console.log("HELLO");

// }
// chai()

// in different way

(function chai(){
    //named IIFE
    console.log("HELLO");
    
})();//";" IS IMPORTANT to stop IIFE

( (name) => {
    //simple IIFE
    console.log("HELLO",name);
    
})('Aaryan');
   