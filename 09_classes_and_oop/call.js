function SetUserName(username){
    this.username =username;
}

function createUser(username,email,password){
    SetUserName.call(this,username)
    this.email = email
    this.password =password

}

const js = new createUser('js','js@gmail.com','123')
console.log(js);

