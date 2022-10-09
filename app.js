"use strict"

let NavBar=document.querySelector("nav");
let body=document.querySelector("body");
let SectionAboutMe=document.querySelector("#AboutMe");

document.addEventListener("scroll",function(){

    var intElemScrollTop = SectionAboutMe.scrollTop;
    console.log(intElemScrollTop);

})

let javaScriptProject=document.querySelectorAll(".js");
let htmlProject=document.querySelectorAll(".html");
let phpProject=document.querySelectorAll(".php");

let buttonJavaScript=document.querySelector(".javaScript-button")
let buttonPhp=document.querySelector(".php-button")
let buttonHtml=document.querySelector(".html-button")
// Input -> un DOm object 
//Sort -> dom event (display none)
function  TriProjet(Programm,choosenprogramm){
   console.log(Programm,choosenprogramm)
Programm.forEach(e => {
    if(e.classList.contains(choosenprogramm)){
        e.style.display="none";
        }
});   

}


buttonJavaScript.addEventListener("click",() => {
    TriProjet(javaScriptProject,"js");
})

buttonPhp.addEventListener("click",() => {
    TriProjet(phpProject,"php");
})

buttonHtml.addEventListener("click",() => {
    TriProjet(htmlProject,"html");
})