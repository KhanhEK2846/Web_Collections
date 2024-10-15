//Menu
const menu = document.querySelector(".links");
const menuButton = document.querySelector(".lines");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener('click',()=>{
    menu.classList.toggle("menuOpen");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener('click',()=>{
    menu.classList.toggle("menuOpen");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});