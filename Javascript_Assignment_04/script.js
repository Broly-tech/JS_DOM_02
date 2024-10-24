//Create a toggle button that changes the screen to dark mode when clicked and 
//light mode when clicked again
//toggle between dark and light colours

let bodycolor=document.querySelector("#color")
let currentbodycolor="light" //Considering it is already dark
bodycolor.addEventListener("click",()=>{
    if(currentbodycolor==="light")
    { 
        bodycolor.style.backgroundColor="black";
        currentbodycolor="dark"
        console.log("Changed to dark")
        
    }
    else
    {
        bodycolor.style.backgroundColor="white";
        currentbodycolor="light"
        console.log("Changed to light")
    }

    })



