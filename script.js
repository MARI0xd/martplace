let productsGrid = document.getElementById('products-grid');
let productsArray = [];
let xhr = new XMLHttpRequest();
<<<<<<< HEAD
let url = 'https://my-json-server.typicode.com/MARI0xd/martplace';

xhr.open('GET', url + '/products')
xhr.responseType = 'json';
xhr.onload = function(){
let products = xhr.response;
products.productsGrid.innerHTML = null;
products.forEach(p => {
  productsArray.push(p);
  let pElem = document.createElement('div');
  pElem.innerHTML = `
			<h2 class='product-name'>${p.name}</h2>
			<img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
			<p class='product-description'><b>Description: </b>${p.description}</p>
			<a href=''>Seller profile</a>
			<button>Buy</button>
		`;
		productsGrid.append(pElem);
xhr.send();
});
}
=======
//let url = 'https://my-json-server.typicode.com/MARI0xd/martplace/db';

xhr.open('GET', url + '/products');
xhr.responseType = 'json';
xhr.onload = function(){
	let products = xhr.response;
	productsGrid.innerHTML = null;
	productsArray.forEach(p => {
        productsArray.push(p);
        let pElem = document.createElement('div');
        pElem.classList.add('product');
        pElem.innerHTML = `
            <h2 class='product-name'>${p.name}</h2>
            <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
            <p class='product-price'><b>Price: </b>${p.price}$</p>
            <p class='product-description'><b>Description: </b>${p.description}</p>
            <button onclick="addProductToCart('${p._id}')">Buy</button>
        `;
        productsGrid.append(pElem);
    });
}
xhr.send();

let cartProd = document.getElementById('cart-products');

let cart = [];
if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    drawCartProducts();
}


>>>>>>> a442ec5a8d358d2af778039caa7b2da8edf4fc69
