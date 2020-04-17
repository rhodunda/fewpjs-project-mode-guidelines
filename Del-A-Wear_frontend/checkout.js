
let dataObject = []

function requestCheckout() {
    //clearing button divs
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
    // get products
    listOfProductIds = localStorage.getItem('cart')
    // making string readabe 
    parsedProducts = listOfProductIds.split(",")
    
    parsedProducts.forEach(data => {
        // parsed to an interger
        dataParsed  = parseInt(data)
        // check product id against allproducts
        let selectedProduct = allProducts.find(product => product.id === dataParsed)
        
        // use product id to get name and price and store them as objects
        let newdata = {name: selectedProduct.name, price: selectedProduct.price, id: selectedProduct.id}
        dataObject.push(newdata)
    })
    
    checkout(dataObject)
    }

function checkout(dataObject) {
    // creating elements
    let tableDiv = document.querySelector(".checkout-table")
    tableDiv.innerHTML = "WELCOME TO CHECKOUT!"
    tableDiv.id = "checkout-table-id"
    let checkoutUl = document.createElement('ul')
    checkoutUl.id ="checkout-table"
    // displaying purchase data
    totalPrice = 0
    dataObject.forEach(data => {
        let checkoutLi = document.createElement('li')
        // edit button
        let checkoutEdit = document.createElement('button')
        checkoutEdit.classList.add("checkout-edit")
        checkoutEdit.innerText = 'remove'
        checkoutEdit.dataset.id = data.id
        checkoutLi.innerText = `name: ${data.name} ${data.price}`
        totalPrice += data.price
        checkoutLi.appendChild(checkoutEdit)
        checkoutUl.appendChild(checkoutLi)
    })
    // displaying final price
    let finalPriceDisplay = document.createElement('ul')
    finalPriceDisplay.innerText = totalPrice
    finalPriceDisplay.id = "checkoutUl-id"
    // creating purchaseBtn
    let purchasebtn = document.createElement('button')
    purchasebtn.innerText = "Purchase"
    purchasebtn.id = "PurchaseBtn"
    // newdata = JSON.parse(localStorage.user)
    // if (finalPriceDisplay >= newdata.money)
   
    // alert("you dont have the money!")
    
    // fetchProducts()
   

    tableDiv.append(checkoutUl, finalPriceDisplay, purchasebtn)
    
    checkOutEdit()
    checkoutEventListener()

}

function checkOutEdit() {
    // remove btn
    localStorage.getItem('cart')
    let allRemove = document.querySelectorAll(".checkout-edit")
    allRemove.forEach(remove  => {
    remove.addEventListener('click', function(e){
        console.log('click')
        removeProduct = e.target.dataset.id
        let cartIds = localStorage.getItem('cart')
        splitCart = cartIds.split(',')
        
        removeProductIndex = splitCart.indexOf(removeProduct)
       
        const index = splitCart.indexOf(removeProduct);
        if (index > -1) {
            splitCart.splice(index, 1);
        }
        dataObject = splitCart
        localStorage['cart'] = splitCart

         let clearCheckoutUl = document.querySelector("#checkout-table-id")
         clearCheckoutUl.innerHTML = ''
         /////
        
        let currentCartItems = dataObject
        dataObject = []
         currentCartItems.forEach(data => {
             // parsed to an interger
             dataParsed  = parseInt(data)
             // check product id against allproducts
             let selectedProduct = allProducts.find(product => product.id === dataParsed)
             
             // use product id to get name and price and store them as objects
             let newdata = {name: selectedProduct.name, price: selectedProduct.price, id: selectedProduct.id}
             dataObject.push(newdata)
         })
         
         totalPrice = 0
         dataObject.forEach(data =>{

        let checkoutLi = document.createElement('li')
        // edit button
        let checkoutEdit = document.createElement('button')
        checkoutEdit.classList.add("checkout-edit")
        checkoutEdit.innerText = 'remove'
        checkoutEdit.dataset.id = data.id
        checkoutLi.innerText = `name: ${data.name} ${data.price}`
        totalPrice += data.price
        checkoutLi.appendChild(checkoutEdit)
        clearCheckoutUl.appendChild(checkoutLi)
    })
         // creating purchaseBtn
         let finalPriceDisplay = document.createElement('ul')
         finalPriceDisplay.innerText = totalPrice
         finalPriceDisplay.id = "checkoutUl-id"
        let purchasebtn = document.createElement('button')
        purchasebtn.innerText = "Purchase"
        purchasebtn.id = "PurchaseBtn"
        clearCheckoutUl.append(finalPriceDisplay, purchasebtn)
            // rerenderCard()
        //  location.reload()
        checkOutEdit()
        checkoutEventListener()
    })
})
}

function checkoutEventListener() {
    // listening for purchase submit
    let purchase = document.querySelector("#PurchaseBtn")
    purchase.addEventListener('click', function(e) {
        let clearCheckoutUl = document.querySelector("#checkout-table-id")
         clearCheckoutUl.innerHTML = ''
        checkoutCart()
    })
}

function checkoutCart(){
    // grabing local storage cart, and making it readable
    data = localStorage.getItem('cart')
    productData = data.split(",")
    // grabing user data
        let userId = window.localStorage['user_id']
    // pushing user info and product info into fetch
        checkoutFetch(productData, userId)
}

function checkoutFetch(data, userId) {

    fetch("http://localhost:3000/purchases", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({product_ids: data, user_id:userId})

    })
    .then(resp => resp.json())
    .then(data => {
        localStorage.clear('cart')
        dataObject = []
        console.log(data)
        fetchProducts()
    })
}
