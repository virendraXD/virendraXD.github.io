// script.js
// Smooth scroll only for section links starting with "#"
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
    // If it's not "#", let it open normally (like thumbnails.html)
  });
});
