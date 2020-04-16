function requestAccount() {
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
    let accountDiv = document.querySelector("#div-account")
    deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete Account"
    deleteBtn.id = "Delete-Account"
    backBtn = document.createElement('button')
    backBtn.innerText = "back"
    backBtn.id = "account-backBtn"
    data = localStorage.getItem('user')
    userData = JSON.parse(data)
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
    let account = document.querySelector("#Delete-Account")
    account.addEventListener('click', function(){




        let clearAccount = document.querySelector("#div-account")
        clearAccount.innerHTML = ''
        fetchProducts()
    })
}

function accountBackEventListener() {
    let back = document.querySelector("#account-backBtn")
    back.addEventListener('click', function() {

        let clearAccount = document.querySelector("#div-account")
        clearAccount.innerHTML = ''
        fetchProducts()
    })
}