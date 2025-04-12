//The change in the state of an object is known as Event

let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("Button 1 is clicked");

};

let box=document.querySelector("div");

box.onmouseover=()=>{
    console.log("You are inside div");
   
}

//EVENT OBJECT
//The event object is an object that contains information about the event that occurred.
//It is passed as an argument to the event handler function.

let btn2=document.querySelector("#btn2");
btn2.onclick=(evt)=>{
    console.log("Button 2 is clicked");
    console.log(evt);

};

//Event Listeners
//Event listeners are functions that are called when an event occurs.
//They are used to handle events in JavaScript.

let btn3=document.querySelector("#btn3");
btn3.addEventListener("Click",(ev)=>{
    console.log("Button 3 is clicked");
    console.log(ev);
})

//Removeventlistener
//The removeEventListener() method removes an event listener from the current target.
//example
let btn4=document.querySelector("#btn4");
btn4.addEventListener("click",(ev)=>{
    console.log("Button 4 is clicked");
    console.log(ev);
    })
    btn4.removeEventListener("click",(ev)=>{
          console.log("Button 4 is clicked");
          console.log(ev);
        })







