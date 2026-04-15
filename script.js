
const btn = document.querySelector('.svg-nbtn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

const form = document.querySelector('.order-form');
const successModal = document.querySelector('.success-modal');
const closeSuccess = document.querySelector('.close-success');

// ВІДКРИТИ першу модалку
btn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// ЗАКРИТИ першу модалку
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// КЛІК ПО ФОНУ
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// SUBMIT → друга модалка
form.addEventListener('submit', (e) => {
  e.preventDefault();

  modal.style.display = 'none';
  successModal.style.display = 'flex';
});

// ЗАКРИТИ success
closeSuccess.addEventListener('click', () => {
  successModal.style.display = 'none';
});

