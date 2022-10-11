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

let menuBurger = document.querySelector(".burgermenu");
function displayBurgerMenu(){
    
}

