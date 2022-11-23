const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoShoppingCartContainer)

function toggleDesktopMenu() {
	// if (desktopMenu.classList.contains('inactive')) {
	// 	desktopMenu.classList.remove('inactive')
	// } else {
	// 	desktopMenu.classList.add('inactive')
	// }
	const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')

	//If ShoppingCartContainer is Open we must to closed it
	if (!isShoppingCartContainerClosed) {
		shoppingCartContainer.classList.add('inactive')
	}

	desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
	const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')

	//If ShoppingCartContainer is Open we must to closed it
	if (!isShoppingCartContainerClosed) {
		shoppingCartContainer.classList.add('inactive')
	}

	mobileMenu.classList.toggle('inactive')
}

function toggleCarritoShoppingCartContainer() {
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

	//If Mobile Menu is Open we must to closed it
	if (!isMobileMenuClosed) {
		mobileMenu.classList.add('inactive')
	}

	shoppingCartContainer.classList.toggle('inactive')
}

// Refactorizar el codigo pasando la funcion con ejecución () => toggleMobileMenu(parametro)

const productList = []

productList.push({
	name: 'Bike',
	price: 120,
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
	name: 'Monitor',
	price: 220,
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
	name: 'Car',
	price: 120.0,
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts(arr) {
	for (product of arr) {
		const productCar = document.createElement('div')
		productCar.classList.add('product-card')

		const productImg = document.createElement('img')
		productImg.setAttribute('src', product.image)

		const productInfo = document.createElement('div')
		productInfo.classList.add('product-info')

		const productInfoDiv = document.createElement('div')

		const productPrice = document.createElement('p')
		productPrice.innerText = '$' + product.price

		const productName = document.createElement('p')
		productName.innerText = product.name
		//Insert
		productInfoDiv.append(productPrice, productName)

		const productInfoFigure = document.createElement('figure')
		const productImgCart = document.createElement('img')
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

		//Insert
		productInfoFigure.append(productImgCart)

		productInfo.append(productInfoDiv, productInfoFigure)

		productCar.append(productImg, productInfo)

		cardsContainer.append(productCar)
	}
}

renderProducts(productList)
