// SCROLL TO TOP
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollFunction();
  highlightNav();
};

function scrollFunction() {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
}

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ANIMASI REVEAL ON SCROLL
const revealElements = document.querySelectorAll(".section, .project-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
}, { threshold: 0.2 });

revealElements.forEach((el) => observer.observe(el));

// HIGHLIGHT NAVIGATION SAAT SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function highlightNav() {
  let index = sections.length;

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[index]?.classList.add("active");
}



// HAMBURGER MENU FUNCTIONALITY
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("open");
});

// Auto-close nav on link click (only for mobile)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("open");
  });
});
