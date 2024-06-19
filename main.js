let modal = document.querySelector('.modal');
let closeButton = document.querySelector('#close-button');

let figures = document.querySelectorAll('.footer div');

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden');
})

figures.forEach((figure) => {
  figure.addEventListener('click', () => {
    modal.classList.remove('hidden');
  })
})