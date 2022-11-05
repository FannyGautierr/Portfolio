"use strict"

/*
===================================================
MENU BURGER 
-> animation des barres / apparation du fond rouge
===================================================
*/

let menuBurger = document.querySelector(".burgermenu-icon");
let menuBurgerContainer=document.querySelector(".responsive-menu-container");
let navMenu=document.querySelector(".responsive-menu");

let barreUne=document.querySelector(".une")
let barreDeux=document.querySelector(".deux")
let barreTrois=document.querySelector(".trois")

menuBurger.addEventListener("click",()=>{
   console.log("super")

    barreDeux.classList.toggle("animation-deux")
    barreUne.classList.toggle("animation-une")
    barreTrois.classList.toggle("animation-trois")
    
    menuBurgerContainer.classList.toggle("red-background")
    navMenu.classList.toggle("display-flex")

   /* barreDeux.classList.remove("animation-deux")
    barreUne.classList.remove("animation-une")
    barreTrois.classList.remove("animation-trois")*/
  

    }
)

navMenu.addEventListener("click",()=>{

    barreDeux.classList.toggle("animation-deux")
    barreUne.classList.toggle("animation-une")
    barreTrois.classList.toggle("animation-trois")
    
    menuBurgerContainer.classList.toggle("red-background")
    navMenu.classList.toggle("display-flex")
})

/*
===================================================
ANIMATION OEUIL + ANIMATION DE LA LIGNE PROJET 
===================================================
*/

let height=0;
window.addEventListener('scroll', function() {
	var element = document.querySelector('#AboutMe');
	var position = element.getBoundingClientRect();

        if(position.top < -150 ){        
            document.querySelector(".oeil").src="img/oeil-ouvert.png"

        }else{
            document.querySelector(".oeil").src="img/oeil-ferme.png"
             


        }
	
});

// Animation line project 


