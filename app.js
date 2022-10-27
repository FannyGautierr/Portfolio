"use strict"
// Select in project -> display the projects 

let dropDownSelect =document.querySelector("#select-lang")
let searchButton=document.querySelector(".search-button")

// Input -> un DOm object 
//Sort -> dom event (display none)
function  TriProjet(Programm){   
    let Project=document.querySelectorAll(".CardProjet");    
Project.forEach(e => {
    if(!e.classList.contains(Programm)){
        e.style.display="none";
    }else{
        e.style.display="grid";
    }
});   

}

// add event listener 
searchButton.addEventListener("click",() => {
    let choosenprogramm=dropDownSelect.value
    TriProjet(choosenprogramm);
})

//menu burger

let menuBurger = document.querySelector(".burgermenu-icon");
let menuBurgerContainer=document.querySelector(".responsive-menu-container");
let navMenu=document.querySelector(".responsive-menu");

let barreUne=document.querySelector(".une")
let barreDeux=document.querySelector(".deux")
let barreTrois=document.querySelector(".trois")

menuBurger.addEventListener("click",()=>{
   

    barreDeux.classList.add("animation-deux")
    barreUne.classList.add("animation-une")
    barreTrois.classList.add("animation-trois")

    menuBurgerContainer.classList.toggle("red-background")
    navMenu.classList.toggle("display-flex")

    barreDeux.classList.remove("animation-deux")
    barreUne.classList.remove("animation-une")
    barreTrois.classList.remove("animation-trois")
  

    }
)
