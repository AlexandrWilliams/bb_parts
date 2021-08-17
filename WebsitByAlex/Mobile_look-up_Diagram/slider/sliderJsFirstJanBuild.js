const slider = document.querySelector('.sliderBildDateFirstJan');
		const leftArrow = slider.querySelector('.slider__arrow_right');
		const sliderConteiner = slider.querySelector('.slider__conteiner');
		const sliderElemnts = sliderConteiner.querySelectorAll('.slider__elem-conteiner');
		const rightArrow = slider.querySelector('.slider__arrow_left');
		var counter = 0;
		function sliderRunner(direction){
			const activeSlide = sliderElemnts[counter];
			if (direction === 'R') {
				counter = (counter <= 0)?sliderElemnts.length - 1:counter - 1;
				const prevSlide = sliderElemnts[counter];
				activeSlide.classList.add('slider__elem_move');
				setTimeout(function(){
					activeSlide.classList.remove('slider__elem_move')}, 1000);
					activeSlide.classList.remove('slider__elem_active');
					activeSlide.classList.remove('slider__elem_active-r');
					prevSlide.classList.add('slider__elem_active-r');
				}else{
					const nextSlide =  activeSlide.nextElementSibling;
					activeSlide.classList.add('slider__elem_move');
					setTimeout(function(){activeSlide.classList.remove('slider__elem_move')}, 2000);
					activeSlide.classList.remove('slider__elem_active');
					activeSlide.classList.remove('slider__elem_active-r');
					(counter < (sliderElemnts.length - 1))?nextSlide.classList.add('slider__elem_active'):sliderElemnts[0].classList.add('slider__elem_active');elemActive(counter);
				}
				function elemActive(){
					if(counter < (sliderElemnts.length - 1)) {
						counter = counter + 1;
						return counter;
					}else{
						counter = 0;
						return counter;
					}
				}
			};
			leftArrow.addEventListener('click', function(){clearInterval(runSlider);
				sliderRunner();
				runSlider = setInterval(sliderRunner, 8000);
			});
			rightArrow.addEventListener('click', function(){
				clearInterval(runSlider);
				sliderRunner('R');
				runSlider = setInterval(sliderRunner, 8000);
			});
			sliderConteiner.addEventListener('mouseover', function(){
				clearInterval(runSlider);
			});
			sliderConteiner.addEventListener('mouseout', function(){
				runSlider =setInterval(sliderRunner, 8000);
			});
			var runSlider = setInterval(sliderRunner, 8000);