const bars = document.querySelector('.bars');
const container = document.querySelector('.container');
bars.addEventListener('click', () => {
  console.log("clicked");
 if (container.classList.contains('hidden')) {
  container.classList.remove('hidden')
   container.classList.add('display');
 }else{
  container.classList.add('hidden');
  container.classList.remove('display');
 }
});