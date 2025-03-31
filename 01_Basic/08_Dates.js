// dates : 1 jan,1970

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);


// let creDate = new Date(2025,5,29);
// console.log(creDate.toDateString());

// let creDate1 = new Date(2025,5,29,22,7);
// console.log(creDate1.toLocaleString());

let creDate2 = new Date("2025-05-29");
// console.log(creDate.toLocaleDateString());


let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(creDate2.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getHours())
console.log(newDate.getFullYear())
console.log(newDate.getDay())
console.log(newDate.toLocaleString('default',{
    weekday: "long",
    
}));

