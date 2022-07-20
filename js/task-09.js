function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let changeColor = () => {
  main.style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').innerHTML = main.style.backgroundColor;
}

let button = document.querySelector('.change-color');
let main = document.querySelector('body');
button.addEventListener('click', changeColor);
