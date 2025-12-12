//1. What is the difference between var, let, and const program?

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

console.log(a); // undefined due to hoisting
var a = 5;
console.log(a); // 5


// 3. What is closure and where is it used?

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');  


//4. Difference between == and ===?

let num1 = 5;
let num2 = '5';
console.log(num1 == num2);  // true
console.log(num1 === num2); // false

//5. What is event bubbling and event capturing?

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

let a;
console.log(a); // undefined
let b = null;
console.log(b); // null

// 13. What is debouncing and throttling?

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

let jsonString = '{"name": "John", "age": 30, "city": "New York"}';
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // John
let newJsonString = JSON.stringify(jsonObj);
console.log(newJsonString); // '{"name":"John","age":30,"city":"New York"}'


//15. Explain map(), filter(), and reduce() methods

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






   




