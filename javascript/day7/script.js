//create element
const para=document.createElement("p")
para.textContent="this is a new paragraph"
console.log(para)

//append element
document.getElementById("content").appendChild(para)

//remove element
document.querySelector("#content p").remove()


//add image

const image=document.createElement("img");
// to add ans set the attribute in the tag
image.setAttribute("src","https://imgs.search.brave.com/SOzUPdk_q9d1RvVm3QnN1Y3Lqq967cB2XaSUVmTdfOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/amF2YXNjcmlwdC1h/YnN0cmFjdC1jb25j/ZXB0LWlsbHVzdHJh/dGlvbl8zMzU2NTct/MzcwMi5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA");

image.setAttribute("alt","JavaScript Logo");

image.style.width="300px"
image.style.height="200px"  

const gallery=document.getElementById("gallery");
gallery.appendChild(image)



let date=new Date();
console.log(date);
let year=date.getFullYear();
console.log(year);



setInterval(()=>{
    let time=new Date();
    console.log(date);

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();    

    const clock=document.getElementById("clock");
    clock.textContent=`${hour}:${min}:${sec}`;

},1000);