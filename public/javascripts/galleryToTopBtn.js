const toTopBtn = (() => {
	const btn = document.querySelector('.btn__back-to-top');
	const galleryNavBar = document.querySelector('.nav__gallery');
	if (galleryNavBar) {
		const galleryNavBarObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log('no show');
						btn.classList.remove('show');
					} else {
						console.log('show');
						btn.classList.add('show');
					}
				});
			}
		);
		galleryNavBarObserver.observe(galleryNavBar);
	}
})();

export default toTopBtn;
