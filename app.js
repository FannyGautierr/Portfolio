"use strict"

let NavBar=document.querySelector("nav");
let body=document.querySelector("body");

document.addEventListener("scroll",function(){

    var intElemScrollTop = body.scrollTop;
    console.log(intElemScrollTop);

})