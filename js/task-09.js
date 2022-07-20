function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let changeColor = (event) => {  main.style.backgroundColor = getRandomHexColor(); }

let main = document.querySelector('body');

main.addEventListener('click', changeColor);
