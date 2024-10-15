function createB(){
    const animated = document.querySelector(".animated")
    const burst = document.querySelector(".burst")
    const lines = document.querySelectorAll(".line")

    burst.style.top = Math.random() * innerHeight +'px'
    burst.style.left = Math.random() * innerWidth +'px'

    const color = ['#FF0000',"#FFFFCC","#0000FF","#33FF00","#33FFFF",
                    "#FFCCFF","#FFCC00","#33CCFF","#FF99CC","#00FFFF",
                "#98F5FF", "#836FFF" ]

    lines.forEach(line=>{
        const randomC = color[Math.floor(Math.random() * color.length)]
        line.style.background = randomC
    })

    const cloneB = burst.cloneNode(true);
    animated.appendChild(cloneB)

    setTimeout(()=>{
        cloneB.remove()
    },3000)
}

setInterval(createB,400)