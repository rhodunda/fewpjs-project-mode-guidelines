function requestAccount() {
    // clearing  
    let accountBtn = document.querySelector(".account")
    accountBtn.addEventListener('click', function(){
        let products = document.querySelector("#products")
        products.innerHTML = ''
        let signUp = document.querySelector(".sign-up")
        signUp.innerHTML = ''
        let login = document.querySelector("#div-login")
        login.innerHTML = ''
        let checkout = document.querySelector(".checkout-table")
        checkout.innerHTML = ''

        account()
    })
}

function account() {
    // creaing account 'page'
    let accountDiv = document.querySelector("#div-account")
    accountDiv.innerHTML = ''
    deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete Account"
    deleteBtn.id = "Delete-Account"
    backBtn = document.createElement('button')
    backBtn.innerText = "back"
    backBtn.id = "account-backBtn"
    let data = localStorage.getItem('user')
    let userData = JSON.parse(data)
    accountInfoName = document.createElement('li')
    accountInfoName.innerText = userData.name
    accountInfoEmail = document.createElement('li')
    accountInfoEmail.innerText = userData.email
    accountInfoMoney = document.createElement('li')
    accountInfoMoney.innerText = userData.money
    accountDiv.append(deleteBtn, backBtn, accountInfoName, accountInfoEmail, accountInfoMoney)
    accountEventListener()
    accountBackEventListener()
}

function accountEventListener() {
    // delete
    let account = document.querySelector("#Delete-Account")
    account.addEventListener('click', function(){
        fetchAccountDelete()

        fetchProducts()
    })
}

function accountBackEventListener() {
    // back button 
    let back = document.querySelector("#account-backBtn")
    back.addEventListener('click', function() {
        

        fetchProducts()
    })
}

function fetchAccountDelete() {
 let userID = localStorage.user_id
    fetch(`http://localhost:3000/users/${userID}`, {
        method: 'DELETE'
        
    })
    localStorage.clear('user_id')
    }


