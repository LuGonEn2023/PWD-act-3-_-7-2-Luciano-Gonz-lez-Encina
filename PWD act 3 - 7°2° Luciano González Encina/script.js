document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    const intervalTime = 3000;
  
    function moveCarousel() {
      currentIndex = (currentIndex + 1) % images.length;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    let carouselInterval = setInterval(moveCarousel, intervalTime);
  
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close");
  
    images.forEach(image => {
      image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
      });
    });
  
    closeModal.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-theme");
    }
  
    darkModeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-theme");
      localStorage.setItem("darkMode", document.body.classList.contains("dark-theme"));
    });
  });
  