// JavaScript: Intersection Observer for Slide-in Effects

//THIS SELECTS ALL ELEMENTS THAT HAVE THE CLASS "SLIDE IN "
const slideElements = document.querySelectorAll('.slide-in');

//THIS CREATES THE OBSERVER
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add the visible class
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}, {
  root: null, // Observes viewport
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each slide-in element
slideElements.forEach(el => observer.observe(el));
