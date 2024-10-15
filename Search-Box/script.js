var button = document.querySelector(".button");

button.addEventListener('click',function(){
    this.parentElement.classList.toggle("open");
    this.previousElementSibling.focus();
})