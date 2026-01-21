//trim 
let email = "  hello@example.com  ";
let cleanEmail = email.trim();

console.log(cleanEmail); // "hello@example.com"

//spilt
let tags = "javascript,python,ruby";
let tagArray = tags.split(","); 

console.log(tagArray); // ["javascript", "python", "ruby"]

/**SPLIT Command split the screen
 * split(" ") — Splits by spaces (useful for sentences).\
 * split("") — Splits every single character (including spaces).
 * split(",") — Splits by commas.
 */

//using together 

let input = "  Apple, Banana, Orange  ";

// 1. Trim the whole string
// 2. Split by the comma and a space
let fruitArray = input.trim().split(", ");

console.log(fruitArray); // ["Apple", "Banana", "Orange"]

//Q1 find  out the accourance of "r" in the given strong 

let str="tu meri me tera me teri tu meri me tera me teri";

let count = str.split("r").length - 1;
console.log(count);

/**Applying it to your code:
 * let str = "tu meri me tera me teri tu meri me tera me teri";Count the "r"s:
 * meri (1)
 * tera (2)
 * teri (3)
 * meri (4)
 * tera (5)
 * teri (6)

split("r"): This creates an array with 7 elements.

=>.length: This returns 7.

=> - 1: Since 7 elements means there were 6 "cuts," we subtract 1 to get the actual count of 6. */


/**1. Basic Indexing (Bracket Notation)
You access a value by placing the index number inside square brackets [] immediately after the variable name */
let fruits = ["Apple", "Banana", "Cherry"];
let name = "Alex";

console.log(fruits[0]); // "Apple"
console.log(name[1]);   // "l"


/**. Modern Methods: .at()Introduced in ES2022, the .at() method is often preferred over square brackets because it handles negative indexing much more cleanly.
 Feature,Bracket [],.at()
First Item,arr[0],arr.at(0)
Last Item,arr[arr.length - 1],arr.at(-1)
Second to last,arr[arr.length - 2],arr.at(-2) */

let colors = ["Red", "Green", "Blue"];

console.log(colors.at(-1)); // "Blue" (No need to calculate length!)



/**3. Finding the Index of a Value
If you have the data but don't know its position, use indexOf() or lastIndexOf().

indexOf(value): Returns the index of the first occurrence.

lastIndexOf(value): Returns the index of the last occurrence.

Returns -1 if the value is not found. */

let phrase = "To be or not to be";

console.log(phrase.indexOf("be"));     // 3
console.log(phrase.lastIndexOf("be")); // 16
console.log(phrase.indexOf("Python")); // -1


// Automatically returns the sum
//Without Curly Braces (Implicit Return)
const add = (a, b) => a + b; 

console.log(add(5, 3)); // 8



//2. With Curly Braces (Explicit Return)
const greetUser = (name) => {
  const greeting = "Hello, " + name;
  return greeting; // Must use 'return' here!
};

console.log(greetUser("Alex")); // "Hello, Alex"


//anonymus function 
//Using the function keyword:
// This is an anonymous function assigned to a variable
const greet = function() {
    console.log("Hello!");
};


//Using Arrow Function syntax:
// This is the modern, shorter way to write an anonymous function
const greet = () => {
    console.log("Hello!");
};



greet(); // Both will output: Hello!




setTimeout(function() {
    console.log("This message is shown after 2 seconds");
}, 2000); 
//it comes in milliseconds
//it pops up after 2 seconds
//using arrow function
setTimeout(() => {
    console.log("This message is shown after 2 seconds");
}, 2000);

//setInterval
// it doesnt stop it keeps on popping up after every interval of time


setInterval(() => {
    console.log("This message is shown every 3 seconds");
}, 3000);


let date = new Date();
console.log(date); // Current date and time

let specificDate = new Date("2023-12-25T10:00:00");
console.log(specificDate); // December 25, 2023, 10:00 AM

//new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
// new keyword is used to create an instance of the Date object
//new keyword is defined to create an instance of an object that has a constructor function
//we initialize a new object using the new keyword
//instance is an individual occurrence of an object created from a particular class or constructor function

//call back function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
function fetchData(callback) {
    // Simulate a data fetch with a timeout
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data); // Invoke the callback with the fetched data
    }, 2000);
}
//without setTimeout it will execute immediately



// Callback function to handle the fetched data
function handleData(data) {
    console.log("Fetched Data:", data);
}
fetchData(handleData);




//difference between IIFE and regular function
//IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.
//regular function needs to be called explicitly after its definition to execute.
(function(){
    console.log("demo");
}())//demo will be printed immediately


function demo(){
    console.log("demo");
}