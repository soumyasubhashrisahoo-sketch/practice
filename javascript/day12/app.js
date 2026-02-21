function login(email,pass, cb){
    setTimeout(() => {
        cb({userId:email, isLoggedIn:true, message:"Login successful"});
    }, 3000);
}

login("user@example.com", "password",(userDetails) => {
    console.log("User details:", userDetails);
});

//if we use retrn statement in the callback function, it will not work as expected because the return value will not be passed to the caller 
// of the login function. The login function is asynchronous and uses a callback to handle the result, so the return statement inside the
//  callback does not affect the flow of the login function. Instead, you should use the callback to handle the result directly, 
// as shown in the example above.

/* output:
User details: {
  userId: 'user@example.com',
  isLoggedIn: true,
  message: 'Login successful'
}
*/

function login(email,pass, cb){
}
function getvideoList(cb){
    setTimeout(() => {                       //initinal delay to simulate fetching video list from a server
        cb(["video1", "video2", "video3"]);  // array of video names passed to the callback function
    }, 4000);
}

login("user@example.com", "password",(userDetails) => {
    console.log("User details:", userDetails);
});

getvideoList((videoList) => {                 // we called the function as argument here - getvideoList and passed a callback function to handle the video list once it's fetched
    console.log("Video list:", videoList);
});

//promblematic - like lets take example of netflix - first login then video list , but if i change the 4000 milisecond to 2second , before the login , it will give the 
//access first to the video list and then login - which is not expected behavior - this is called callback hell or pyramid of doom - 
// to avoid this we can use promises or async/await

//solution
//-login
//video array 

function login(email,pass, cb){
}
function getvideoList(cb){
    setTimeout(() => {                       //initinal delay to simulate fetching video list from a server
        cb(["video1", "video2", "video3"]);  // array of video names passed to the callback function
    }, 4000);
}

login("user@example.com", "password",(userDetails) => {  //loggin ke baat jo chaiye step by step yahan frind kar sagte ho 
    console.log("User details:", userDetails);
    getvideoList((videoList) => {                 
    console.log("Video list:", videoList);
});});


//now to access - video detail

function login(email,pass, cb){
    setTimeout(() => {
        cb({userId:email, isLoggedIn:true, message:"Login successful"});
    }, 3000);
}


function getvideoList(user, cb){
    setTimeout(() => {                      
        cb(["video1", "video2", "video3"]);  
    }, 4000);
}

function getvideoDetails(video,cb){
    setTimeout(() => {
        cb({title:video, duration: "2 min", genre: "Action"});
    }, 1000);
}

login("user@example.com", "password",(userDetails) => {
    console.log("User details:", userDetails);

    getvideoList(userDetails.userId ,(videoList)=> {                         
        console.log("Video list:", videoList);
        
        getvideoDetails(videoList[0], (videoDetails) => {
            console.log("Video details:", videoDetails);
        });
    });
});

//Callback hell is a JavaScript phenomenon where multiple nested callbacks make asynchronous code unreadable, 
// unmaintainable, and hard to debug.

//all are depedent on login call
//when we make mutiple dependent call inside one call --- we end up having nested call 
// this is callback hell call back ke andar call back hai 

// solution of callback hell is --- promises




