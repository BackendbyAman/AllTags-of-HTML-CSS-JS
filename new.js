// JavaScript Variables
let variable1 = "Hello";
const variable2 = 42;
var variable3 = true;

// JavaScript Data Types
let stringData = "This is a string";
let numberData = 100;
let booleanData = false;
let nullData = null;
let undefinedData;
let objectData = { key: "value" };
let arrayData = [1, 2, 3];

// JavaScript Operators
let sum = 5 + 3;
let comparison = 10 > 5;
let logical = true && false;

// JavaScript Functions
function greet(name) {
    return `Hello, ${name}`;
}
const add = (a, b) => a + b;

// JavaScript Objects
const person = {
    name: "John",
    age: 30,
    greet: function () {
        return `Hi, I am ${this.name}`;
    }
};

// JavaScript Arrays
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Orange");

// JavaScript Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// JavaScript Conditionals
if (numberData > 50) {
    console.log("Number is greater than 50");
} else {
    console.log("Number is less than or equal to 50");
}

// JavaScript Events
document.querySelector("#myButton").addEventListener("click", () => {
    alert("Button clicked!");
});

// JavaScript DOM
const element = document.querySelector("#myElement");
element.style.color = "red";

// JavaScript JSON
const jsonData = JSON.stringify(person);
const parsedData = JSON.parse(jsonData);

// JavaScript AJAX
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};
xhr.send();

// JavaScript Promises
const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});
promise.then(result => console.log(result)).catch(error => console.error(error));

// JavaScript Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a sound`;
    }
}

// JavaScript ES6 Features
let [x, y] = [10, 20]; // Destructuring
const newArray = [...arrayData, 4, 5]; // Spread operator

// JavaScript Error Handling
try {
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message);
}

// JavaScript Regular Expressions
const regex = /hello/i;
console.log(regex.test("Hello World"));

// JavaScript Date Object
const currentDate = new Date();
console.log(currentDate.toDateString());

// JavaScript Local Storage
localStorage.setItem("key", "value");
console.log(localStorage.getItem("key"));

// JavaScript Fetch API
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data", error));

// JavaScript Modules (example with ES6 syntax)
// export function sayHello() {
//     return "Hello!";
// }
// import { sayHello } from './module.js';
// console.log(sayHello());
