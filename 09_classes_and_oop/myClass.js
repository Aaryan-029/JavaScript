class user{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}Aaryan`
    }
    capital(){
        return`${this.username.toUpperCase()}`
    }
}

const userDetails = new user('js','js@gmail.com','1234')
console.log(userDetails.encryptPassword());
console.log((userDetails.capital()));

