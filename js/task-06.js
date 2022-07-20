let statusLookup = () => { 
    if (parseInt(inputBar.dataset.length) == inputBar.value.length) { return inputBar.className = 'valid' }
    else {return inputBar.className = 'invalid'}
}
let inputBar = document.querySelector('#validation-input');
let lookForStatus = inputBar.addEventListener('blur', statusLookup)


console.log(inputBar.hasAttribute('id'))