//JavaScript Promises were created to make asynchronous JavaScript easier to use.

//A Promise object represents the completion or failure of an asynchronous operation.

//promise has one 1 state - either fulfilled , 2 - rejected , 3rd is pending 

//js has predefine constructor  function for promises
 


//----------------------------------------------------------promises creation----------------------------------------------------------------------

/*Promise States
A promise can be in one of three exclusive states:

Pending:
The initial state; the operation has started but is neither fulfilled nor rejected.

Fulfilled:
The operation completed successfully, and a value is available.

Rejected:
The operation failed, and a reason (error) is available.

A promise is considered settled if it is fulfilled or rejected (not pending).
*/





//let myPromise = new Promise(()=>()); //constructor function in js --- we can say it is class (even tho js doesnt have class, but to undertsand)
//console.log(myPromise)
//output Promise {<pending>} --- because we just created the promise





//promises are the smart organization of call back functions.


/*
let myPromise = new Promise((res, rej) => {
    let data = "this is my data";
    
    if (data) {
        res();   // resolve
    } else {
        rej();
    }
});

console.log(myPromise);

//output Promise { undefined }

*/





/*
let myPromise = new Promise((res, rej) => {
    let data = "this is my data";
    
    if (data) {       // if there is a data - go to resolve state
        res(data);   // resolve
    } else {         // if  the string is empty - return rejection
        rej("error: no data found");
    }
});

console.log(myPromise);

//Promise { 'this is my data' }

*/






//------------------------------------------------promise handling-------------------------------------------------------------------------
//80% of time we will be handling the promises

/*
let myPromise = new Promise((res, rej) => {
    let data = "this is my data";
    
    if (data) {
        res(data);   // resolve
    } else {
        rej("error : no data found");
    }
});

myPromise.then((d)=>(
    console.log(d)
),(e)=>(
    console.log(e)
)); //first arrow function is of reasolve function , .. second one is rejected function 

//output: this is my data
*/









let myPromise = new Promise((res, rej) => {
    let data = "this is my data";
    
    if (data) {
        res(data);   // resolve
    } else {
        rej("error : no data found");
    }
});

myPromise
.then((d)=>(
    console.log(d)
))
.catch((e)=>{
      console.log(e)

});



//----homework : day 12 ke data ko call back hell ki jagah promises use karna hai .


