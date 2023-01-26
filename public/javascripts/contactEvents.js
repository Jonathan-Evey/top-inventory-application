const contactEvents = (() => {
	const modal = document.querySelector('.modal__contact');
	if (modal) {
		modal.classList.remove('open');
		modal.showModal();
		modal.classList.add('open');
		setTimeout(() => {
			modal.classList.remove('open');
		}, 4750);
		setTimeout(() => {
			modal.close();
		}, 5000);
	} else {
		return;
	}
})();

export default contactEvents;
