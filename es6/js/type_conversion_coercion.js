console.log('Welcome to type cove');

let myVar = String(34);
//console.log(myVar, (typeof myVar));

let bool = String(true);
//console.log(bool, (typeof bool));

let date = String(new Date());
//console.log(date, (typeof date));

let i  = 70;

//console.log(i.toString());

let stri = Number("3434");
stri = Number ('344d34');
stri = Number(false);
stri = Number([1,2,3,4,5,6]);

//console.log(stri,(typeof stri));

let number = parseInt(34.46767);//Number , parseFloat for as it numbers 
console.log(number.toFixed(2), (typeof number));


//type coercion

let mystr = Number ("689");
let mynum = 34;

console.log(mystr + mynum);