"use strict";

//Functions 

/* function logger(){
    console.log('My name is Jonas');
}

logger(); // call, the function

let one;
let two;
let sum;

function calculatePlus( one, two){
    one + two;
    sum = one + two;
    console.log(sum);
}

calculatePlus(2,6);

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    return juice;
};

// we use call the function 
fruitProcessor(5,0)
// we apply the function to variable 
const appleJuice = fruitProcessor(5,0)
console.log(appleJuice)
// we display the function directly wirhout storing it to variable
console.log(fruitProcessor(5,0))

const age1 = function(birthage){
    return new Date().getFullYear() - birthage
}

console.log(age1(1982)) */


// Arrow Function 


const fruitPieces = function(fruit){
    return fruit * 4;
}

const fruitProcessor = function(apples, oranges){
    const applesCuts = fruitPieces(apples);
    const orangesCuts = fruitPieces(oranges);

    const Juice =  `The juice is made from ${applesCuts} apple pieces and ${orangesCuts} orange pieces.`;
    return Juice;

}

const firstJuice = fruitProcessor(3,5)
console.log(firstJuice)
