const myNum = [1,2,3]

const myTotal = myNum.reduce(function(acc,curval){
    return acc + curval
},0)

console.log(myTotal);
