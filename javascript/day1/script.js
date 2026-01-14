/*TODO - 1. basic
2. getElementById()
3.js identifiers
4.let
5. hoisting
  5.1 .map
  2.2 filter
*/

// How to Declare variables:
let x = 5;
let y = 6;

// How to Compute values:
let z = x + y;

// I am a Comment. I do Nothing

_________________________________________________________________________________

/*NOTE - <p id="demo"></p>
let assume it as <p> is inside html body so paragraph tag has id demo
so inside script tag , or external script.js file 
i will write js code 
document.getElementById(name of the id)*/
let x = 5;
const fname = "John";

document.getElementById("demo").innerHTML = fname + " is " + x + " years old.";
___________________________________________________________________________________________
/*NOTE -JavaScript Identifiers
An identifier is the name you give to a variable.

Rules for identifiers:

Must start with a letter, _, or $
Can contain digits after the first character
Cannot be a reserved keyword (let, const, if, etc.)
Are case-sensitive
 */

/*SECTION - Hyphens are not allowed in JavaScript.
 They are reserved for subtractions */

 let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c

______________________________________________________________________________________
/*SECTION - 
Variables declared with let have Block Scope
Variables declared with let must be Declared before use
Variables declared with let cannot be Redeclared in the same scope */

/*NOTE - With let you can not do this:*/

let x = "John Doe";
//cannot
let x = 0;

_________________________________________________________________________________

var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}

//REVIEW - With let, redeclaring a variable in the same block is NOT allowed
//REVIEW - Redeclaring a variable with let, in another block, IS allowed
_________________________________________________________________________________

// hoisting means -a variable can be used before it has been declared
 //Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

//<!DOCTYPE html>
//<html>
//<body>

<p id="demo"></p>

//<script>
    x = 5; // Assign 5 to x
    elem = document.getElementById("demo"); // Find an element 
    elem.innerHTML = x;           // Display x in the element
    var x; // Declare x


    or 

    var x; // Declare x
    x = 5; // Assign 5 to x
    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element - 5

//</script>

//</body>
//</html> 

______________________________________________________________________________________

/**SECTION - quetion */
 * TASK: Check Pass/Fail for 10 Students
 * Logic: Marks >= 15 is PASS, < 15 is FAIL (assuming 15 is passing out of 40)
 

// 1. Create an array with 10 different marks (0 to 40)
const studentMarks = [12, 35, 8, 22, 40, 14, 29, 5, 31, 19];

console.log("--- Student Results ---");

// 2. Loop through the array (length is 10)
for (let i = 0; i < studentMarks.length; i++) {
    
    let currentMark = studentMarks[i]; // Get the mark at the current index
    let status = "";

    // 3. Conditional Check (The Logic)
    if (currentMark >= 15) {
        status = "PASS ✅";
    } else {
        status = "FAIL ❌";
    }

    // 4. Print the result for each student
    console.log(`Student ${i + 1}: Marks = ${currentMark} | Result = ${status}`);
}


_________________________________________________________________________________
/**NOTE - *filter*/
const studentMarks = [12, 35, 8, 22, 40, 14, 29, 5, 31, 19];

// 1. Using MAP to create the "22, pass" format for EVERYONE
const results = studentMarks.map(mark => {
    if (mark >= 15) {
        return `${mark}, pass`;
    } else {
        return `${mark}, fail`;
    }
});

console.log("--- All Results ---");
console.log(results);

// 2. Using FILTER to get only the passing marks
const passOnly = studentMarks.filter(mark => mark >= 15);

// 3. Using FILTER to get only the failing marks
const failOnly = studentMarks.filter(mark => mark < 15);

console.log("--- Summary ---");
console.log("Passed:", passOnly);
console.log("Failed:", failOnly);
_________________________________________________________________________________

//NOTE - map

// 1. Array with 10 different marks
const studentMarks = [12, 35, 8, 22, 40, 14, 29, 5, 31, 19];

// 2. Use .map() to transform each mark into a string
const result = studentMarks.map((mark) => {
    if (mark >= 15) {
        return `${mark}, pass`; // If 15 or above
    } else {
        return `${mark}, fail`; // If below 15
    }
});

// 3. Print the final array
console.log(result);
