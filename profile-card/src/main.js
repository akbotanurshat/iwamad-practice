import './style.css'
const btn = document.querySelector('#like-btn');
const card = document.querySelector('.card');

btn.addEventListener('click', () => {
  card.classList.toggle('liked');

  if (card.classList.contains('liked')) {
    btn.textContent = '♥ Liked';
  } else {
    btn.textContent = '♡ Like';
  }
});
