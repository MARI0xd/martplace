let productsGrid = document.getElementById('products-grid');
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/MARI0xd/martplace';

xhr.open('GET', url + '/products');
xhr.responseType = 'json';
xhr.onload = function(){
	let products = xhr.response;
	productsGrid.innerHTML = null;
	products.forEach(p => {
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.innerHTML = `
			<h2 class='product-name'>${p.product_name}</h2>
			<img class='product-photo' src='${p.photo_url}' alt='${p.product_name}'>
			<p class='product-description'><b>Description: </b>${p.description}</p>
			<a href=''>Seller profile</a>
			<button>Buy</button>
		`;
		productsGrid.append(pElem);
	});
}
xhr.send();