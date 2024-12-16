const bars = document.querySelector('.bars');
const container = document.querySelector('.container');
bars.addEventListener('click', () => {
  container.classList.toggle('hidden');
});