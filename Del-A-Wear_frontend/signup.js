function requestSignupForm() {
    // could refactor
    // event listener
    let signUpRequest = document.querySelector(".Signup-btn")
   signUpRequest.addEventListener('click', function(e) {
       // clearing buttons
    let products = document.querySelector("#products")
    products.innerHTML = ''
    let signUp = document.querySelector("#div-account")
        signUp.innerHTML = ''
        let login = document.querySelector("#div-login")
        login.innerHTML = ''
        let checkout = document.querySelector(".checkout-table")
        checkout.innerHTML = ''
    createSignupForm()
})

}
    
   function createSignupForm() {
       //creating form
     let signUp = document.querySelector(".sign-up")
        signUp.innerHTML = `
                <h3>Sign Up</h3>
                <form id="new-user-form">
                <input type="text" name="name" placeholder="Name..." autocomplete="off" />
                <input type="text" name="email" placeholder="e-mail..." autocomplete="off" />
                <input type="number" name="deposit" placeholder="deposit..." autocomplete="off" />
                <input type="submit" value="Sign Up">
                </form><br>
            `
            signUpEventListener()
   }


function signUpEventListener() { 
    // signUp submit
    let signUpForm = document.querySelector("#new-user-form")

signUpForm.addEventListener('submit', function(e) {
    e.preventDefault()

    
    let inputName = e.target.name.value
    let inputEmail = e.target.email.value
    let inputDeposit = e.target.deposit.value
    
    
    const newUser = {
        name: inputName,
        email: inputEmail,
        money: inputDeposit,
        
    }
    signUpFetch(newUser)
    signUpForm.reset()
})

}
function signUpFetch(newUser) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(newUser)
        
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        window.localStorage['user_id'] = data.id
        
    currentUser(newUser)
    fetchProducts()
    })
}

function currentUser(newUser) {
    
    localStorage.setItem('user', JSON.stringify(newUser))
    
}
