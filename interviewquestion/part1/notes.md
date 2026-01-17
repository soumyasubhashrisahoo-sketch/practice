# JavaScript - interview questions part 1 

This document covers the **core concepts of JavaScript** required for beginners and exam preparation. It explains **variable declarations, operators, hoisting, arrays, strings, objects, and functions** with clear examples.

---

## Q1. Variable Declarations in JavaScript (`var`, `let`, `const`)

In modern JavaScript, how a variable is declared affects its **scope**, **hoisting behavior**, and **mutability**.

### 🔹 Quick Comparison Table

| Feature       | `var`                            | `let`              | `const`            |
| ------------- | -------------------------------- | ------------------ | ------------------ |
| Scope         | Function Scoped                  | Block Scoped `{ }` | Block Scoped `{ }` |
| Hoisting      | Yes (initialized as `undefined`) | Yes (TDZ)          | Yes (TDZ)          |
| Re-assignable | Yes                              | Yes                | No                 |
| Re-declarable | Yes                              | No                 | No                 |

---

### 🔹 Scope (Accessibility)

#### `var`

* Function scoped
* If declared outside a function, it becomes global
* Can cause **unexpected bugs**

#### `let` and `const`

* Block scoped
* Safer and recommended

```javascript
if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
}

console.log(x); // 10
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError
```

---

### 🔹 Re-assignment vs Re-declaration

```javascript
var a = 10;
var a = 20; // Allowed

let b = 10;
// let b = 20; // Error

const c = 10;
// c = 20; // Error
```

⚠️ **Note:**
`const` variables **cannot be reassigned**, but **objects and arrays declared with `const` can be modified**.

```javascript
const arr = [1, 2, 3];
arr.push(4); // Allowed
```

---


## Why `const` Arrays and Objects Can Be Modified

⚠️ **Important Note:**
`const` does **NOT** mean the value is completely unchangeable.
It means the **variable reference cannot be changed**, not the **data inside it**.

---

### 🔹 Key Logic (Very Important)

When you write:

```javascript
const arr = [1, 2, 3];
```

* `arr` stores a **reference (address in memory)** to the array
* `const` **locks this reference**
* You **cannot point `arr` to a new array**
* But you **can change the contents of the same array**

---

### 🔹 Why `arr.push(4)` Works

```javascript
arr.push(4); // Allowed
```

✔ This works because:

* You are **modifying the existing array**
* The **memory reference stays the same**
* `const` rule is NOT broken

Think of it like this 👇

> `const` locks the **container**, not what’s **inside** the container.

---

### 🔹 What Is NOT Allowed

```javascript
arr = [10, 20, 30]; // ❌ Error
```

❌ This fails because:

* You are trying to assign a **new array**
* That changes the **reference**
* `const` does not allow re-assignment

---

### 🔹 Same Logic for Objects

```javascript
const user = { name: "Ayu", age: 18 };

user.age = 19; // Allowed
user.city = "Delhi"; // Allowed

user = {}; // ❌ Error
```

---

### 🔹 Simple One-Line Exam Answer

> `const` prevents re-assignment of the variable reference, but allows modification of object or array contents because the reference remains unchanged.

---

### 🔹 Memory Analogy (Easy to Remember)

* `const` = fixed address
* Object/Array = data at that address
* You can edit the data
* You cannot change the address

---

### ✅ Summary Table

| Action                | Allowed with `const` |
| --------------------- | -------------------- |
| Modify array/object   | ✅ Yes                |
| Reassign variable     | ❌ No                 |
| Add/remove properties | ✅ Yes                |
| Point to new object   | ❌ No                 |

---

✨ **This concept is VERY important for interviews and exams**





## Q2. Types of Operators in JavaScript

Operators perform operations on values and variables.

### 🔹 Arithmetic Operators

Used for mathematical calculations:

* `+`, `-`, `*`, `/`
* `%` (remainder)
* `**` (exponentiation)

```javascript
let a = 5 ** 2; // 25
```

---

### 🔹 Assignment Operators

Used to assign values:

* `=`, `+=`, `-=`, `*=`, `/=`

```javascript
let x = 10;
x += 5; // 15
```

---

### 🔹 Comparison Operators

Return Boolean values:

* `==`, `===`
* `!=`, `>`, `<`, `>=`, `<=`

---

### 🔹 Logical Operators

Used for conditions:

* `&&` (AND)
* `||` (OR)
* `!` (NOT)

---

### 🔹 Ternary Operator

Short form of `if-else`:

```javascript
let result = age >= 18 ? "Adult" : "Minor";
```

---

### 🔹 Type Operators

* `typeof` → checks data type
* `instanceof` → checks object instance

```javascript
typeof 10; // "number"
```

---

