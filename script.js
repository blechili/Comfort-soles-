// Newsletter form submission
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector("input").value;
  alert(`Thanks for subscribing, ${email}! 🌊`);
  this.reset();
});
// Optional animation on scroll (using IntersectionObserver)
const shoeCards = document.querySelectorAll('.shoe-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

shoeCards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'all 0.5s ease';
  observer.observe(card);
});
