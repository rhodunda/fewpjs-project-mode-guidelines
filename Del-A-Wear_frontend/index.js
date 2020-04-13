document.addEventListener('DOMContentLoaded', function(e){
    console.log('DOM Loaded...')
    fetchProducts()
    signUp()
})

const productsUl = document.querySelector('#products')
function fetchProducts() {
    fetch('http://localhost:3000/products')
    .then(resp => resp.json())
    .then(products => {
        
    products.forEach(product => {
        let productP = document.createElement('p')
        productP.innerHTML = `
    <div class="flexbox-item">
        <img src="${product.picture}" >
      <h3>
        <span class="name">${product.name}</span>
        </h3>
      <p class="bio">${product.price}</p>
        <button>add to cart</button>
    </div>
    `
    productsUl.appendChild(productP)
        })
    })
}

