function requestLogoutForm() {
    // clearing buttons
    logoutBtn = document.querySelector(".logout")
    logoutBtn.addEventListener('click', function(e){
        let products = document.querySelector("#products")
        products.innerHTML = ''
        let signUp = document.querySelector(".sign-up")
        signUp.innerHTML = ''
        let login = document.querySelector("#div-account")
        login.innerHTML = ''
        let checkout = document.querySelector(".checkout-table")
        checkout.innerHTML = ''
        CreatingLoginForm()
    })
}

function CreatingLoginForm() {
    //creating login
    let loginForm = document.createElement('form')
    loginForm.id = "LoginForm"
   
    
    

    let logoutH3 = document.createElement('h3')
    logoutH3.innerText = 'Logout'
    
    let nameInput = document.createElement('input')
    nameInput.type = "text"
    nameInput.name = "name"
    nameInput.placeholder = "Name..."
    let emailInput = document.createElement('input')
    emailInput.type = "text"
    emailInput.name = "email"
    emailInput.placeholder = "Email..."
    let submitBtnInput = document.createElement('button')
    submitBtnInput.innerText = "login"
    // apending
    loginDiv = document.querySelector("#div-login")
    loginDiv.innerHTML = '' 
    loginForm.append(nameInput, emailInput, submitBtnInput)
    loginDiv.append(logoutH3, loginForm)
    
    
    loginEventlistener()
    
}

function loginEventlistener() {
    //login event listener
    loginSelecteds = document.querySelector("#LoginForm")
    loginSelected.addEventListener('submit', function(e) {
        e.preventDefault()
        loginSelecteds.innerHTML = ""
        userName = e.target.name.value
        userEmail = e.target.email.value

        loginUser = {
            name: userName,
            email: userEmail
        }
        loginFetch(loginUser)
        fetchProducts()
        loginSelected.reset()
    })

}

function loginFetch(loginUser) {
    // login fetch 
    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
    })
    .then(resp => resp.json())
    .then(data => {
        currentUser(data)
    })
}


