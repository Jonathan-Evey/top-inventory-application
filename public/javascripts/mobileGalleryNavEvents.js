const mobileFilter = (() => {
	const addEvents = () => {
		let btnToggleFilter = document.getElementById(
			'btn-gallery-filter-toggle'
		);
		btnToggleFilter.addEventListener('click', toggleFilter);
		addObserver();
	};

	const toggleFilter = () => {
		let navBar = document.querySelector('.nav__gallery');
		navBar = navBar.children[0];
		if (navBar.classList.contains('open')) {
			navBar.classList.remove('open');
			navBar.classList.remove('active');
		} else {
			navBar.classList.add('open');
			setTimeout(() => {
				navBar.classList.add('active');
			}, 250);
		}
	};
	const addObserver = () => {
		let navBar = document.querySelector('.nav__gallery');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) {
						navBar.children[0].classList.remove('open');
						navBar.children[0].classList.remove('active');
					}
				});
			},
			{
				rootMargin: '15%',
			}
		);
		observer.observe(navBar);
	};
	addEvents();
})();

export default mobileFilter;
