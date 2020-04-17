// pushing all products into a global varable called allProducts
allProducts = [] 

function fetchProducts() {
    fetch('http://localhost:3000/products')
    .then(resp => resp.json())
    .then(products => {
        displayProducts(products)
        cartListener()
        // push all products in allProducts
        allProducts = products
    })
}

function displayProducts(products){
// creating elements
const productsUl = document.querySelector('#products')
    products.forEach(product => {
       
        let productP = document.createElement('p')
        let productDiv = document.createElement("div")
        productDiv.className = "flexbox-item"
        let productImg = document.createElement("img")
        productImg.src = product.picture
        productImg.height = 200
        productImg.width = 250

        let productH3 = document.createElement("h3")
        let productSpan = document.createElement("span")
        productSpan.className = "name"
        productSpan.innerText = product.name
        let productP2 = document.createElement("p")
        productP2.className = "price"
        productP2.innerText = product.price
        let productUl = document.createElement('ul')
        productUl.id = "product-id"
        productUl.innerHTML = product.id

        let productBtn = document.createElement("button")
        productBtn.innerText = "add to Cart"
        productBtn.id = "cart-button"
        // appening items
        productH3.appendChild(productSpan)
        productDiv.append(productImg, productH3, productP2, productUl, productBtn)
        productP.appendChild(productDiv)
        productsUl.appendChild(productP)
        
    })
}
// declear cart
cart = []
function cartListener() { 
    // listening for add to cart
    let productBtns = document.querySelectorAll("#cart-button")
            productBtns.forEach(productBtn => {
                productBtn.addEventListener('click', function(e) {
                    // productSelected returns the product id as a string
                    let productSelected = e.target.parentElement.querySelector("ul").innerText
                    // pushing selected items into cart and saving them with local storage
                    cart.push(productSelected)
                    localStorage.setItem('cart', cart)
                    
                })
                
            })
    
        }


