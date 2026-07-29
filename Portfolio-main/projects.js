window.addEventListener("load",()=>{

    setTimeout(()=>{

        document
        .getElementById("intro")
        .classList.add("hide");

    },3000);


    setTimeout(()=>{

        document
        .getElementById("intro")
        .remove();

    },3800);

});


// Spotlight Effect

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        card.style.setProperty("--x",(e.clientX-rect.left)+"px");
        card.style.setProperty("--y",(e.clientY-rect.top)+"px");

    });

});




