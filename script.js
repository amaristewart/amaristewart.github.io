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
  });
});