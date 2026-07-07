const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    const updateToggle = () => {
        const isOpen = menu.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
    };

    const toggleMenu = (e) => {
        menu.classList.toggle("active");
        updateToggle();
    };

    // Attach pointer and click handlers for broad device support
    menuToggle.addEventListener("click", toggleMenu);
    menuToggle.addEventListener("pointerdown", toggleMenu);

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            updateToggle();
        });
    });

    document.addEventListener("click", (event) => {
        if (window.innerWidth <= 768 && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
            updateToggle();
        }
    });
}