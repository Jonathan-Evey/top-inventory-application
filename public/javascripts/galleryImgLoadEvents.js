const galleryImgs = (() => {
	const imgs = document.querySelectorAll('.gallery-img');
	if (imgs) {
		imgs.forEach((img) => {
			const loaded = () => {
				const imgParrent = img.parentElement;
				const imgPlaceholder = imgParrent.firstChild;
				let removedImg =
					imgParrent.removeChild(imgPlaceholder);
			};

			if (img.complete) {
				loaded(img);
			} else {
				img.addEventListener('load', loaded);
			}
		});
	}
})();

export default galleryImgs;
