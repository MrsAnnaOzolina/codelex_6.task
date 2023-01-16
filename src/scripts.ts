import { NoEmitOnErrorsPlugin } from "webpack";

const btn = document.querySelectorAll<any>('.firstboxes') || null
const box = document.querySelectorAll<any>('.secondboxes') || null
const body =document.querySelector<any>('body') || null


btn[0]?.addEventListener('click', () => {
    box[0].style.backgroundColor = 'yellow'
});

btn[1]?.addEventListener('click', () => {
    box[1].innerHTML = 'SUCCESS'
});
btn[2]?.addEventListener('click', () => {
    box[2].style.display ="none";
});
btn[6]?.addEventListener('click', () => {
    for (let i=0; i<box.length; i++){
        box[i].style.backgroundColor = "#18d5e1";
    } 
    body.style.backgroundColor = "#000000";
});

box[0]?.addEventListener('mouseover', () => {
    
     box[0].style.backgroundColor = "red" 
});
box[0]?.addEventListener('mouseout', () => {
    box[0].style.backgroundColor = "#1FC2AE" 
});

btn[4]?.addEventListener('click', () => {
        const colors: string[]= ['red', 'yellow', 'green', 'grey', 'blue'];
        let random = Math.floor(Math.random() * 5);

      box[4].style.backgroundColor = colors[random];
});

btn[3]?.addEventListener('click', () => {
    if (box[3].style.display !== "none") {
        box[3].style.display = "none"
    } else {
        box[3].style.display = "block"
        box[3].style.backgroundColor = "#1FC2AE";   
    }
});

// Nospiežot uz 6. pogas, 6.kvadrātā skaitlis sāk ik pa 3 sekundēm
    // palielināties par 1. Kad tiek līdz 10, apstājas.

let d: number = 0;
btn[5]?.addEventListener('click', function () {
    let myinterval = setInterval(myTimer, 300);} , false);
function myTimer() {
    if (d !== 10 ){
        box[5].innerHTML = d; 
        d++;
    }
    else {
        box[5].innerHTML = 10; 
    }
}

//INPUT TEXT

// const inputfield = document.getElementById("inputtext") |
// const outputfield = document.getElementById("outputtext");
// function fun1(){
//     outputfield.innerHTML = inputfield.value;
// }