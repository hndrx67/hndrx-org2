document.addEventListener("DOMContentLoaded", () => {
    // GSAP Navbar Animation
    gsap.from("nav", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });

    // Smooth Scroll Effect for Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Navbar Scroll Background Effect
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = body.classList.contains("light-mode") ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)";
        } else {
            navbar.style.backgroundColor = body.classList.contains("light-mode") ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)";
        }
    });

    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        themeIcon.textContent = body.classList.contains("light-mode") ? "☀️" : "🌙";
        localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
    });

    // Load Saved Theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.add("light-mode");
        themeIcon.textContent = "☀️";
    } else {
        body.classList.remove("light-mode");
        themeIcon.textContent = "🌙";
    }
});