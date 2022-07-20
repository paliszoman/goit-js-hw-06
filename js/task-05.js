

let pushText = () => { 
    if (inputText.value !== "") {return outputText.innerHTML = inputText.value}
    else {return outputText.innerHTML = "Anonymous"  }
}

let inputText = document.querySelector('#name-input')
let outputText = document.querySelector('#name-output')
inputText.addEventListener('input', pushText);
