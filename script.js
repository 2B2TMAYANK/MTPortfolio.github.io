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
  
  
  