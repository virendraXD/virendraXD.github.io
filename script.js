// script.js
// Simple smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
  });
});
