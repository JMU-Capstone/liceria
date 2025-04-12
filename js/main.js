// main.js (Global/Shared JavaScript)

// Example: log a simple message to ensure it's loaded
console.log('Global main.js loaded!');
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.getElementById("navbar-toggle");
    const navLinks = document.getElementById("nav-links");
  
    if (navbarToggle && navLinks) {
      navbarToggle.addEventListener("click", function () {
        // Toggle the 'open' class to show/hide the mobile menu
        navLinks.classList.toggle("open");
      });
    }
  });
  
  