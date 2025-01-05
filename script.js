document.addEventListener("DOMContentLoaded", () => {
        // Menu effect
        const menu = document.getElementById("menu");

        Array.from(document.getElementsByClassName("menu-item"))
          .forEach((item, index) => {
            item.onmouseover = () => {
              menu.dataset.activeIndex = index;

              const position = index * 10;
              document.body.style.backgroundPosition = `${position}% ${position}%`;
            }

            const menuItems = document.querySelectorAll(".menu-item");

            menuItems.forEach(item => {
                item.addEventListener("click", event => {
                    event.preventDefault();
                    const targetId = item.getAttribute("href").slice(1);
                    const targetElement = document.getElementById(targetId);
        
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: "smooth",
                            block: "start"  
                        });
                    }
                });
            });

        // Card effect
        document.getElementById("cards").onmousemove = e => {
          for(const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                  x = e.clientX - rect.left,
                  y = e.clientY - rect.top;
        
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          };
        }

        // Modal effect
        const modal = document.getElementById("modal");
        const closeBtn = modal.querySelector(".close");
        const carousel = modal.querySelector(".carousel");
        const modalTitle = modal.querySelector(".modal-info h3");
        const modalDescription = modal.querySelector(".modal-info p");

        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click", () => {
                modalTitle.textContent = card.dataset.title;
                modalDescription.textContent = card.dataset.description;

                carousel.innerHTML = "";
                const images = card.dataset.images.split(",");
                images.forEach((image, index) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = image.trim();
                    imgElement.alt = card.dataset.title;
                    imgElement.className = index === 0 ? "active" : "";
                    carousel.appendChild(imgElement);
                });

                modal.style.display = "flex"; 
                modal.classList.remove("close"); 
                modal.classList.add("open"); 
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("open"); 
            modal.classList.add("close");
            setTimeout(() => {
                modal.style.display = "none"; 
                modal.classList.remove("close"); 
            }, 500);
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeBtn.click(); 
            }
        });
    });
});