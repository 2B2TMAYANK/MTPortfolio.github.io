console.log("JS is connected");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const popup = document.getElementById("popup");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // ✅ Show popup
      popup.classList.add("show");
  
      // ✅ Clear form
      form.reset();
  
      // ✅ Hide after 3 sec
      setTimeout(() => {
        popup.classList.remove("show");
      }, 3000);
    });
  });


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("fade-out");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 700); // fade-out animation
  }, 800); // 1.5 seconds delay before fade starts
});

// Mobile nav toggle
const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("show");
});

