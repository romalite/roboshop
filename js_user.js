const urlParams = new
URLSearchParams(window.location.search);
let url = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace/products'
let xhr = new XMLHttpRequest()

const id = urlParams.get('id');

let profile = 
document.getElementById('profile');

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

let productRequest = new XMLHttpRequest()
productUser.open("GET",`${url}/products/${id}`)
productUser.responseType = 'json'
productsUser.send()
productUser.onload =function () {
	console.log(product)
}
