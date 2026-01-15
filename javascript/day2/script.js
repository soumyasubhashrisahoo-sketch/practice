preview
1.console.log() to find Logic of NaN
2.console.log() logic of {}/[]
3. reduce
4. data type
5. console.log(typeof )
6. arithmetic
7. operator
8. console.log("2" < "12"); string v/s string
9. sort

_____________________________________________________________________________________________________________________________________

console.log(NaN = NaN) // NaN

console.log(NaN == NaN) //false 
/**why --
 * In JavaScript, NaN (Not-a-Number) is the only value in the language that is not equal to itself.
 * any comparison involving NaN must return false because NaN represents an undefined or unrepresentable numerical result
 */
console.log(NaN === NaN) // false 

let myValue = 0 / 0; // NaN

console.log(myValue === NaN);       // false
console.log(Number.isNaN(myValue)); // true
/** The Number.isNaN() method is the most reliable way to check if a value is literally the value NaN.
 * 1. How Number.isNaN() Works
Number.isNaN(value) follows a very strict two-step logic:

Is the type of the value a Number?

Is the value NaN?

If both are not true, it returns false. It does not try to "fix" or convert the data you give it.
 */

Number.isNaN(NaN);        // true
Number.isNaN(0 / 0);      // true

// These return false because they aren't numbers, even if they can't be numbers
Number.isNaN("hello");    // false
Number.isNaN(undefined);  // false

___________________________________________________________________________________

console.log([] ==0 ) //true

console.log(""=[]) //true -why?
/**This happens because of the same type coercion logic we discussed earlier.
 *  When JavaScript compares a String to an Object (an array is an object), it follows these steps:
 *  Object to Primitive: JavaScript looks at the array [] and tries to convert it to a primitive value. It calls [].toString().
 * String Conversion: An empty array converted to a string is an empty string ("").
 * The Comparison: The expression becomes "" == "".
 * Result: Since both sides are now identical strings, the result is true. */

console.log({}) //{}

console.log({} + {}) //[object Object][object Object]
/**When you wrap the expression in console.log(), JavaScript treats both {} as Objects.
 * The + operator sees two objects. It can't "add" objects mathematically, so it tries to convert them into primitives (strings).
 * It calls the .toString() method on both.
 * The default string representation of a plain object is "[object Object]
 */
"[object Object]" + "[object Object]" = "[object Object][object Object]"

console.log([]=={})
/**The engine sees: { empty block  } followed by + {}.
 * It ignores the empty block.
 * It then evaluates + {}.
 * The + here acts as a unary plus (trying to convert the object to a number).
 * Since an object cannot be converted to a number, it results in NaN (Not-a-Number). */


Map(  =>) // this is a call back function - because map is a medo

___________________________________________________________________________________

//reduce will take 2 parameters
// it will reduce the array into 1 
// acc - work as iterator 

let = [1,2,3,4,5]
let res = arr.reduce((acc,current)=> console.log(acc)) //1

let = [1,2,3,4,5]
let res = arr.reduce((acc,current)=> console.log(current)) //2 3 4 5

let = [1,2,3,4,5]
let res = arr.reduce((acc,current)=> acc+current)
console.log(res)   //15

___________________________________________________________________________________

// DATA TYPE
// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

// Boolean
let x = true;
let y = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x;
let y;

// Null
let x = null;
let y = null;

// Symbol
const x = Symbol();
const y = Symbol();

___________________________________________________________________________________
console.log(typeof "" )           // Returns "string"
console.log(typeof "John")         // Returns "string"
console.log(typeof "John Doe")     // Returns "string"


console.log(typeof 0)              // Returns "number"
console.log(typeof 314)            // Returns "number"
console.log(typeof 3.14)           // Returns "number"
console.log(typeof (3) )           // Returns "number"
console.log(typeof (3 + 4))        // Returns "number"
___________________________________________________________________________________

//arithmetic
let x = 5;

console.log(x == 8); // equals false
console.log(x != 8); // equals true


/**A variable without a value has the datatype undefined.

A variable without a value also has the value undefined. */
 like this ;
 let carName;


 let x = 5 + 5; //10 
let y = "5" + 5; //55
let z = "Hello" + 5;  //Hello5

___________________________________________________________________________________

//JavaScript Assignment Operators
=      	x = y	   x = y
+=    	x += y	   x = x + y
-=	    x -= y	   x = x - y
*=	    x *= y	   x = x * y
/=	    x /= y	   x = x / y
%=	    x %= y	   x = x % y
**=	    x **= y	   x = x ** y


___________________________________________________________________________________
//JavaScript Logical Operators
&&	logical and
||	logical or
!	logical not

___________________________________________________________________________________
//JavaScript Comparison Operators
==	      equal to	                             x == 5
===	      equal value and equal type	         x === 5
!=	      not equal	                             x != 5
!==	      not equal value or not equal type	     x !== 5
>	      greater than	                         x > 5
<	      less than	                             x < 5
>=	      greater than or equal to	             x >= 5
<=	      less than or equal to	                 x <= 5

___________________________________________________________________________________

Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation (ES2016)
/	        Division
%           Decrement

___________________________________________________________________________________

console.log("2" < "12"); //false
//JavaScript tries Number("John"). Since "John" is not a numeric string, the result is NaN (Not-a-Number).
//any comparison with NaN returns false. NaN is not greater than, less than, or equal to any other number (not even itself).

Comparison	 Logical Steps	  Result
2 < "John"	  2 < NaN	      false
2 > "John"	  2 > NaN	      false
2 == "John"	  2 == NaN	      false
___________________________________________________________________________________

console.log("2" < "12")//false
console.log("2" > "12")//true
console.log("2" == "12")//false


Comparison	  Logic	                            Result
"2" < "12"	  Is "2" less than "1"? No.	        false
"2" > "12"	  Is "2" greater than "1"? Yes.	    true
"2" == "12"	  Are the strings identical? No.	false


let a = "2";
let b = "12";
// Wrong way (String comparison)
console.log(a > b); // true
// Right way (Number conversion)
console.log(Number(a) > Number(b)); // false
console.log(+a > +b);               // false (using the + shortcut)



Scenario                Rule Used                                              Example  
Number vs Number        Math Logic: It compares the actual values.             2 < 12 → true
Number vs String        Coercion: It converts the string to a number first.    2 < "12" → true
String vs String        Dictionary Logic: It compares character by character.  "2" < "12" → false
_______________________________________________________________________________________________________

//This is exactly why sorting numbers in JavaScript is broken by default
const numbers = [1, 5, 10, 2];
numbers.sort(); 
console.log(numbers); // [1, 10, 2, 5]  <-- 10 comes after 1 but before 2!

//solution 

const numbers = [1, 5, 10, 2];
// The correct way to sort numbers
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 5, 10]

/**If the result is Negative (e.g., 1 - 5 = -4): It means a is smaller than b. JavaScript keeps a before b.
 * If the result is Zero: It means they are equal. No change in order.
 * If the result is Positive (e.g., 10 - 2 = 8): It means a is larger than b. JavaScript swaps them so b comes first. */


Sort Order                  Code                             Logic
Ascending (Small to Big)    numbers.sort((a, b) => a - b)    If a > b, the result is positive ---> Swap.
Descending (Big to Small)   numbers.sort((a, b) => b - a)    If b > a, the result is positive ---> Swap.
// 

const mixedStrings = ["10", "1", "2"];
mixedStrings.sort((a, b) => a - b); 

console.log(mixedStrings); // ["1", "2", "10"] - It works!