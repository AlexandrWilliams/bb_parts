let regexForHrefCat = /-s\/\d/g;
let bootStrapId = document.querySelector('.img_for_bootstrap');
const funcOnAndWork = true;
//location.href.match(regexForHref);
if (funcOnAndWork && (bootStrapId != undefined || bootStrapId != null)) {
	let kidOfMainBlock = document.querySelector('#slider__block')
	if (kidOfMainBlock === null || kidOfMainBlock === undefined) {
		kidOfMainBlock = document.querySelector('.phone_info_about_slider');
	}
	const styleElements = kidOfMainBlock.parentNode.querySelectorAll('link');
	const regexHttp = /^http:\/\//g;
	styleElements.forEach(function(elem){
		linkHref = elem.getAttribute('href').toLowerCase().replace(regexHttp, 'https://');
		elem.setAttribute('href', linkHref)
	})
	const scriptElements = kidOfMainBlock.parentNode.querySelectorAll('script');
	scriptElements.forEach(function(elem){
		let linkSrc = elem.getAttribute('src').toLowerCase().replace(regexHttp, 'https://');
		elem.setAttribute('src', linkSrc)
	})
	///slider Fix
	const slider = kidOfMainBlock.parentNode.querySelector('.carousel');
	const arrowPrevios = slider.querySelector('.carousel-control.left');
	const arrowNext = slider.querySelector('.carousel-control.right');
	arrowPrevios.addEventListener('click', (e) => {
		e.preventDefault();
		if (e.target.classList.contains('arrow_slider')) {
			let activeSlide = slider.querySelector('.item.active');
			let previousSlide = activeSlide.previousElementSibling;
			if (previousSlide == null) {
				let listOfAllSlides = slider.querySelectorAll('.item');
				slideBack(activeSlide, listOfAllSlides[listOfAllSlides.length - 1]);
			} else {
				slideBack(activeSlide, previousSlide);
			}
		}
	})
	arrowNext.addEventListener('click', (e) => {
		e.preventDefault();
		if (e.target.classList.contains('arrow_slider')) {
			let activeSlide = slider.querySelector('.item.active');
			let nextSlide = activeSlide.nextElementSibling;
			if (nextSlide == null) {
				let listOfAllSlides = slider.querySelectorAll('.item');
				slideBack(activeSlide, listOfAllSlides[0]);
			} else {
				slideBack(activeSlide, nextSlide);
			}
		}
	})
	function slideBack(activeElem, nextElem){
		activeElem.classList.remove('active');
		nextElem.classList.add('active');
	}

}