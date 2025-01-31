document.addEventListener("DOMContentLoaded", function () {
    const slideInElements = document.querySelectorAll(".slide-in");
  
    function checkSlide() {
      slideInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          element.classList.add("visible");
        }
      });
    }
  
    window.addEventListener("scroll", checkSlide);
    checkSlide();
  });
  