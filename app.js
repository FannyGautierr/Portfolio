"use strict"

/** 
* MENU BURGER 
* -> animation des barres + apparation du fond rouge

*/

let menuBurger = document.querySelector(".burgermenu-icon");
let menuBurgerContainer=document.querySelector(".responsive-menu-container");
let navMenu=document.querySelector(".responsive-menu");

let barreUne=document.querySelector(".une")
let barreDeux=document.querySelector(".deux")
let barreTrois=document.querySelector(".trois")

menuBurger.addEventListener("click",()=>{
    barreDeux.classList.toggle("animation-deux")
    barreUne.classList.toggle("animation-une")
    barreTrois.classList.toggle("animation-trois")
    menuBurgerContainer.classList.toggle("red-background")
    navMenu.classList.toggle("display-flex")
    }
)
/** 
* MENU BURGER 
* Enleve le menu si on clique sur un des texte
*/
navMenu.addEventListener("click",()=>{
    barreDeux.classList.toggle("animation-deux")
    barreUne.classList.toggle("animation-une")
    barreTrois.classList.toggle("animation-trois")
    
    menuBurgerContainer.classList.toggle("red-background")
    navMenu.classList.toggle("display-flex")
})

/** 
* ANIMATION DE L'OEIL
* ouver et ferme l'oeil en fonction du scroll de la page
*/

window.addEventListener('scroll', function() {
	var element = document.querySelector('#AboutMe');
	var position = element.getBoundingClientRect();
        if(position.top < -150 ){        
            document.querySelector(".oeil").src="img/oeil-ouvert.webp"

        }else{
            document.querySelector(".oeil").src="img/oeil-ferme.webp"
        }
});




