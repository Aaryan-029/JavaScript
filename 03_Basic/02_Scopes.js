let a = 10
const b= 20
var c = 30

function one(){
    const username = "Aaryan"
    function two(){
        const web = "youtube"
        console.log(username);
    }
    //console.log(web);
    two()
}
one()

//******************************* intresting ***********************************
console.log(addOne(9));// it's declare before function

function addOne (num){
    return num+1
}
addOne(9)

const addTwo = function(num){
    return num+2
}
addTwo(9)//not allowed to declare before function.