## Q3. Difference Between `==` and `===`

### `==` (Loose Equality)

* Compares only values
* Performs **type coercion**

```javascript
5 == "5"; // true
```

---

### `===` (Strict Equality)

* Compares value **and type**
* Best practice

```javascript
5 === "5"; // false
```

---

## Q4. Hoisting and Temporal Dead Zone (TDZ)

### 🔹 Hoisting

JavaScript moves declarations to the top before execution.

| Keyword | Hoisted | Initialized |
| ------- | ------- | ----------- |
| `var`   | Yes     | `undefined` |
| `let`   | Yes     | No          |
| `const` | Yes     | No          |

```javascript
console.log(a); // undefined
var a = 10;
```


## Why Hoisting Happens in JavaScript

### 🔹 What Is Hoisting?

**Hoisting** is JavaScript’s default behavior of **moving declarations to the top of their scope before code execution**.

⚠️ Important:
Only **declarations** are hoisted, **not initializations**.

---

### 🔹 Why JavaScript Uses Hoisting

JavaScript was designed to:

1. **Scan the entire code first**
2. **Allocate memory for variables and functions**
3. **Then execute the code line by line**

This happens because JavaScript uses a **two-phase execution model**.

---

## 🔁 JavaScript Execution Phases

### 1️⃣ Memory Creation Phase (Compilation Phase)

* JavaScript reads the full code
* Allocates memory for:

  * Variables
  * Functions
* Stores them in memory **before execution starts**

Example:

```javascript
console.log(a);
var a = 10;
```

During memory creation:

```text
a → undefined
```

---

### 2️⃣ Execution Phase

* Code runs line by line
* Values are assigned
* Functions are executed

```javascript
console.log(a); // undefined
a = 10;
```

---

## 🔹 Hoisting With Different Keywords

### `var`

* Hoisted
* Initialized as `undefined`

```javascript
console.log(x); // undefined
var x = 5;
```

---

### `let` and `const`

* Hoisted
* **Not initialized**
* Stay in **Temporal Dead Zone (TDZ)**

```javascript
console.log(y); // ReferenceError
let y = 10;
```

---

## 🔹 Why TDZ Exists

TDZ exists to:

* Prevent using variables before declaration
* Encourage safer coding
* Avoid bugs caused by `var`

---

## 🔹 Function Hoisting

### Function Declaration (Fully Hoisted)

```javascript
hello();

function hello() {
    console.log("Hello");
}
```

✔ Works because the function is stored fully in memory.

---

### Function Expression (Not Hoisted)

```javascript
hello(); // Error

const hello = function () {
    console.log("Hello");
};
```

❌ Fails because only the variable is hoisted, not the function value.

---

## 🔹 Simple Analogy (Easy to Remember)

Think of JavaScript as a teacher 👩‍🏫

* First, she **writes all variable names on the board**
* Then she **fills in the values later**
* That first step is **hoisting**

---

## 🔹 One-Line Exam Answer

> Hoisting happens because JavaScript allocates memory for variables and functions before executing code, allowing declarations to be available throughout their scope.

---

## ✅ Key Takeaways

* Hoisting is due to JavaScript’s **two-phase execution**
* `var` is hoisted and initialized
* `let` and `const` are hoisted but stay in TDZ
* Only declarations are hoisted

---

✨ **Very important topic for exams and interviews**



---

### 🔹 Temporal Dead Zone (TDZ)

Time between block start and variable declaration.

```javascript
console.log(b); // ReferenceError
let b = 20;
```

---

## Q5. JavaScript Array Methods

### `map()`

Transforms each element and returns a new array.

```javascript
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```

---

### `filter()`

Returns elements that satisfy a condition.

```javascript
[1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
```

---

### `reduce()`

Reduces array to a single value.

```javascript
[1, 2, 3].reduce((sum, x) => sum + x, 0); // 6
```

---
## Comparison of Common JavaScript Array Methods (With Examples)

---

### `map()` vs `forEach()`

#### 🔹 `map()`

* Creates a **new array**
* Used when you want to **transform data**
* Does **not modify** the original array

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3]
```

✔ Use `map()` when you **need a new array as output**.

---

#### 🔹 `forEach()`

* Does **not return anything**
* Used for **side effects** like logging or updating external variables

```javascript
const numbers = [1, 2, 3];

numbers.forEach(num => {
    console.log(num * 2);
});

// Output:
// 2
// 4
// 6
```

✔ Use `forEach()` when you **just want to perform an action**, not get a new array.

---

### 📝 Summary Table

| Method      | Returns New Array | Purpose            |
| ----------- | ----------------- | ------------------ |
| `map()`     | ✅ Yes             | Transform elements |
| `forEach()` | ❌ No              | Execute logic      |

---

### `find()` vs `filter()`

#### 🔹 `find()`

* Returns the **first element** that satisfies the condition
* Stops searching after first match
* Returns a **single value**

```javascript
const ages = [12, 18, 20, 25];

