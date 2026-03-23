fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  });

function toggleMenu() {
  document.getElementById("foot-menu").classList.toggle("active");
}