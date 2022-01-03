const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navClose = document.querySelector('.nav-close');

if(navToggle){
    navToggle.addEventListener('click' , ()=>{
        navMenu.classList.add("show-menu");
    })
}
if(navClose){
    navClose.addEventListener('click' , ()=>{
        navMenu.classList.remove("show-menu");
    })
}