const adult = ages.find(age => age >= 18);

console.log(adult); // 18
```

---

#### 🔹 `filter()`

* Returns **all elements** that satisfy the condition
* Returns a **new array**

```javascript
const ages = [12, 18, 20, 25];

const adults = ages.filter(age => age >= 18);

console.log(adults); // [18, 20, 25]
```

---

### 📝 Summary Table

| Method     | Output                 |
| ---------- | ---------------------- |
| `find()`   | First matching element |
| `filter()` | Array of all matches   |

---

### `some()` vs `every()`

#### 🔹 `some()`

* Returns `true` if **at least one element** passes the condition
* Stops checking after first `true`

```javascript
const marks = [35, 40, 90];

const passed = marks.some(mark => mark >= 40);

console.log(passed); // true
```

✔ Because **90 ≥ 40**

---

#### 🔹 `every()`

* Returns `true` **only if all elements** pass the condition
* Stops when first `false` is found

```javascript
const marks = [35, 40, 90];

const allPassed = marks.every(mark => mark >= 40);

console.log(allPassed); // false
```

❌ Because **35 < 40**

---

### 📝 Summary Table

| Method    | Condition           |
| --------- | ------------------- |
| `some()`  | At least one `true` |
| `every()` | All must be `true`  |

---

## ✅ One-Line Exam Answers

* **`map()`** returns a new array after transforming elements.
* **`forEach()`** executes logic but returns nothing.
* **`find()`** returns the first matching element.
* **`filter()`** returns all matching elements.
* **`some()`** checks if at least one element satisfies a condition.
* **`every()`** checks if all elements satisfy a condition.

---

✨ **These methods are VERY important for exams and interviews**


---

## Q6. String and Object Methods (Detailed Explanation)

JavaScript provides built-in methods to work efficiently with **strings** and **objects**. These methods help in searching, transforming, extracting, and protecting data.

---

## 🔹 String Methods

Strings in JavaScript are **immutable**, meaning methods return **new strings** and do not change the original one.

---

### 1️⃣ `.toUpperCase()`

Converts all characters of a string to **uppercase**.

```javascript
let text = "hello";
let result = text.toUpperCase();

console.log(result); // "HELLO"
console.log(text);   // "hello"
```

✔ Original string remains unchanged.

---

### 2️⃣ `.toLowerCase()`

Converts all characters of a string to **lowercase**.

```javascript
let text = "HeLLo";
console.log(text.toLowerCase()); // "hello"
```

---

### 3️⃣ `.includes()`

Checks whether a string contains a specific substring.
Returns **true** or **false**.

```javascript
let sentence = "JavaScript is fun";

console.log(sentence.includes("fun")); // true
console.log(sentence.includes("Fun")); // false (case-sensitive)
```

✔ Case-sensitive method.

---

### 4️⃣ `.slice(start, end)`

Extracts a portion of a string and returns a **new string**.
`end` index is **not included**.

```javascript
let text = "JavaScript";

console.log(text.slice(0, 4)); // "Java"
console.log(text.slice(4));    // "Script"
```

---

### 5️⃣ `.split(separator)`

Splits a string into an **array** based on a separator.

```javascript
let text = "apple,banana,orange";
let fruits = text.split(",");

console.log(fruits); // ["apple", "banana", "orange"]
```

---

### 📝 Summary Table (String Methods)

| Method          | Purpose                 |
| --------------- | ----------------------- |
| `toUpperCase()` | Convert to uppercase    |
| `toLowerCase()` | Convert to lowercase    |
| `includes()`    | Check substring         |
| `slice()`       | Extract part of string  |
| `split()`       | Convert string to array |

---

## 🔹 Object Methods

Objects store data in **key–value pairs**. Object methods help in accessing and managing this data.

---

### 1️⃣ `Object.keys()`

Returns an array of all **keys** in an object.

```javascript
const user = { name: "Ayu", age: 18 };

console.log(Object.keys(user)); // ["name", "age"]
```

---

### 2️⃣ `Object.values()`

Returns an array of all **values** in an object.

```javascript
console.log(Object.values(user)); // ["Ayu", 18]
```

---

### 3️⃣ `Object.entries()`

Returns an array of `[key, value]` pairs.

```javascript
console.log(Object.entries(user));
// [["name", "Ayu"], ["age", 18]]
```

✔ Very useful in loops.

---

### 4️⃣ `Object.freeze()`

Prevents **any changes** to an object:

* Cannot add properties
* Cannot delete properties
* Cannot modify values

```javascript
const car = { brand: "Tesla", year: 2024 };

