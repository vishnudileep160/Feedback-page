
// let c=document.querySelector(".btn");
// console.log(c);
// c.addEventListener("click",view);
// function view(num){
//     document.querySelector("btn").style.backgroundColor="orange";
// }



let op1=document.getElementById("btn1");
let op2=document.getElementById("btn2");
let op3=document.getElementById("btn3");
let op4=document.getElementById("btn4");
let op5=document.getElementById("btn5");
let h4=document.getElementById("heading4");


let d=op1.addEventListener("click",()=>{
    d=op1.innerText;
    console.log(d);
});

    d=op2.addEventListener("click",()=>{
    d=op2.innerText;
    console.log(d);
});

    d=op3.addEventListener("click",()=>{
    d=op3.innerText;
    console.log(d);
});

    d=op4.addEventListener("click",()=>{
    d=op4.innerText;
    console.log(d);
});

    d=op5.addEventListener("click",()=>{
    d=op5.innerText;
    console.log(d);
});




op1.addEventListener("click", ()=>{op1.style.backgroundColor="orange"});
op2.addEventListener("click", ()=>{op2.style.backgroundColor="orange"});
op3.addEventListener("click", ()=>{op3.style.backgroundColor="orange"});
op4.addEventListener("click", ()=>{op4.style.backgroundColor="orange"});
op5.addEventListener("click", ()=>{op5.style.backgroundColor="orange"});







let a=document.querySelector(".submitbtn");
let b=document.querySelector(".container1").innerHTML;
a.addEventListener("click", listen);
function listen(){
    b=document.querySelector(".container2").innerHTML;
    document.querySelector(".container1").style.display="none";
    document.querySelector(".container2").style.display="flex";
    h4.textContent= "You selected " + d + " out of 5";
}
