/**
 * revising - asyncfunctions
 * call back hell , why we get call back hell.
 * asynconous code in call back function wont wait for the previous code to execute and move forward to the next line of code
 * it wont maintain squence of execution
 * we study call back function - because to depend on the result of one function to execute another function we use call back function
 * to avoid call back hell we use promise and async await
 * promise is a object which is used to handle asynconous operation in js
 */

/** if promise fulfilled then it will go to .then() method
 * if promise rejected then it will go to .catch() method
 * if promise is pending then it will wait for the promise to be fulfilled or rejected
 */

/**difference between method and function
 * method is a function which is a property of an object
 * function is a block of code which is used to perform a specific task
 * method is called by using the object name and dot operator
 * function is called by using the function name and parentheses
 

 * constructor is a special method of a class that is used to initialize objects of that class. It is called automatically when an object is created from the class. The constructor method has the same name as the class and can take parameters to initialize the object's properties.
 * In JavaScript, a constructor function is a regular function that is used to create objects. It is called with the 'new' keyword, which creates a new object and sets the 'this' keyword to refer to that object. The constructor function can also take parameters to initialize the object's properties.
 */

/**what is constructor 
 * promise is 
 */

let pro = new Promise((res, rej) => {
    let proposal="false";
    if(proposal==="true"){
        res("i will marry you");
    }else{
        rej("i will not marry you");
    }
});

pro.then((message) => {
    console.log("propasal is accepted", message);
}).catch((message) => {
    console.log("proposal is rejected", message);
});