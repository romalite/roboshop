let productsGrid = document.getElementById('products-grid');
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace';

xhr.open('GET', url + '/products/');
xhr.responseType = 'json';
xhr.onload = function() {
	let products = xhr.response;
	productsGrid.innerHTML = null;

	products.forEach(p => {
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.innerHTML = `
		<div class="product">
		<h2 class='product-name'>${p.name}</h2>
		<img class='product-photo' src='${p.photo_url}'
		alt='${p.name}'>
		<p class='product-price'><b>Price: <b>${p.price}$</p>
		<p class='product-description'><b>Description: </b>${p.description}</p>
		<a href='index.html?id=${p.author_id}'>Seller profile</a>
		<button>Buy</button>
		</button>
		`;
		productsGrid.append(pElem);
		});
}
xhr.send();
