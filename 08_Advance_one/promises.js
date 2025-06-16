const promiseOne = new Promise(function(resolve,reject){
    //Do as async task
    //DB calls,cryptography,
    setTimeout(function(){
        console.log('task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consume');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('task2 is complete');
        resolve()
    },1000)
}).then(function(){
    console.log('promise2 consume');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username:'Aaryan',email:'aaryan@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'Aaryan',pass:'1234'})
        }
        else{
            reject('something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{console.log('promise is either or rejected');})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'js',pass:'1234'})
        }
        else{
            reject('ERROR:js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){ // dont handle catch directly
    try{
    const response = await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//     const response = await fetch("https://api.github.com/users/Aaryan-029")
//     const data = await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/Aaryan-029')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})