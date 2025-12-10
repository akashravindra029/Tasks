// print the kargest of two numbers using if-else

let num1 = 25;
let num2 = 40;
if (num1 > num2) {
    console.log(num1, "is the largest number");
}   
else {

    console.log(num2, "is the largest number");
}


// check even or odd


let number = 12;

if (number % 2 == 0) {  
    console.log(number, "is an even number");
}
else {
    console.log(number, "is an odd number");
}




//reverse a string without using reverse function

let str = "HelloWorld";
let reversedStr = "";   
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}       
console.log("Reversed String:", reversedStr);

//count vowels in a string

let inputStr = "Hello World";
let vowelCount = 0;

for (let i = 0; i < inputStr.length; i++) {
    let char = inputStr[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
    }   
}
console.log("Number of vowels in the string:", vowelCount); 





// multiplication table of a number

let num = 7;
console.log("Multiplication Table of", num);
for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log( result);
}   





//  global and local scope

// let globalVar = "I am a global variable";   

//function checkScope() {
  //  let localVar = "I am a local variable";
    //console.log(globalVar); // Accessible
    //console.log(localVar);  // Accessible
//}   
//checkScope();
//console.log(globalVar); // Accessible
//console.log(localVar);  // Unaccessible - Uncommenting this line will cause an console.error();




// function scope

function greet() {
    let message = "Hello, World!";
    console.log(message); // Accessible
}
greet();
//console.log(message); // Unaccessible - Uncommenting this line will cause an console.error();


//block scope


if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); 
}   
//console.log(blockVar); 



// factorial of number using function


function factorial(n) { 
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);

}
let numberFactorial = 5;
let resultFactorial = factorial(numberFactorial);   



