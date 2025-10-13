/* let js = 'amazing';
console.log(40 + 5 + 9 + 15 - 7);


let firstName = 'Bob';
console.log(firstName);
console.log(23);

let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);

console.log(typeof 'ana');
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof true); */

//Undefine variable...
/* let year;
console.log(typeof year); */

//////////////////////////////////

//14. Operators

/* const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
const power = 2 ** 4;

console.log(ageJones + ', ' + ageSarah + ', Power of 4 is: ' + power);

//Concatenating two variables ( strings)

const firstNameA = 'John';
const lastNameA = 'Bubka';

console.log(firstNameA + lastNameA);

let x = 15;// Result is 15
x += 10; // x= x + 10
x *= 4;
x++;
x--;
x--;
console.log(x)

//Comparisson Operators

console.log(ageJones > ageSarah);
console.log(ageSarah <= 18); */


/////////////////////////////////////////////

//17. Strings and template literal

/* const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old.';

console.log(jonas);

const johnNew = (`Hi i'm ${firstName}, and i want to be a ${job}. This year i will make ${year - birthYear}`);
console.log(johnNew); */

////////////////////////////////////////////

//18 Taking decisions!!!

/* const age = 15;
const isOldEnought = age >= 18;
console.log(isOldEnought);

// if statement 

if (isOldEnought) {

    console.log(`Sarah can start a driving license 🚗`);
}

if (age >= 18) {

    console.log(`Sarah can start the driving course, 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Too young, have to wait for another ${yearsLeft} years.`);
} */


//////////////////////////////////////////////////

// Converting types of variables 

/* const inputYear = '1999';

//This will add number to the string and the output will be 199918
console.log(inputYear + 18);

//by using Number function we change the value of the variable just for this peace of code. Will continue to be string. 
console.log(Number(inputYear) + 18);

console.log(typeof inputYear);

//This will fail as you can convert string name to number. will return Nan - non number  
let name = `Jonas`;
console.log(Number(name));

let number = 23;

console.log(String(number));
console.log(typeof String(number));

// type coercion 

const favourite = prompt(`Hello, add some value!!!`);
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`hahah is not a number`);
}
 */

///////////////////////////////////////////////

//Else if statement 
/* const newFeature = function () {

    console.log(`Welcome to the application`);
}

newFeature();

const favourite = Number(prompt(`What is your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`Cool! 23 is an amazing number!`);
} else if (favourite === 9) {
    console.log(`9 is also a cool number`);
} else if (favourite === 7) {
    console.log(`7 is also a cool number`);
} else {
    console.log(`The number is not one of  23. 9, 7`);
} */

///////////////////////////////////////////

//lOGICAL OPERATORS 

/* const hasDrivingLicense = true; //A
const hasGoodVision = true; //B 
console.log(hasDrivingLicense || hasGoodVision)
//to state oposite use !
console.log(!hasDrivingLicense)
console.log(!hasGoodVision)

const shouldDrive = hasDrivingLicense || hasGoodVision

if(shouldDrive){

    console.log("Sarah is able to drive!")
}else{

    console.log('Someone else should drive.... ')
}

const isTired = true //C
console.log(hasDrivingLicense && hasGoodVision && !isTired) */

///////////////////////////////////
//Challange #3

/*  const scoreDolphins = (96 +108 +89) / 3
 const scoreKoalasa = (88 + 91 + 110) / 3 
 
 if (scoreDolphins > scoreKoalasa){
     console.log('Dolphins win the trophy')
 }else if(scoreKoalasa > scoreDolphins){
     console.log("Koalas win the trophy")
 }else if(scoreDolphins === scoreKoalasa){
     console.log("Both win the trophy")
 } */

     ////////////////////////////////////////////

     //Switch statement 

const day = "monday";

