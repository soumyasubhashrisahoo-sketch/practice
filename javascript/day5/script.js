const profile =document.getElementById("profile");

profile.style.backgroundColor ="lightblue";
profile.style.padding ="15px";
profile.style.textAlign ="center";


//task2
const highlight = document.getElementsByClassName("important");
console.log(highlight);

for (let i = 0; i < highlight.length; i++) {
    highlight[i].style.fontWeight = "bold";
    highlight[i].style.color = "red";
    highlight[i].style.fontSize = "20px";
}

//task3
const task3 = document.getElementsByTagName("p");
console.log(task3);

for (let i=0;i<task3.length;i++){
    if(i%2===0){
        task3[i].style.color="blue";
    }
 else{
        task3[i].style.color="green";
    }
}
//items[4].style.fontWeight="bold";
task3[task3.length - 1].style.fontWeight = "bold";