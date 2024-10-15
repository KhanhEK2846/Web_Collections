const cards = document.querySelector('.cards');
const card = document.querySelectorAll('.card');

card.forEach(c => {
    c.addEventListener('click',()=>{
        card.forEach(item => {
            item.classList.remove('active');
        })

        c.classList.add('active');
    });
})