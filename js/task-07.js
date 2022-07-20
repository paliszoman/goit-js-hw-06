let textSizeChanging = () => {
usableText.style.fontSize = sizeControl.value+'px'
 }


let sizeControl = document.querySelector('#font-size-control')
let usableText = document.querySelector('#text')
sizeControl.addEventListener('input', textSizeChanging)


console.log(sizeControl)