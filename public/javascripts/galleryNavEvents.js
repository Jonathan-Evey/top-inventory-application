const galleryEvents = (() => {
	const addEvents = () => {
		let navBtns = document.querySelectorAll('.gallery-nav');
		if (navBtns.length > 0) {
			navBtns.forEach((btn) => {
				btn.addEventListener('click', (e) => {
					updateDisplay(e);
				});
			});
		}
		let itemPreviewBtns = document.querySelectorAll(
			'.btn__item-preview'
		);
		if (itemPreviewBtns.length > 0) {
			itemPreviewBtns.forEach((btn) => {
				btn.addEventListener('click', (e) => {
					openModal(e);
				});
			});
		}
	};
	const updateDisplay = (e) => {
		let navBtns = document.querySelectorAll('.gallery-nav');
		let modalBtns = document.querySelectorAll('.btn__modal');
		modalBtns.forEach((btn) => {
			if (btn.dataset.galleryView !== e.target.id) {
				btn.dataset.galleryView = e.target.id;
			}
		});
		navBtns.forEach((btn) => {
			if (e.target.id === btn.id) {
				btn.classList.add('current');
			} else {
				btn.classList.remove('current');
			}
		});
		let title = document.getElementById('gallery-title');
		let titleFormat = e.target.id.replace('-', ' ');
		title.innerText = `Gallery - ${titleFormat}`;
		let cards = document.querySelectorAll('.card__item-preview');
		cards.forEach((card) => {
			if (
				card.classList.contains(e.target.id) ||
				e.target.id === 'all'
			) {
				card.classList.remove('none');
				setTimeout(function () {
					card.classList.remove('exit');
				}, 350);
			} else {
				card.classList.add('exit');
				setTimeout(function () {
					card.classList.add('none');
				}, 350);
			}
		});
	};
	const openModal = (e) => {
		let modal = document.querySelector('.modal__item-details');
		let modalImg = document.querySelector('.modal__img');
		let modalImgSibling = modalImg.nextSibling;
		let modalTitle = modalImgSibling.children[0];
		let modalDetails = modalImgSibling.children[1];
		let imgParent = e.target.children[0];
		let imgTitle = imgParent.nextSibling.innerText.toString();
		let imgDetails = imgParent.children[1].innerText.toString();
		let closeModalBtn = document.querySelector(
			'.btn__modal-close'
		);
		closeModalBtn.addEventListener('click', closeModal, {
			once: true,
		});
		modalImg.src = imgParent.children[0].currentSrc;
		modalImg.id = `${e.target.parentElement.id}`;
		modalTitle.innerText = imgTitle;
		modalDetails.innerText = imgDetails;
		modal.classList.remove('open');
		modal.showModal();
		modal.classList.add('open');
		let nextBtn = document.getElementById('btn-next');
		nextBtn.removeEventListener('click', nextImg, false);
		nextBtn.addEventListener('click', nextImg);
		let previousBtn = document.getElementById('btn-previous');
		previousBtn.removeEventListener('click', previousImg, false);
		previousBtn.addEventListener('click', previousImg);
	};

	const closeModal = () => {
		let modal = document.querySelector('.modal__item-details');
		modal.close();
	};

	const nextImg = () => {
		let currentImg = document.querySelector('.modal__img');
		let nextBtn = document.getElementById('btn-next');
		let currentGalleryImgs =
			nextBtn.dataset.galleryView === 'all'
				? document.querySelectorAll('.card__item-preview')
				: document.querySelectorAll(
						`.${nextBtn.dataset.galleryView}`
				  );

		let nodeArrey = [...currentGalleryImgs];
		let currentImgIndex = nodeArrey.findIndex(
			(img) => img.id === currentImg.id
		);
		let nextImg;
		let nextTitleText;
		let nextDiscriptionText;
		let nextImgIndex;
		if (currentImgIndex === nodeArrey.length - 1) {
			nextImgIndex = 0;
			nextImg = currentGalleryImgs[0].children[0];
			nextImg = nextImg.children[0];
			nextTitleText = nextImg.nextSibling.innerText;
			nextTitleText = nextTitleText.toString();
			if (nextImg.children[1]) {
				nextDiscriptionText = nextImg.children[1].innerText;
				nextDiscriptionText = nextDiscriptionText.toString();
			}
			nextImg = nextImg.children[0];
		} else {
			nextImgIndex = currentImgIndex + 1;
			nextImg =
				currentGalleryImgs[currentImgIndex + 1].children[0];
			nextImg = nextImg.children[0];
			nextTitleText = nextImg.nextSibling.innerText;
			nextTitleText = nextTitleText.toString();
			if (nextImg.children[1]) {
				nextDiscriptionText = nextImg.children[1].innerText;
				nextDiscriptionText = nextDiscriptionText.toString();
			}
			nextImg = nextImg.children[0];
		}
		let modal = document.querySelector('.modal__item-details');
		let currentContainer = currentImg.parentElement;
		let nextContainerNode = document.createElement('div');
		let nextImgNode = document.createElement('img');
		nextImgNode.src = nextImg.src;
		nextImgNode.id = currentGalleryImgs[nextImgIndex].id;
		nextImgNode.classList.add('modal__img');
		nextContainerNode.appendChild(nextImgNode);
		let divNode = document.createElement('div');
		let nextTitleNode = document.createElement('h1');
		nextTitleNode.innerText = nextTitleText;
		let nextDiscriptionNode = document.createElement('h1');
		nextDiscriptionNode.innerText = nextDiscriptionText;
		divNode.appendChild(nextTitleNode);
		divNode.appendChild(nextDiscriptionNode);
		nextContainerNode.appendChild(divNode);
		nextContainerNode.classList.add('enter-next');
		modal.insertBefore(nextContainerNode, currentContainer);
		currentContainer.classList.add('exit-next');
		setTimeout(() => {
			nextContainerNode.classList.remove('enter-next');
		}, 5);
		setTimeout(() => {
			modal.removeChild(currentContainer);
		}, 250);
	};
	const previousImg = () => {
		let currentImg = document.querySelector('.modal__img');
		let previousBtn = document.getElementById('btn-previous');
		let currentGalleryImgs =
			previousBtn.dataset.galleryView === 'all'
				? document.querySelectorAll('.card__item-preview')
				: document.querySelectorAll(
						`.${previousBtn.dataset.galleryView}`
				  );
		let nodeArrey = [...currentGalleryImgs];
		let currentImgIndex = nodeArrey.findIndex(
			(img) => img.id === currentImg.id
		);
		let nextImg;
		let nextTitleText;
		let nextDiscriptionText;
		let nextImgIndex;
		if (currentImgIndex === 0) {
			nextImgIndex = nodeArrey.length - 1;
			nextImg =
				currentGalleryImgs[nodeArrey.length - 1].children[0];
			nextImg = nextImg.children[0];
			nextTitleText = nextImg.nextSibling.innerText;
			nextTitleText = nextTitleText.toString();
			if (nextImg.children[1]) {
				nextDiscriptionText = nextImg.children[1].innerText;
				nextDiscriptionText = nextDiscriptionText.toString();
			}
			nextImg = nextImg.children[0];
		} else {
			nextImgIndex = currentImgIndex - 1;
			nextImg =
				currentGalleryImgs[currentImgIndex - 1].children[0];
			nextImg = nextImg.children[0];
			nextTitleText = nextImg.nextSibling.innerText;
			nextTitleText = nextTitleText.toString();
			if (nextImg.children[1]) {
				nextDiscriptionText = nextImg.children[1].innerText;
				nextDiscriptionText = nextDiscriptionText.toString();
			}
			nextImg = nextImg.children[0];
		}
		let modal = document.querySelector('.modal__item-details');
		let currentContainer = currentImg.parentElement;
		let nextContainerNode = document.createElement('div');
		let nextImgNode = document.createElement('img');
		nextImgNode.src = nextImg.src;
		nextImgNode.id = currentGalleryImgs[nextImgIndex].id;
		nextImgNode.classList.add('modal__img');
		nextContainerNode.appendChild(nextImgNode);
		let divNode = document.createElement('div');
		let nextTitleNode = document.createElement('h1');
		nextTitleNode.innerText = nextTitleText;
		let nextDiscriptionNode = document.createElement('h1');
		nextDiscriptionNode.innerText = nextDiscriptionText;
		divNode.appendChild(nextTitleNode);
		divNode.appendChild(nextDiscriptionNode);
		nextContainerNode.appendChild(divNode);
		nextContainerNode.classList.add('enter-previous');
		modal.insertBefore(nextContainerNode, currentContainer);
		currentContainer.classList.add('exit-previous');
		setTimeout(() => {
			nextContainerNode.classList.remove('enter-previous');
		}, 5);
		setTimeout(() => {
			modal.removeChild(currentContainer);
		}, 250);
	};
	addEvents();
})();

export default galleryEvents;