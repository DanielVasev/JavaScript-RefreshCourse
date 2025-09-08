//Values and Variables
/* const country = 'Bulgaria';
const continent = 'Europe';
let population = 6500000;

console.log(country);
console.log(continent);
console.log(population); */

///////////////////////////////////

//Date Types

/* const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
 */
////////////////////////////////////

//Coding Challenge #1

/* let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIJohn);
console.log(BMIMark);

let markHigherBmi = BMIMark < BMIJohn;
console.log(markHigherBmi);

//Coding Challenge #2

if (BMIMark > BMIJohn) {
    console.log(`Mark's ${BMIMark.toFixed(2)} BMI is higher than John's ${BMIJohn.toFixed(2)}!`);
} else {
    console.log(`John's BMI ${BMIJohn.toFixed(2)} is higher than Mark's ${BMIMark.toFixed(2)}!`);
}*/

////////////////////////////////////////////


//Strings and Template Literal

/* Basic Operators
If your country split in half, and each half would contain half the population, then how many people would live in each half?

Increase the population of your country by 1 and log the result to the console.

Finland has a population of 6 million. Does your country have more people than Finland?

The average population of a country is 33 million people. Does you country have less people than the average country?

Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'. */

/* let population = 6500000;
let populationHalf = population / 2;

//half of the country population
console.log(`Half of the Bulgaria will be ${populationHalf}`)

population++;

//increase the population number by 1
console.log(population++);

// compare Bulgarian population with Finland
const finlandPop = 6000000;

if (finlandPop >= population) {
    console.log(`Population of Finland is greater than Bulgaria!`);
} else {
    console.log(`Nop, Bulgaria is the biggest countrie considering the number of the population! BG has ${population - finlandPop} more than Finland.`);
}

let averagePopulation = 30000000;

if (averagePopulation >= population) {
    averagePopulation = true;
    console.log(averagePopulation);
}

let description = `Bulgaria is in Europe, and its ${population} milion people spask Bulgarian. `
console.log(description);

 */


////////////////////////////////////////////////////////



