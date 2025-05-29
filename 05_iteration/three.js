// for of loop

const arr = [1,2,3,4,5,6,7]

// for (const num of arr) {
//     console.log(num);
        
// }

const name = "Aaryan"
for (const element of name) {
    //console.log(element);
}

//maps

const map = new Map()
map.set('IN',"India")
map.set("FR","France")

//console.log(map);

for (const key of map) {
    //console.log(key);
    
}
for (const [key1,value1] of map) {
    console.log(key1,":-",value1);
}

const myObj = {
    'game1':'NFS',
    'game2':'Spiderman'
}

for (const [key,value] of myObj) {
    
}