document.addEventListener("mousemove",(e)=>{
    document.querySelectorAll(".obj").forEach(function(item){
        const m  = item.getAttribute('data-value');
        const x = e.clientX * m / 250
        const y = e.clientY * m / 250

        item.style.transform = `translate(${x}px, ${y}px)`;
    })
})

/*document.addEventListener('mousemove', parallax);
function parallax(e){
  document.querySelectorAll('.obj').forEach(function(move){
    let moving_val = move.getAttribute('data-value')
    let x = e.clientX * moving_val / 250
    let y = e.clientY * moving_val / 250

    move.style.transform = `translate(${x}px, ${y}px)`
  })
}*/

