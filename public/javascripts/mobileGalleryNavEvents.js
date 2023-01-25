const mobileFilter = (() => {
	const addEvents = () => {
		let btnToggleFilter = document.getElementById(
			'btn-gallery-filter-toggle'
		);
		if (btnToggleFilter) {
			btnToggleFilter.addEventListener('click', toggleFilter);
			addObserver();
		}
	};

	const toggleFilter = () => {
		let btnToggleFilter = document.getElementById(
			'btn-gallery-filter-toggle'
		);
		let navBar = document.querySelector('.nav__gallery');
		navBar = navBar.children[1];
		if (navBar.classList.contains('open')) {
			btnToggleFilter.classList.remove('open');
			navBar.classList.remove('open');
			navBar.classList.remove('active');
		} else {
			btnToggleFilter.classList.add('open');
			navBar.classList.add('open');
			setTimeout(() => {
				navBar.classList.add('active');
			}, 250);
		}
	};
	const addObserver = () => {
		let navBar = document.querySelector('.nav__gallery');
		let navBtn = navBar.children[0];
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) {
						navBtn.classList.remove('open');
						navBar.children[1].classList.remove('open');
						navBar.children[1].classList.remove('active');
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
