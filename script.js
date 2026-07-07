const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    const updateToggle = () => {
        const isOpen = menu.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    };

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        updateToggle();
    });

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