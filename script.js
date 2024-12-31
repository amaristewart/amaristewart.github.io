// Hover effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("DOMContentLoaded", () => {
    // Hover effect for h2s
    const h2s = document.querySelectorAll("h2[data-value]");
    console.log("Found h2s:", h2s.length);

    if (h2s.length > 0) {
        h2s.forEach(element => {
            element.onmouseover = event => {
                let iterations = 0;
                let start = null;

                function animate(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;

                    // Update text every 60ms
                    if (progress % 60 < 16) { // 16ms is roughly one frame
                        event.target.innerText = event.target.innerText.split("")
                            .map((letter, index) => {
                                if (index < iterations) {
                                    return event.target.dataset.value[index];
                                }
                                return letters[Math.floor(Math.random() * letters.length)];
                            })
                            .join("");
                        
                        iterations += 1/3;
                    }

                    if (iterations < event.target.dataset.value.length) {
                        requestAnimationFrame(animate);
                    }
                }

                requestAnimationFrame(animate);
            }
        });

        // Menu effect
        const menu = document.getElementById("menu");

        Array.from(document.getElementsByClassName("menu-item"))
          .forEach((item, index) => {
            item.onmouseover = () => {
              menu.dataset.activeIndex = index;
            }
  });
    }

    // Trailer effect
    const trailer = document.getElementById("trailer");

    if (trailer) {
        const animateTrailer = (e, interacting) => {
            const x = e.clientX - trailer.offsetWidth / 2,
                  y = e.clientY - trailer.offsetHeight / 2;
            
            const keyframes = {
                transform: `translate(${x}px, ${y}px) scale(${interacting ? 1.5 : 1})`
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
            const interacting = interactable !== null;
            const icon = document.getElementById("trailer-icon");

            animateTrailer(e, interacting);
        }
    } else {
        console.error("Trailer element not found!");
    }
});