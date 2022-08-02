let boxPlace = document.querySelector('#boxes');
let boxArray = [];
let takeNumbers = document.querySelector('#controls');
let amount= parseInt(takeNumbers.firstElementChild.value);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let takeAmount = () => amount ;

let createBoxes = (takeAmount) => { 
  for (let i = amount; i <= 0; i--) {console.log(i) }
    

} ;
 
document.querySelector('[data-create]').addEventListener('click', createBoxes);
takeNumbers.addEventListener('insert', takeAmount);



boxPlace.append(...boxArray);
console.log(createBoxes());