"use strict"

let NavBar=document.querySelector("nav");
let body=document.querySelector("body");
let SectionAboutMe=document.querySelector("#AboutMe");

document.addEventListener("scroll",function(){

    var intElemScrollTop = SectionAboutMe.scrollTop;
    console.log(intElemScrollTop);

})