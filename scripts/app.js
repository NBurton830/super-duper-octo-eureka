// Floating Cart Button Progress
let cartItems = 0;
const cartProgress = document.querySelector('.cart-progress');
const cartButton = document.querySelector('.cart-button');

cartButton.addEventListener('click', () => {
  cartItems += 1;
  cartProgress.textContent = `${cartItems} items`;
});

// Accordion Toggle
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(acc => {
  acc.addEventListener('click', () => {
    const panel = acc.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});

// Toggle Reviews
const reviewsToggle = document.querySelector('.reviews-toggle');
const reviewsContent = document.querySelector('.reviews-content');

reviewsToggle.addEventListener('click', () => {
  reviewsContent.style.display = reviewsContent.style.display === 'block' ? 'none' : 'block';
});
