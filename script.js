// // Hover effect
// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// // document.querySelector("h2[data-value]").forEachElement(element => {
// //   element.onmouseover = event => {
// //     console.log("Hover detected");
// //     let iterations = 0;
    
// //     const interval = setInterval(() => {
// //       event.target.innerText = event.target.innerText.split("")
// //         .map((letter, index) => {
// //         if (index < iterations) {
// //           return event.target.dataset.value[index];
// //         }
        
// //         return letters[Math.floor(Math.random() * letters.length)];
// //       })
// //         .join("");
      
// //       if(iterations >= event.target.dataset.value.length) clearInterval(interval);
      
// //       iterations += 1 / 3;
// //     }, 60);
// //   }
// // });

// const h2s = document.querySelectorAll("h2[data-value]");
// console.log("Found h2s:", h2s.length); // Debug log

// if (h2s.length > 0) {
//   h2s.forEach(element => {
//     element.onmouseover = event => {
//       let iterations = 0;
      
//       const interval = setInterval(() => {
//         event.target.innerText = event.target.innerText.split("")
//           .map((letter, index) => {
//             if (index < iterations) {
//               return event.target.dataset.value[index];
//             }
//             return letters[Math.floor(Math.random() * letters.length)];
//           })
//           .join("");
        
//         if(iterations >= event.target.dataset.value.length) clearInterval(interval);
        
//         iterations += 1 / 3;
//       }, 60);
//     }
//   });
// }

// // Trailer effect
// const trailer = document.getElementById("trailer");

// const animateTrailer = (e, interacting) => {
//     const x = e.clientX - trailer.offsetWidth / 2,
//           y = e.clientY - trailer.offsetHeight / 2;
    
//     const keyframes = {
//         transform: `translate(${x}px, ${y}px) scale ${interacting ? 1.5 : 1})`
//     }

//     trailer.animate(keyframes, {
//         duration: 800,
//         fill: "forwards"
//     });
// }

// const getTrailerClass = type => {
//     switch(type) {
//         case "video":
//             return "fa-solid fa-play";
//         default:
//             return "fa-solid fa-ellipsis";
//     }
// }

// window.onmousemove = e => {
//     console.log("Mouse moving");
//     const interactable = e.target.closest(".interactable");
//           interacting = interactable !== null;

//     const icon = document.getElementById("trailer-icon");

//     animateTrailer(e, interacting);
// }

// Hover effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("DOMContentLoaded", () => {
    const h2s = document.querySelectorAll("h2[data-value]");
    console.log("Found h2s:", h2s.length); // Debug log

    if (h2s.length > 0) {
        h2s.forEach(element => {
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