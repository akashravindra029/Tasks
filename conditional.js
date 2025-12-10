let color = "black";

if (color == "black")
    { 
    console.log("Color is black");
}
else
    {
    console.log("Color is not black");
}   


//odd or even

let number = 7;

if (number % 2 == 0)
{
    console.log(number + " is even");
}   
else
{
    console.log(number + " is odd");
}



//else if

let marks = 85;

if (marks >= 90)    
{
    console.log("Grade: A");
}
else if (marks >= 80)    
{       
    console.log("Grade: B");
}
else if (marks >= 70)    
{       
    console.log("Grade: C");
}



// Ternary Operator

let age = 20;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);


// Nested if

let name2= "Alice";
let password = "password123";

if (name2== "Alice")
{
    if (password == "password1234")
    {
        console.log("Access granted");
    }
    else
    {
        console.log("Incorrect password");
    }
}



// Switch Case

let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";      
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;

    default:
        dayName = "Invalid day";
        break;
}   
console.log("Day:", dayName);







//prompt  for if the number is multiple of 5 or not

 let num =prompt("Enter a number: ");
if (num % 5 == 0)
{
    console.log(num + " is a multiple of 5");
}       
else
{
    console.log(num + " is not a multiple of 5");
}   



//event handler for button click

function handleClick() {
    console.log("Button was clicked!");
}   
