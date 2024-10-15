var eKey = document.querySelector('.card.key p:last-child');
var eLocation = document.querySelector('.card.location p:last-child');
var eWhich = document.querySelector('.card.which p:last-child');
var eCode = document.querySelector('.card.code p:last-child');

var eAlert = document.querySelector('.alert');
var eBox = document.querySelector('.box');
var eResult = document.querySelector('.result');

document.addEventListener('keydown',(e)=>{
    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;
    eResult.innerText = e.which;

    //Alert
    eAlert.classList.add('hide');
    eBox.classList.remove('hide');
})