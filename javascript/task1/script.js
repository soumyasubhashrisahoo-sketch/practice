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