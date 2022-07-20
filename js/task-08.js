
let submitForm = (event) => { 
    event.preventDefault()
    let { elements: { email, password } } = event.currentTarget;
    if (email.value == '' || password.value == '') { alert("Please fill in all the fields!") };
    console.log(`Login to: ${email.value}, a hasło to ${password.value}`);
    event.currentTarget.reset();
}

let form = document.querySelector('.login-form')
form.addEventListener('submit',submitForm)


