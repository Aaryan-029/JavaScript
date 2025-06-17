let myHero = ['thor','spider']

let heroPower = {
    thor:'Hammer',
    spiderman:"Sling",
    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
        
    }
}

Object.prototype.Aaryan = function(){
    console.log('Aaryan is present in all object');
    
}

Array.prototype.HeyAaryan = function(){
    console.log('Aaryan say hello');
    
}

//heroPower.Aaryan()
// myHero.Aaryan()
// myHero.HeyAaryan()
//heroPower.HeyAaryan()

//Inheritance

const user = {
    userName:'Aaryan',
    email:'aaryan@gmail.com'
}

const Teacher = { 
    Video:true
}
const TechSupport = {
    available:false
}
const TASupport = {
    assignment:'js assignment',
    fulltime:true,
    __proto__:TechSupport
}
Teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(TechSupport,Teacher)

let name = 'AaryanBhandari       '
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is:${this.trim().length}`);
    
    
}

name.trueLength()