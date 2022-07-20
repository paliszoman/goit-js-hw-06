function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let createBoxes = (amount) => {
for (let i = 0; i <= amount; i++) { 
  boxArray[i] = document.createElement("div");
  boxArray[i].style.backgroundColor = getRandomHexColor();
  boxArray[i].style.height = '30px';
  boxArray[i].style.width ='30px';
}
}
 
document.querySelector('[data-create]').addEventListener('click',createBoxes);

let boxPlace = document.querySelector('#boxes');
let boxArray = [];
let takeNumbers = document.querySelector('#controls');
let amount = parseInt(takeNumbers.firstElementChild.value);

boxPlace.append(...boxArray);
console.log(boxArray);