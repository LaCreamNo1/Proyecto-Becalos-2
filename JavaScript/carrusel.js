document.addEventListener("DOMContentLoaded", function () {

  let index = 0;
  const images = document.querySelectorAll(".carousel-track img");

  function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

});