import { NoEmitOnErrorsPlugin } from "webpack";

const btn = document.querySelectorAll<HTMLDivElement>('.firstboxes') 
const box = document.querySelectorAll<HTMLDivElement>('.secondboxes') 
const body =document.querySelector<HTMLBodyElement | null>('body') 
const inputfield = document.querySelector<HTMLInputElement>(".input") 
 const outputfield = document.querySelector<HTMLOutputElement>(".outputtext");


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
        const colors = ['red', 'yellow', 'green', 'grey', 'blue'];
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

let d = 0;
btn[5]?.addEventListener('click', function () {
    let myinterval = setInterval(myTimer, 300);} , false);
function myTimer() {
    if (d !== 10 ){
        box[5].innerHTML = d.toString(); 
        d++;
    }
    else {
        box[5].innerHTML = String(10); 
    }
}

let a = 0;
let myinterval2: NodeJS.Timer
box[4]?.addEventListener('mouseover', () => {
 
myinterval2 = setInterval(() => {
    a++;
    box[4].innerHTML = a.toString();
    if (a === 10){
        clearInterval(myinterval2);
    }
}, 300)

});

box[4]?.addEventListener('mouseout', () => {
    a = 0;
    box[4].innerHTML = '0';
    clearInterval(myinterval2);
});



inputfield.addEventListener('input', () => {
    outputfield.textContent =inputfield.value;
});