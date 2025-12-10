// simple script to print Hello, World!
console.log("Hello, World!");

// Simple addition
let a = 5;
let b = 10;
let sum = a + b;
console.log("Sum:", sum);

//age

let age = 25;
console.log("Age:", age);

//Variable declaration

let name = "John Doe";
let age2 = 30;
console.log("your name is " + name + " and you are " + age2 + " years old.");

let f;
f = 10;
console.log("Value of f:", f);


// Data types

//Primitives
let age3 = 28; // Number

let name2 = "Alice"; // String

let isStudent = true; // Boolean    

let height; // Undefined
let salary = null; // Null 


const student ={
    name: "Bob",
    age: 22,
    isEnrolled: true
}
console.log("Student:", student);



const product = {
    productName:"Ballpen",
    ratings: 4.5,
    offerss:5.0,
    price: 200,
    inStock: true
}
console.log("Product:", product);
 // console.dir(product);\

 











 // Arithmetic Operators Example

let a=20;
let b=10;
console.log("a=", a, "b=", b);
console.log("The sum of a and b is:", a + b);
console.log("The difference of a and b is:", a - b);
console.log("The product of a and b is:", a * b);
console.log("The quotient of a and b is:", a / b);
console.log("The remainder when a is divided by b is:", a % b);

//unary operator
let c = 5;
console.log("Original value of c:", c);
c++;
console.log("Value of c after increment:", c);
--c;
console.log("Value of c after decrement:", c);



//Assignment Operators Example

let x = 15;
console.log("Initial value of x:", x);
x += 5;
console.log("Value of x after += 5:", x);
x -= 3;
console.log("Value of x after -= 3:", x);
x *= 2;
console.log("Value of x after *= 2:", x);


// Comparison Operators Example

let p = 10;
let q = 20;
console.log("p =", p, "q =", q);    
console.log("Is p equal to q?", p == q);
console.log("Is p not equal to q?", p != q);
console.log("Is p greater than q?", p > q);
console.log("Is p less than q?", p < q);
console.log("Is p greater than or equal to q?", p >= q);
console.log("Is p less than or equal to q?", p <= q);



//operator precedence Example

let result = 10 + 5 * 2 - 8 / 4;
console.log("Result of 10 + 5 * 2 - 8 / 4 is:", result);   