Object.freeze(car);

car.year = 2025;   // Not allowed
car.color = "Red"; // Not allowed

console.log(car); // { brand: "Tesla", year: 2024 }
```

---

### 🔹 Difference Between `const` and `Object.freeze()`

| Feature           | `const` | `Object.freeze()` |
| ----------------- | ------- | ----------------- |
| Reassign object   | ❌       | ❌                 |
| Modify properties | ✅       | ❌                 |

---

## ✅ One-Line Exam Answers

* String methods return **new strings** because strings are immutable.
* `Object.keys()` returns keys of an object.
* `Object.values()` returns values of an object.
* `Object.entries()` returns key-value pairs.
* `Object.freeze()` makes an object completely immutable.

---

✨ **This topic is very important for exams and interviews**


## Q7. Types of Functions in JavaScript (Detailed Explanation)

Functions are reusable blocks of code that perform a specific task. JavaScript supports multiple types of functions, each serving a different purpose.

---

## 1️⃣ Regular Function (Function Declaration)

### 🔹 Definition

A regular function is defined using the `function` keyword.
It has its **own `this` keyword** and is **fully hoisted**.

```javascript
function greet() {
    console.log("Hello");
}

greet(); // Hello
```

### 🔹 Key Points

* Has its own `this`
* Can be called before declaration (hoisting)
* Commonly used for general-purpose logic

```javascript
add(2, 3);

function add(a, b) {
    return a + b;
}
```

---

## 2️⃣ Arrow Function

### 🔹 Definition

Arrow functions provide a **shorter syntax** and do **not have their own `this`**.

```javascript
const greet = () => console.log("Hello");

greet(); // Hello
```

### 🔹 With Parameters and Return Value

```javascript
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
```

### 🔹 Key Points

* Shorter and cleaner syntax
* No own `this` (uses lexical `this`)
* Not hoisted like regular functions

✔ Best used for callbacks and array methods.

---

## 3️⃣ First-Class Functions

### 🔹 Definition

In JavaScript, functions are treated like **variables**.
They can be:

* Assigned to variables
* Passed as arguments
* Returned from other functions

```javascript
const sayHello = function() {
    console.log("Hello");
};

sayHello();
```

### 🔹 Passing Function as Argument

```javascript
function execute(fn) {
    fn();
}

execute(() => console.log("Running"));
```

✔ This feature makes JavaScript powerful and flexible.

---

## 4️⃣ Higher Order Functions (HOF)

### 🔹 Definition

A **Higher Order Function** is a function that:

* Takes another function as an argument, OR
* Returns a function

---

### 🔹 Example 1: Accepting a Function

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
```

Here, `map()` is a **Higher Order Function**.

---

### 🔹 Example 2: Returning a Function

```javascript
function multiplier(factor) {
    return function(num) {
        return num * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

## 5️⃣ Callback Function

### 🔹 Definition

A **callback function** is a function passed into another function and executed later.

---

### 🔹 Example with `setTimeout`

```javascript
setTimeout(function() {
    console.log("Executed later");
}, 1000);
```

---

### 🔹 Example with Arrow Function

```javascript
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);
```

✔ Callbacks are widely used in:

* Events
* Timers
* API calls

---

## 6️⃣ IIFE (Immediately Invoked Function Expression)

### 🔹 Definition

An **IIFE** is a function that runs **immediately after it is defined**.

```javascript
(function() {
    console.log("Runs immediately");
})();
```

---

### 🔹 Arrow Function IIFE

```javascript
(() => {
    console.log("Arrow IIFE");
})();
```

### 🔹 Why Use IIFE?

* Avoid polluting global scope
* Execute setup code once
* Data privacy

```javascript
(function() {
    let secret = "hidden";
    console.log(secret);
})();
```

---

## 📝 Summary Table

| Function Type         | Key Feature                 |
| --------------------- | --------------------------- |
| Regular Function      | Has own `this`, hoisted     |
| Arrow Function        | Short syntax, no own `this` |
| First-Class Function  | Treated like variables      |
| Higher Order Function | Takes/returns function      |
| Callback Function     | Executed later              |
| IIFE                  | Runs immediately            |

---

## ✅ Best Practices in JavaScript

* Prefer `let` and `const` over `var`
* Use `===` instead of `==`
* Write small, reusable functions
* Avoid global variables
* Use arrow functions for callbacks
* Keep functions focused on one task

---

## ✨ One-Line Exam Answers

* Arrow functions do not have their own `this`.
* Higher Order Functions operate on other functions.
* Callback functions are passed to other functions for later execution.
* IIFE executes immediately after creation.

---

✨ **End of JavaScript Fundamentals**

