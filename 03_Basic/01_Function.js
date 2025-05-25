function sayMyName(){
    console.log("c");
    console.log("s");
    console.log("k");
    
}
// sayMyName()

// function Add(N1,N2){
//     console.log(N1 + N2);
// }

function Add(N1,N2){
    // let result = N1 + N2;
    // return  result;
    return N1+N2
}
const result =  Add(5,6)
// console.log(result);

function message(userName="ram"){
    if(userName === undefined){
        console.log("please enter userName");
        return
    }
    return `${userName} just logged in`

}
const reply = message("Aaryan");
// console.log(reply);

function calcPrice(...num1){
    return num1
}
console.log(calcPrice(200,400,600,800));

const user = {
    username: "Aaryan1",
    price:199
}

function handleObj(anyobject){
    console.log(`username is ${anyobject.username}`);
    
}
// handleObj(user)
handleObj({
    username:"ramesh",
})

const Arr = [200,499,700]
function ReturnArr(getArr){
    return getArr[1]
}
console.log(ReturnArr(Arr));
