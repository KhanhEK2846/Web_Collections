var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var removeAll = document.querySelector('.removeAll');

var tags = ['Saber','Lancer'];

function render(){
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `  <li>
                                    ${tag}
                                    <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
                                </li>`
    }
    content.appendChild(input)
    input.focus();
}

function removeTag(index){
    tags.splice(index, 1);
    render();
}

render();

input.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        tags.push(input.value.trim());
        input.value = '';
        render();
    }
})

removeAll.addEventListener('click', function(){
    tags = [];
    render();
})


