var img = document.querySelectorAll(".img img");
var pre = document.querySelector(".pre");
var nxt = document.querySelector(".nxt");
var X = document.querySelector(".close");
var GalleryImg = document.querySelector(".inner img");
var Gallery = document.querySelector(".gallery");

var curIndex = 0;

function show(){
    if(curIndex == 0){
        pre.classList.add("hide");
    }else{
        pre.classList.remove("hide");
    }

    if(curIndex == img.length - 1){
        nxt.classList.add("hide");
    }else{
        nxt.classList.remove("hide");
    }

    //display
    GalleryImg.src = img[curIndex].src;
    Gallery.classList.add('show');
}

img.forEach((item,index)=>{
    item.addEventListener('click',function(){
        curIndex = index;
        show();
    })
})

X.addEventListener('click',()=>{
    Gallery.classList.remove('show');
})

pre.addEventListener('click',()=>{
    if(curIndex > 0 ){
        curIndex--;
        show();
    }
})

nxt.addEventListener('click',()=>{
    if(curIndex < img.length - 1 ){
        curIndex++;
        show();
    }
})


//Keybroad
document.addEventListener('keydown',(e)=>{
    if(e.keyCode == 27){ //Esc
        Gallery.classList.remove('show');
    }else{
        if(e.keyCode == 37 && curIndex > 0 && Gallery.classList.contains("show")){
            curIndex--;
            show();
        }else{
            if(e.keyCode == 39 && curIndex < img.length - 1 && Gallery.classList.contains("show")){
                curIndex++;
                show();
            }
        }
    }

})
