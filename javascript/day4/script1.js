//select the fitst <p> element inside the div #content div using querySelector
const paragraph= document.querySelector('#content p');

//change the text content of the selected paragraph
paragraph.textContent = "This is the updated paragraph inside the content div using querySelector.";
paragraph.style.color = "green";