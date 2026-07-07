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
        // prevent focus/ghost clicks on touch devices
        if (e) e.preventDefault && e.preventDefault();
        menu.classList.toggle("active");
        updateToggle();
    };

    menuToggle.addEventListener("click", toggleMenu);
    menuToggle.addEventListener("pointerup", toggleMenu);
    menuToggle.addEventListener("touchstart", toggleMenu, {passive: false});

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