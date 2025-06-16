const user = {
    username:'Aaryan',
    LoginCount:7,
    signedIn:true,
    getUserDetails:function(){
        //console.log('user details from database');
        //console.log(`username:${this.username}`);
        //console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(userName,loginCount,isLoggedIn){
    this.userName = userName
    this.LoginCount = loginCount
    this.isLoggedIn = isLoggedIn
    //return this
}

const userOne = new User('Aaryan',12,false)
const userTwo = new User('js',8,true)
console.log(userOne);
console.log(userTwo);