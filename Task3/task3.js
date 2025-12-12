//1. What is the difference between var, let, and const program?


// var → Function-scoped, can be redeclared & reassigned, hoisted with undefined.

//let → Block-scoped, cannot be redeclared, can be reassigned, hoisted but not initialized.

// const → Block-scoped, cannot be redeclared or reassigned, hoisted but not initialized

var x = 10;
console.log(x);   // 10

var x = 20;       // redeclaration allowed
console.log(x);   // 20

x = 30;           // update allowed
console.log(x);   // 30


//let

let y = 10;
console.log(y);  

// let y = 20;    // 

y = 20;           // ✔ update allowed
console.log(y);   // 20

// const

const z = 10;
console.log(z);   // 10

// z = 20;        
// const z = 30; 

//2. Explain hoisting in JavaScript with an example.
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code.      

console.log(a); // undefined due to hoisting
var a = 5;
console.log(a); // 5


// 3. What is closure and where is it used?
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables and parameters, even after the outer function has returned. Closures are commonly used for data privacy, creating function factories, and maintaining state in asynchronous programming.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');  


//4. Difference between == and ===?
// == checks for value equality with type coercion, while === checks for both value and type equality without type coercion.
let num1 = 5;
let num2 = '5';
console.log(num1 == num2);  // true
console.log(num1 === num2); // false

//5. What is event bubbling and event capturing?
// Event bubbling and event capturing are two phases of event propagation in the DOM. In event bubbling, the event starts from the target element and propagates up to the root element. In event capturing, the event starts from the root element and propagates down to the target element.
//event caputuring  means the event is first captured by the outermost element and propagated to the inner elements.

// Event Bubbling
document.getElementById("child").addEventListener("click", function() {
    alert("Child Clicked - Bubbling");
}); 
document.getElementById("parent").addEventListener("click", function() {
    alert("Parent Clicked - Bubbling");
});
// Event Capturing
document.getElementById("parent").addEventListener("click", function() {
    alert("Parent Clicked - Capturing");
}, true);
document.getElementById("child").addEventListener("click", function() {
    alert("Child Clicked - Capturing");
}, true);


//6. Explain callback functions.

// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used for asynchronous operations, such as handling events or making API calls.

function fetchData(callback) {

    setTimeout(function() {
        const data = "Sample Data";
        callback(data);
    }, 2000);
}
fetchData(function(data) {
    console.log("Data received: " + data);
});

// 7. What are Promises and how do they work?
// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can be in one of three states: pending, fulfilled, or rejected. Promises allow you to chain asynchronous operations and handle errors more gracefully.


let promise = new Promise(function(resolve, reject) {
    let success = true;
    if(success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }   
});
promise.then(function(message) {
    console.log(message);
}
).catch(function(message) {
    console.log(message);
});


//8. Difference between synchronous and asynchronous JavaScript?

// Synchronous JavaScript executes code sequentially, blocking further execution until the current operation completes. Asynchronous JavaScript allows multiple operations to run concurrently, enabling non-blocking behavior and improving performance, especially for I/O operations.
// Asynchronous JavaScript often uses callbacks, promises, or async/await to handle operations that take time to complete, such as network requests or file reading.

// Synchronous Example
function syncTask() {
    console.log("Synchronous Task 1");
    console.log("Synchronous Task 2");
}
syncTask();
// Asynchronous Example
function asyncTask() {
    console.log("Asynchronous Task 1"); 
    setTimeout(function() {
        console.log("Asynchronous Task 2");
    }, 2000);
}
asyncTask();



//9. What is the purpose of async and await?

// The purpose of async and await is to simplify the process of working with promises in asynchronous JavaScript code. The async keyword is used to declare a function as asynchronous, allowing the use of the await keyword inside it. The await keyword pauses the execution of the async function until the promise is resolved, making the code easier to read and write by avoiding the need for .then() chains.

function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched asynchronously");
        }

, 2000);
    }
);
}
async function displayData() {
    const data = await fetchDataAsync();
    console.log(data);
}
displayData();


//10. What is scope chain?
// The scope chain is the hierarchy of scopes that determines the accessibility of variables in nested functions. When a variable is referenced, JavaScript first looks in the local scope, then in the outer scopes, and finally in the global scope if it is not found in any of the inner scopes.

let globalVar = "I am a global variable";
function outerFunctionScope() {
    let outerVar = "I am an outer variable";
    function innerFunctionScope() {
        let innerVar = "I am an inner variable";
        console.log(globalVar); // Accessing global variable
        console.log(outerVar);  // Accessing outer function variable
        console.log(innerVar);  // Accessing inner function variable
    }
    innerFunctionScope();
}
outerFunctionScope();


//11. Explain this keyword in different contexts.
// The this keyword refers to the object that is executing the current function. Its value depends on how the function is called.

console.log(this); // In global context, refers to global object (window in browsers)
const obj = {
    name: "JavaScript Object",
    getName: function() {
        return this.name; // Refers to obj
    }   
};
console.log(obj.getName());
function Person(name) {
    this.name = name; // Refers to the new object being created
}
const person1 = new Person("Alice");
console.log(person1.name);


// 12. Difference between null and undefined?
// undefined means a variable has been declared but has not yet been assigned a value. null is an assignment value that represents no value or no object.

let a;
console.log(a); // undefined
let b = null;
console.log(b); // null

// 13. What is debouncing and throttling?
// Debouncing and throttling are techniques used to control the rate at which a function is executed, especially in response to events like scrolling or resizing.
// Debouncing ensures that a function is only called after a specified period of inactivity, while throttling ensures that a function is called at most once in a specified time interval.

// Debouncing
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);

    };
}

// Throttling
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if(!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        }
        else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}


// 14. What is JSON and how do you parse and stringify it?
// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data in web applications.
// You can parse a JSON string into a JavaScript object using JSON.parse() and convert a JavaScript object into a JSON string using JSON.stringify().
// Parsing JSON and Stringifying JSON


let jsonString = '{"name": "John", "age": 30, "city": "New York"}';
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // John
let newJsonString = JSON.stringify(jsonObj);
console.log(newJsonString); // '{"name":"John","age":30,"city":"New York"}'


//15. Explain map(), filter(), and reduce() methods

// map(), filter(), and reduce() are array methods in JavaScript that allow you to manipulate and transform arrays in different ways.
// map() creates a new array by applying a function to each element of the original array.
// filter() creates a new array containing only the elements that satisfy a specified condition.
// reduce() reduces an array to a single value by applying a function to each element and accumulating the result.


let numbers = [1, 2, 3, 4, 5];

// map()
let squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// filter()

let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
// reduce()
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15






   




