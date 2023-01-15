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


// Nospiežot uz 4. pogas, 4. kvadrāts kļūst neredzams, nospiežot
// vēlreiz, tas atkal kļūst redzams.

// btn[3]?.addEventListener('click', () => {
//         box[3].style.display ="none";
//         // box[3].style.backgroundColor = "#1FC2AE";
// });

// btn[3]?.addEventListener('click keydown', () => {
//     box[3].style.backgroundColor = "#1FC2AE";
// });




    // Nospiežot uz 6. pogas, 6.kvadrātā skaitlis sāk ik pa 3 sekundēm
    // palielināties par 1. Kad tiek līdz 10, apstājas.

    let d:number = 16; 
    btn[5]?.addEventListener('click', () => {
       const myinterval = setInterval(
        function myTimer (){
        for (let i=0; i<11; i++){
            if ( i < 11){
                d=d+1; 
            box[5].style.fontSize = d+ "px";
        } else{
            clearInterval(myinterval);    
        }
        }},3000
       ); 
});




//INPUT TEXT

// const inputfield = document.getElementById("inputtext") |
// const outputfield = document.getElementById("outputtext");
// function fun1(){
//     outputfield.innerHTML = inputfield.value;
// }