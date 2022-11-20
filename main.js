const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
	// if (desktopMenu.classList.contains('inactive')) {
	// 	desktopMenu.classList.remove('inactive')
	// } else {
	// 	desktopMenu.classList.add('inactive')
	// }
	const isAsideClosed = aside.classList.contains('inactive')

	//If Aside is Open we must to closed it
	if (!isAsideClosed) {
		aside.classList.add('inactive')
	}

	desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
	const isAsideClosed = aside.classList.contains('inactive')

	//If Aside is Open we must to closed it
	if (!isAsideClosed) {
		aside.classList.add('inactive')
	}

	mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

	//If Mobile Menu is Open we must to closed it
	if (!isMobileMenuClosed) {
		mobileMenu.classList.add('inactive')
	}

	aside.classList.toggle('inactive')
}

// Refactorizar el codigo pasando la funcion con ejecución () => toggleMobileMenu(parametro)
