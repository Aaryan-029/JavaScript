class User{
    constructor(UserName){
        this.UserName = UserName
    }

    logMe(){
        console.log(`username: ${this.UserName}`);
    }
    static createId(){
        return `123`
    }
}

const Aaryan = new User('Aaryan')
// console.log(Aaryan.createId())