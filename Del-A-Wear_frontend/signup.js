
function signUp() { 
    let signUpForm = document.querySelector("#new-user-form")

signUpForm.addEventListener('submit', function(e) {
    e.preventDefault()

    let inputName = e.target.name.value
    let inputEmail = e.target.email.value
    let inputDeposit = e.target.deposit.value


    const newUser = {
        name: inputName,
        email: inputEmail,
        money: inputDeposit

    }
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
    })
})
}