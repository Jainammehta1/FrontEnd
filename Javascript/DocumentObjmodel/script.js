//What is DOM?

//DOM stands for Document Object Model. All the html elements can be accessed in javascript file all the elements are stored in special object which is known as document

//To manipulate changes DOM is used

console.log(document.body);

//Dom manipulation
// 1] Selecting with id
//Uses # in css file
let h1 = document.getElementById("heading");
console.log(h1);

// 2] Selecting with class 
//Uses . to change the css style in css file
let h2 = document.getElementsByClassName("headingclass");
console.log(h2);
// 3] Selecting with tag name
let h3 = document.getElementsByTagName("h1");
console.log(h3);
// 4] Selecting with query selector
let h4 = document.querySelector(".headingclass");
console.log(h4);

//Properties with explanation
// 1] innerHTML-Returns the plain text pr html contents in the element

// 2] innertext
// Returns the text content of the element, excluding any HTML markup.

// 3] Tagname
// Returns the name of the element.

// 4] textcontent
// Returns the text content of the element, excluding any HTML markup.

//Attributes
//getattribute with example
let h5 = document.getElementById("heading");
console.log(h5.getAttribute("id"));

//setattribute with example
let h6 = document.getElementById("heading");
h6.setAttribute("id","newid");
console.log(h6);
let newbutton=document.createElement("Button");
console.log(newbutton);
newbutton.innerText="Click me";
//append methodd-Adds at the end of node
let div=document.querySelector("div");
div.appendChild(newbutton);

//prepend method-Adds at the start of node
div.prepend(newbutton);

//before method- Adds before the node(outside)
div.before(newbutton);

//after method-Addsnafter the node
div.after(newbutton);

//DELETE ELEMENT
//remove method-Removes the element
let div1 = document.querySelector("div"); 
div1.remove();












