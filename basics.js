document.write("Hello, World!");
console.log("Hello, World!");



function  greet(name){
    console.log(name);
}
greet("AKASH");




// greet function with return type
function greetWithReturn(name){
    return "Hello, " + name + "!";
}   
let message = greetWithReturn("AKASH");
console.log(message);

// greet function with default parameter
function greetWithDefault(name = "Guest"){
    return "Hello, " + name + "!";
}   
let defaultMessage = greetWithDefault();
console.log(defaultMessage);    



// Arrow function
const greetArrow = (name) => {
    return "Hello, " + name + "!";
}
let arrowMessage = greetArrow("AKASH");
console.log(arrowMessage);

// Arrow function with implicit return
const greetImplicit = name => "Hello, " + name + "!";
let implicitMessage = greetImplicit("AKASH");
console.log(implicitMessage);

// Function expression
const greetExpression = function(name){
    return "Hello, " + name + "!";
}




let expressionMessage = greetExpression("AKASH");
console.log(expressionMessage);     






// calcu


function calc(a,b){
    return a + b;

}
   let add = calc(5,10);


    console.log(add);

    document.write("<br>"    + add);



    //Rest parameters
    

function numbers(x, ...y){
    console.log("x: " + x);
    console.log("y: " + y);  
}
  numbers(1,2,3,4,5);   





  // Arrow functions basic

    const multiply = (a, b) => a * b;   
    let product = multiply(5, 10);

    console.log(product);






