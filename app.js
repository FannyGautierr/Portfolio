"use strict"

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


// Aniamtion œil ouvert /fermer

window.addEventListener('scroll', function() {
	var element = document.querySelector('#AboutMe');
	var position = element.getBoundingClientRect();


		console.log(position.top);

        if(position.top < -300){
          console.log("che")
            document.querySelector(".oeil").src="img/oeil-ouvert.png"
          
        
        
        }else if(position.top > -300){
            document.querySelector(".oeil").src="img/oeil-ferme.png"
        }
	
});