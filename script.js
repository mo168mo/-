const cartCount = document.querySelector('.cart-count');
const buyButtons = document.querySelectorAll('.buy-btn');

let count = 0;

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;
    button.textContent = '已加入';
    button.disabled = true;
    button.style.opacity = '0.8';
  });
});
