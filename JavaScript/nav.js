document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;

      const btn = document.querySelector(".menu-toggle");
      const menu = document.getElementById("nav-menu");

      btn.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    });
});