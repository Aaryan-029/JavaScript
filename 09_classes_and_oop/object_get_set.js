const user = {
    _email:"a@gmail.com",
    _password:'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const user1 = Object.create(user)
console.log(user1.email)

