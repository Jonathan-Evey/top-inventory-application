const mobileNav = (() => {
	const addEvents = () => {
		let btnToggleNav = document.getElementById(
			'btn-main-nav-toggle'
		);
		btnToggleNav.addEventListener('click', toggleNav);
	};

	const toggleNav = () => {
		let navBar = document.querySelector('.nav__main');
		let body = document.getElementsByTagName('body');
		if (navBar.classList.contains('open')) {
			navBar.classList.remove('open');
			body[0].classList.remove('no-scroll');
		} else {
			navBar.classList.add('open');
			body[0].classList.add('no-scroll');
		}
	};
	addEvents();
})();

export default mobileNav;
