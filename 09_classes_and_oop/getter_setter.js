class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return `${this._password}Aaryan`
    }
    set password(value){
        this._password = value
    }
}

const NewUser1 = new user('user1@gmail.com','abc')
console.log(NewUser1.password);
