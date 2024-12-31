// Hover effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h2[data-value]").forEachElement(element => {
  element.onmouseover = event => {
    let iterations = 0;
    
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        
        return letters[Math.floor(Math.random() * letters.length)];
      })
        .join("");
      
      if(iterations >= event.target.dataset.value.length) clearInterval(interval);
      
      iterations += 1 / 3;
    }, 60);
  }
});

// Trailer effect
const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientY - trailer.offsetHeight / 2;
    
    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale ${interacting ? 1.5 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
}

const getTrailerClass = type => {
    switch(type) {
        case "video":
            return "fa-solid fa-play";
        default:
            return "fa-solid fa-ellipsis";
    }
}

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable");
          interacting = interactable !== null;

    const icon = document.getElementById("trailer-icon");

    animateTrailer(e, interacting);
}