//1. write a program to find the largest of three numbers without using functions

let num1 = 15;
let num2 = 25;
let num3 = 10;

if(num1 >= num2 && num1 >= num3){
    console.log(num1 + " is the largest number.");
}

else if(num2 >= num1 && num2 >= num3){
    console.log(num2 + " is the largest number.");
}   

else{
    console.log(num3 + " is the largest number.");
}   

//2.Write a JavaScript program to reverse a string without using the reverse() method.


let str = "Hello World";
let reversedStr = "";

for(let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
}
console.log("Reversed String: " + reversedStr);


//3.Write a JavaScript program to check if a number is even or odd.

let number = 7;
if(number % 2 === 0){
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}   



//4. Write a JavaScript program to find all duplicate elements in an array.

let arr = [1, 2, 3, 4, 2, 5, 3, 6];
let duplicates = [];
let seen = {};  

for(let i = 0; i < arr.length; i++){
    if(seen[arr[i]]){
        if(!duplicates.includes(arr[i])){
            duplicates.push(arr[i]);
        }
    } else {
        seen[arr[i]] = true;
    }

}
console.log("Duplicate elements: " + duplicates);

// 5.Write a JavaScript program to remove all vowels from a given string give me the code only.


let inputStr = "This is a sample string.";
let noVowelsStr = inputStr.replace(/[aeiouAEIOU]/g, '');
console.log("String without vowels: " + noVowelsStr);const greetExpression = function(name){
    return "Hello, " + name + "!";
}   
let expressionMessage = greetExpression("AKASH");
console.log(expressionMessage); 




    






