const headingElement = document.getElementById('myheading');
console.log(headingElement);

headingElement.style.color = 'blue';
headingElement.style.backgroundColor = 'lightgray';
headingElement.style.padding = '10px';
headingElement.textContent= "new heading"

//it will not show hello world rather it would show new heading with blue color backgroung lightgray and padding 10px

/**selector combinator in css styleing 
 * child decentor and parent decentor\
 * div < p
 * parent to child selector - it will select all the p which are inside the div
 * div > p
 * parent to direct child selector - it will select only those p which are direct child of div
 * 
 * sibling selector
 * 
 * h2 + p 
 * h2 ke just baad wala p select karega
 * 
 * h2 ~ p
 * general sibling selector
 * h2 ke baad wale sare p select karega (all siblings)
 **/

