
function requestCheckout() {
   let checkoutBtn = document.querySelector(".checkout-btn")
   checkoutBtn.addEventListener('click', function(e){
    let products = document.querySelector("#products")
    products.innerHTML = ''
    let signUp = document.querySelector(".sign-up")
        signUp.innerHTML = ''
        let login = document.querySelector("#div-login")
        login.innerHTML = ''
        let checkoutBtn = document.querySelector("#div-account")
        checkoutBtn.innerHTML = ''
    getProductsDetailsForCart()
    
   })
}

function getProductsDetailsForCart() {
    let dataObject = []
    data = localStorage.getItem('cart')
    
    // userData = JSON.parse(data)
    
    userData.forEach(data => {
        data = parseInt(data)
       let selectedProduct = allProducts.find(product => product.id === data)
        let newdata = {name: selectedProduct.name, price: selectedProduct.price}
        dataObject.push(newdata)
        
    })
    checkout(dataObject)
    }



function checkout(dataObject) {
    let tableDiv = document.querySelector(".checkout-table")
    let checkoutUl = document.createElement('ul')
    checkoutUl.id ="checkout-table"

    totalPrice = 0
    dataObject.forEach(data => {
        let checkoutLi = document.createElement('li')
        checkoutLi.innerText = `name: ${data.name} ${data.price}`
        totalPrice += data.price
        checkoutUl.appendChild(checkoutLi)
    })
    let finalPrice = document.createElement('ul')
    finalPrice.innerText = totalPrice
    
    let purchasebtn = document.createElement('button')
    purchasebtn.innerText = "Purchase"
    purchasebtn.id = "PurchaseBtn"

    tableDiv.append(checkoutUl, finalPrice, purchasebtn)
    
    checkoutEventListener()
    
}



function checkoutEventListener() {

    let purchase = document.querySelector("#PurchaseBtn")
    purchase.addEventListener('click', function(e) {
        checkoutCart()



        let clearTable = document.querySelector(".checkout-table")
        clearTable.innerHTML = ''
        fetchProducts()
    })
}
// let data = {
//     product_id: --------,
//     user_id: ---------
// }

function checkoutCart(){
    data = localStorage.getItem('cart')
    productData = JSON.parse(data)
    userData.forEach(productInfo => {
      let info= parseInt(productInfo)
   
    
        let userId = window.localStorage['user_id']
        

    let itemInCart = {
        product_id: info,
        user_id: parseInt(userId)
    }

    checkoutFetch(itemInCart)

    })
}

function checkoutFetch(data) {
    // debugger
    fetch("http://localhost:3000/purchases", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(data)
        
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        fetchProducts()
    })
}
