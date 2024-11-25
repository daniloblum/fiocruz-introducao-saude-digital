// DESKTOP

(function () {
	// Ajustar a altura da página quando for menor que a sidebar

	// $(document).ready( function () {
	let sidebarHeight = document.getElementsByClassName('sidebar');
	let contentHeight = document.getElementsByClassName('content');
	let pageTitle = document.getElementById('page-title');
	let footerHeight = document.getElementsByTagName('footer');
	let sectionsToDiscount = pageTitle.offsetHeight + footerHeight[0].offsetHeight;

	if (sidebarHeight[0].offsetHeight > contentHeight[0].offsetHeight) {
		let pageContent = document.getElementById('page-content');
		pageContent.style.minHeight = sidebarHeight[0].offsetHeight - sectionsToDiscount + 'px';
		//($(".sidebar").height() - ($(".header").height() + 2 * $("footer").height()))
	}
})();

// Define as configurações do dropdown (submenu) e animações.
// Para não precisar escrever em todos os butões os atributos

// var sidebarDropdown = document.querySelectorAll('.dropend');

// sidebarDropdown.forEach(dropdown => {
// 	dropdown.addEventListener('shown.bs.dropdown', function () {
// 		const dropdownBox = dropdown.querySelector('.dropdown-menu');
// 		dropdownBox.classList.add('open-dropdown');
// 	});
// 	// do something...
// });

// // MOBILE

const sidebarMobile = document.querySelector('.sidebar');
const openSidebarButton = document.querySelector('.mobile-toggle-open');
const closeSidebarButton = document.querySelectorAll('.mobile-toggle-close');

const dropdownMobile = document.querySelectorAll('.dropdown-menu');
const openDropdownButton = document.querySelectorAll('.dropdown-toggle');
const closeDropdownButton = document.querySelectorAll('.dropdown-menu__back-button');

// Open sidebar
openSidebarButton.addEventListener('click', openSidebarMobile);

function openSidebarMobile(params) {
	if (!sidebarMobile.classList.contains('sidebar-mobile--open')) {
		sidebarMobile.classList.add('sidebar-mobile--open');
	}
}

// Close sidebar
closeSidebarButton.forEach(element => {
	element.addEventListener('click', closeSidebarMobile);
});

function closeSidebarMobile(params) {
	for (let i = 0; i < dropdownMobile.length; i++) {
		const element = dropdownMobile[i];

		if (element.classList.contains('show')) {
			element.classList.remove('show');
		}
	}

	sidebarMobile.classList.remove('sidebar-mobile--open');
}

// Close dropdown
closeDropdownButton.forEach(button => {
	button.addEventListener('click', closeDropdownMobile);
});

function closeDropdownMobile() {
	for (let i = 0; i < openDropdownButton.length; i++) {
		const element = openDropdownButton[i];

		if (element.classList.contains('show')) {
			element.classList.remove('show');
			element.setAttribute('aria-expanded', false);
		}
	}
	for (let i = 0; i < dropdownMobile.length; i++) {
		const element = dropdownMobile[i];

		if (element.classList.contains('show')) {
			element.classList.remove('show');
		}
	}
}
