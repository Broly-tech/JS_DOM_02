const button=document.createElement("button");
button.innerText="Click me!";
button.style.backgroundColor="red";
button.style.color="white";
const body=document.querySelector("body");
body.style.backgroundColor="blue";
document.querySelector("body").prepend(button);