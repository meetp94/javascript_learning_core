console.log('tut 3');

//variables in JS 

//var, let, const

var name = `mee"ttt`;
var channel;
channel = "Meet";
console.log(name);
console.log(channel);

//Rules 
//1.can not start with numbers
//2. can start with letter, number, _,or $
//3.case sensitives

//const and let 
//const can not chnage 
/*
const myName = 'Meet';
myName = 'p2';
console.log(myName);*/

var city = 'vadodara';

//let - local variable can be change // var is for global by default

{
    let city ="Edmonton";
    console.log(city);
}

console.log(city);


const arr1 = [1,2,3,4,5];

arr1.push(10);
console.log(arr1);

//In const we can add and delete things but nit reallocate same name 


//Case tyes
// 1. camelCase
//2. kebab-case
//3.snake_case
//4. Pascalcase

////// Data Types in JS ///////

// 1. Primitive dattype ---memory allocation stack---string ,  numbers, boolean, Null, Undefined, Symbol
//2.Refrecnce data type----heap(dynamic)--object --dirived  ---- Arrays, object litreal, functions, Dates


