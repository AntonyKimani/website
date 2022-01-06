const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navClose = document.querySelector('.nav-close');
const telePhone = document.querySelector('.telephone-button');
const phoneNo = document.querySelector('.telephone-btn p');
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

telePhone.addEventListener('click') , ()=>{
    document.body.style.remove('display:none');
    document.body.style.add('display:block');
}