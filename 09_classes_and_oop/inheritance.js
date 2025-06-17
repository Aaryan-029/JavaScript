class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`userName is ${this.userName}`);
        
    }
}

class Teacher extends User{
    constructor(userName,Eamil,password){
        super(userName)
        this.Eamil = Eamil
        this.password = password
    }
    addCourse(){
        console.log(`new course ${this.userName}`);
        
    }
}

const obj = new Teacher('Aaryan','Aaryan@gmail.com','123')
obj.addCourse()
obj.logMe()

