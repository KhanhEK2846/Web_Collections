var openB = document.querySelector(".open-model");
var model = document.querySelector(".model");
var X = document.querySelector(".header i");
var closeB = document.querySelector(".footer button");

function toggleModel(){
    model.classList.toggle('hide');
}

openB.addEventListener('click',toggleModel);
closeB.addEventListener('click',toggleModel);
X.addEventListener('click',toggleModel);
model.addEventListener('click',(e)=>{
    if(e.target == e.currentTarget)
        toggleModel();
});
