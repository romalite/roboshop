const urlParams = new
URLSearchParams(window.location.search);

const id = urlParams.get('id');

let profile = 
document.getElementById('profile');

let product = document.getElementById('products')

let url = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace';

let userRequest = new XMLHttpRequest();

userRequest.open('GET', `${url}/users/${id}`);
userRequest.responseType = 'json';
userRequest.onload = function() {
	let user = userRequest.response;
	profile.innerHTML =
	`
	<h1>${user.name}</h1>
	<h2>${user.sirname}</h2>

	<img class="profile-img" 
	src="${user.photo_url}">

	<p>Balance: ${user.balance}$</p>
	`
}

userRequest.send();

let url1 = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace/products'
let productsUser = new XMLHttpRequest()
productsUser.open("GET",`${url}/products?author_id=${id}`)
productsUser.responseType = 'json'
productsUser.send()
productsUser.onload =function () {
	let products = productsUser.response
	console.log(products)
 	product.innerHTML = `
	
	 <h1>${products[0].name}</h1>
	<img class="products-img" 	
	src=${products[0].photo_url}>
	<h2>${products[0].price}</h2>
	<h2>${products[0].description}</h2>
	<div class="products2">

	
	<h3>${products[1].name}</h1>
	<img class="products-img" 	
	src=${products[1].photo_url}>
	<h2>${products[1].price}</h2>
	<h2>${products[1].description}</h2>
	</div>
	 
	 `
}