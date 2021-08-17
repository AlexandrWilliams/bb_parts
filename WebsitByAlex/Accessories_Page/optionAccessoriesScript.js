// Volusion for Cart Code //
		var global_Config_StoreFolderName = '//cdn3.volusion.com/mkrpe.efghr/';
		var global_Config_ProductPhotosFolder = 'v/vspfiles/photos';
		var global_Current_ProductCode = '00-0000-00';
		var global_SEOImage = '/PhotoDetails.asp';
		var global_URL_Encode_Current_ProductCode = '000%2D0000%2D00';
		var global_src_part_Config_ProductPhotosFolder = 'v%2Fvspfiles%2Fphotos';
		var global_ImageSeed = '';
			if (global_ImageSeed) {
				global_ImageSeed = '?' + global_ImageSeed;
			};

		var global_Config_EnablePhotosPopup = true;
		var global_SEOImage_PhotoGallery = '/PhotoGallery.asp';
		//////

	/// inject HTML
	const modalContainer = document.querySelector('.modal__container');
	
	modalContainer.insertAdjacentHTML('afterend', `<div class="main-options__conteiner">
		<div class="check-box__wrap">
			<div class="check-box__conteiner">
				<div class="check-box__overlay">
					<span class="check-box__overlay_load"></span>
					<span class="check-box__overlay_text">Loading</span>
				</div>
				<div class="check-box__mobile-overlay"></div>
				<button class="check-box__mobile-button">
					<img src="https://badboylawnmowerparts.com/v/WebsiteByAlex/optionAndAccessories/img/menu_icon.png" alt="menu_icon">
				</button>
				<div class="check-box__fixed_deactive">
					<div class="options__category" category="uncheckAll">
						<h3>Select All</h3>
					</div>
				</div>
			</div>
			<span class="check-box__button-up">
				<img src="https://badboylawnmowerparts.com/v/WebsiteByAlex/optionAndAccessories/img/goUp64.png">
			</span>
		</div>
		<div class="accessories__conteiner conteiner__of-elements-under-pic"></div>
	</div>`);

	const part = partsProduct.split('$');

	const imgIdForMap = '.modal__container';
	
	const categories = Object.keys(moverOptionsObj);
	const checkBoxConteiner = document.querySelector('.check-box__fixed_deactive');
	const accessoriesConteiner = document.querySelector('.accessories__conteiner');

	function buildOptions(catName, options){
		let catClass = catName.split(' ');
		catClass = "option-name__" + catClass[0];
		let categoryHtml = `<div class="options__category ${catClass}" category="${catName}"><h3>${catName}</h3><span></span></div>`;
		checkBoxConteiner.insertAdjacentHTML("beforeend", categoryHtml);

		Array.isArray(options)?optionsArr():optionsObj();

		function optionsArr(){
			options.forEach((e) => {
				let fitOnly = null;
				let partObj = findPart(e);
				(partObj !== undefined)?makeListWithParts(partObj, accessoriesConteiner, catName, fitOnly):errorPart(e, catName);
			})
		}
		function optionsObj(){
			let sizes = Object.keys(options);
			sizes.forEach((key) => {
				options[key].forEach((e) => {
					let fitOnly = `<h4 class="elem-under-pic__content_fit-only">${key}</h4>`;
					let insertPlace = document.querySelector(`.${catClass}`);
					let partObj = findPart(e);
					(partObj !== undefined)?makeListWithParts(partObj, accessoriesConteiner, catName, fitOnly):errorPart(e, catName);
				})
			})
		}	
	}

	function errorPart(partNum, partName){
		const content = ` <div class="elem-under-pic show__category_animation" category="${partName}">
		<h4 class="elem-under-pic__error-message" >${partName} ${partNum} part can not be found in our date base!</h4>
		<a class="elem-under-pic__error-message_link" href="https://www.badboylawnmowerparts.com/Articles.asp?ID=259">Please contact us for any question about ${partNum}.</a>
		<a class="elem-under-pic__error-message_link" href="https://www.badboylawnmowerparts.com/Articles.asp?ID=259">Click here for Contact Form.</a>`;
		accessoriesConteiner.insertAdjacentHTML('beforeend', content);
	}

	function makeListWithParts(e, elemClass, category, fitOnly){
				//e === partObj{part, description, price, url}
				const regexDescription = new RegExp(`^${e.part + ' - Bad Boy Mowers '}`, 'gi');
				// const descriptionEarese = e.description.match(/(?<=)/)
				// console.log(e.description, descriptionEarese);
				const specialSumbolPart = e.part.split('-').join('%2D');
				const fitHtml = (fitOnly === null||undefined)?' ':fitOnly;
				const content = `<div class="elem-under-pic show__category_animation" category="${category}">
									<div class="elem-under-pic__pic_holder">
										<img class="modal__for-quick-ref_img" src="https://www.badboylawnmowerparts.com/v/vspfiles/photos/${e.part}-2.jpg" alt="Bad Boy Mower ${e.description}" onerror="this.src='https://www.badboylawnmowerparts.com/v/popUpForDiagram/errorImg.png'">
									</div>
									<p class="elem-under-pic__content_price">${e.price}</p>
									<div class="elem-under-pic__rigth-conteiner">
										<div class="elem-under-pic__content">
											${fitHtml}
											<p class="elem-under-pic__content_description">${e.description.replace(regexDescription, '')}</p>
											<!--<a href="${e.url}">#${e.part}</a>-->
										</div>
									</div>
									<button class="btn__call-modal_under-pic" partnum="${e.part}">${e.part}</button>
								</div>`;
				elemClass.insertAdjacentHTML('beforeend', content);
			}

	function findPart(e){
		if (part.includes(e)) {
				//* modal content*//
			const webLinkToDescription = `https://www.badboylawnmowerparts.com/ProductDetails.asp?ProductCode=${e}`;
			const partNum = e;
			const description = part[part.indexOf(e) + 1];
			const price = `$${part[part.indexOf(e) + 2]}`;
				//*end*//
			const partObj = {
				part : partNum,
				description : description,
				price : price,
				url : webLinkToDescription,
			}
			modal_maker(partObj);
			return partObj;
		}
	};
	//CHECK BOX Start
	checkBoxConteiner.addEventListener('click', triggerCheckBox);
	function triggerCheckBox(e){
		(e.target.classList.contains('options__category'))?checkBox(e.target):checkBox(e.target.parentNode);
	}
	let activeCategoryArr = [];
	function checkBox(checkItem){
		let overlayProccessScreen = document.querySelector('.check-box__overlay');
		overlayProccessScreen.classList.add('check-box__proccesing');
		let categoryName = checkItem.getAttribute('category');
		
		if(categoryName !== null){
			if(checkItem.classList.contains('check-box__active')) {
				for(let i = 0; i < activeCategoryArr.length; i++){ 
				    if (activeCategoryArr[i] === categoryName) { 
				        activeCategoryArr.splice(i, 1); 
				        i--;
				    }
				}
			} else if (checkItem.getAttribute('category') === 'uncheckAll'){
				activeCategoryArr = [];
				let activeCheckBox = checkBoxConteiner.querySelectorAll('.check-box__active');
				activeCheckBox.forEach((e) => {
					e.classList.remove('check-box__active');
				});
			} else {
				activeCategoryArr.push(categoryName);
			}

			(checkItem.getAttribute('category') !== 'uncheckAll')?checkItem.classList.toggle('check-box__active'):false;

			showActive(categoryName);

			let myVar = setTimeout(myTimer, 1500);
			function myTimer() {
				overlayProccessScreen.classList.remove('check-box__proccesing');	
			}

			
		} 
		return;

		function showActive(category){


			let accesories = accessoriesConteiner.querySelectorAll('.elem-under-pic');
			if (activeCategoryArr.length === 0){
				accesories.forEach((elem)=>{
					elem.classList.remove('hide__category', 'hide__category_animation','show__category_animation');
					elem.classList.add('show__category_animation');
				})
			} else if (activeCategoryArr.length > 0) {
				activeCategoryArr.forEach((e)=>{
					accesories.forEach((elem)=>{
						if(activeCategoryArr.find(checkForActive)){
							if(elem.classList.contains('hide__category')) {
								elem.classList.remove('hide__category', 'hide__category_animation');
								elem.classList.add('show__category_animation');
							};
						} else {
							///Animation timer bafore disapier
							elem.classList.remove('show__category_animation');
							elem.classList.add('hide__category_animation');
							let myVar = setTimeout(myTimer, 1500);
							function myTimer() {
							  elem.classList.add('hide__category');
							}
							
						}
						function checkForActive(element){
							return element === elem.getAttribute('category');
						};
					})
				})
			} else if (category === 'uncheckAll') {
				accesories.forEach(e => e.classList.remove('hide__category', 'hide__category_animation'));
			}

			getOffSetOfMainConteiner();
		}
	}
	//CHECK BOX END
	///Off Set And Return to top point function
	function getOffSetOfMainConteiner(){
		let conteinerY = accessoriesConteiner.offsetTop;
		var rect = accessoriesConteiner.getBoundingClientRect();

		var position = {
		  top: rect.top + window.pageYOffset - 150,
		  left: rect.left + window.pageXOffset,
		  behavior: 'smooth'
		};

		window.scrollTo(position);
	}

	///Modal Create
	//decoder for partNum to class
			function decoder(str){
				var res = str.replace(/\d/gi, function (x) {
				    if(x == 0){
				      x = 'p';
				    } else if(x == 1){
				      x = 'q';
				    } else if(x == 2){
				      x = 'w';
				    } else if(x == 3){
				      x = 'e';
				    } else if(x == 4){
				      x = 'r';
				    } else if(x == 5){
				      x = 't';
				    } else if(x == 6){
				      x = 'y';
				    } else if(x == 7){
				      x = 'u';
				    } else if(x == 8){
				      x = 'i';
				    } else if(x == 9){
				      x = 'o';
				    }
				    return x;
			  	}); 
			  	return res;
			}

				function modal_maker(partObj) {
						//partObj{part, description, price, url}
						const specialSumbolPart = partObj.part.split('-').join('%2D');
						const modalInnerCreator = `<!--  Modal  -->
								<div class="modal__for-quick-ref ${decoder(partObj.part)}">
									<div class="modal__for-quick-ref_bg">	
										<div class="modal__for-quick-ref_content">
											<div class="modal__for-quick-ref_header">
												<span class="modal__for-quick-ref_span modal__for-quick-ref_part-number">Item: # ${partObj.part}</span>
												<span class="modal__for-quick-ref_span modal__for-quick-ref_description">Name: ${partObj.description}</span>
											</div>

											<div class="border-bottom-line__for-header-modal"></div>

											<div class="modal__for-quick-ref_container">
												<img class="modal__for-quick-ref_img" src="https://www.badboylawnmowerparts.com/v/vspfiles/photos/${partObj.part}-2.jpg" alt="Bad Boy Mower ${partObj.description}" onerror="this.src='https://www.badboylawnmowerparts.com/v/popUpForDiagram/errorImg.png'">

												<div style="border-left: 2px solid #fd6922;"></div>

												<div class="about_part">
															
													<span class="modal__for-quick-ref_span modal__for-quick-ref_price">Price: <span>${partObj.price}</span></span>
															
													<div class="modal__addToCartForm_container">
															
										    		</div>

								            		<a href="${partObj.url}" class="modal__for-quick-ref_span modal__for-quick-ref_link">Item Details</a>

												</div>
											</div>
											<div class="modal__for-quick-ref_span modal__for-quick-ref_close-btn"></div>
											<div class="modal__for-quick-ref_question-about-product">
												<a href="https://www.badboylawnmowerparts.com/Articles.asp?ID=259" alt="contact Us">
													<h4>Ask A Question About This Product</h4>
												</a>
											</div>
										</div>
									</div>
								</div>`;
					addToDOM(modalInnerCreator);
				};

				function addToDOM (e) {
						modalContainer.insertAdjacentHTML('beforeend', e);
				};

				categories.forEach((e) => {
		buildOptions(e, moverOptionsObj[e]);
	});
	
				///Modal Pop Up

				const conteinerForElem = document.querySelector('.conteiner__of-elements-under-pic');
				conteinerForElem.addEventListener('click', function(e){
					if (e.target.tagName === 'BUTTON') {
						e.preventDefault();
						popModal(e.target.getAttribute('partnum'));
					};
				});

				function popModal(part) {
				const checkForForm = document.querySelector('#vCSS_mainform');
				//check for PC parts look up version
				if (checkForForm === null) {
					var selector = ".modal__for-quick-ref." + decoder(part);
					var modalContainerArray = modalContainer.querySelector(selector);
					var elem = modalContainerArray;
					if (elem.classList.contains(decoder(part))) {
						/// bypass id repeat
						const specialSumbolPart = part.split('-').join('%2D');
						const volusionFormForAddToCard = `
						<form id="vCSS_mainform" method="post" name="MainForm" action="/ProductDetails.asp?ProductCode=${specialSumbolPart}" class="vol-product__form modalForm_QTY-AddToCart">  
							<div width="100%" cellpadding="0" cellspacing="0" border="0" id="v65-product-parent" class="vol-product__top vol-product__main-details clearfix">
								<div>
									<div valign="top" class="qtyItem__container">
									    <span class="vol-cartqty__text">Qty:</span>
									    <div class="vol-cartqty__wrap">
									    	<input type="text" class="v65-productdetail-cartqty form-control" name="QTY.${part}" size="3" maxlength="8" value="1" title="Quantity">
										</div>

									</div>
									<div class="modalForm__element_addToCart">
										<input type="submit" id="btn_addtocart" name="btnaddtocart" onclick="return addToCart(this.form, this);" value="Add To Cart" class="vCSS_input_addtocart btn btn-primary btn-lg btn_addtocart">

										<input type="hidden" name="ReplaceCartID" value="">
										<input type="hidden" name="ProductCode" value="${part}">
										<input type="hidden" name="e" value="">
																							                
										<input type="hidden" name="ReturnTo" value="">
									</div>
								</div>
							</div>
						</form>`;
						elem.querySelector('.modal__addToCartForm_container').insertAdjacentHTML('beforeend', volusionFormForAddToCard);
						//open popUp
						elem.classList.add('modal__for-quick-ref_open');

								//Input Value
								const formValue = elem.querySelector('.form-control');
								formValue.value = 1;

								//listeners for Active Pop Up
								const modalForQuickRefImg = elem.querySelector('.modal__for-quick-ref_img');

								//Hide Header
								const headerVolusion = document.querySelector('header');
								headerVolusion.style.display = 'none';

								elem.addEventListener('click', function(e){
									if (e.target.classList.contains('modal__for-quick-ref_bg')||e.target.classList.contains('btn_addtocart')||e.target.classList.contains('modal__for-quick-ref_close-btn')) {
										(elem.querySelector('#vCSS_mainform')!== null)?elem.querySelector('#vCSS_mainform').remove():false;
										elem.classList.remove('modal__for-quick-ref_open');
										headerVolusion.style.display = '';
									}
								})
					}
				} else {
					document.location.href = `https://www.badboylawnmowerparts.com/ProductDetails.asp?ProductCode=${part}`;
				}
			}

			const headerVolusion = document.querySelector('header');
			let mobileCategoryButton = document.querySelector('.check-box__mobile-button');
			let mobileCategoryOverlay = document.querySelector('.check-box__mobile-overlay');
			mobileCategoryButton.addEventListener('click', showCategoryOptions);
			function showCategoryOptions(e){
				if(e.target.classList.contains('check-box__mobile-button') || e.target.parentNode.classList.contains('check-box__mobile-button')) {
					checkBoxConteiner.classList.add('check-box__mobile_active');
					mobileCategoryButton.style.display = 'none';
					//scrooll To accessories box
					getOffSetOfMainConteiner();
					//Set Height for chack-box__conteiner
					document.querySelector('.check-box__conteiner').style.height = `${checkBoxConteiner.offsetHeight}px`;

					mobileCategoryOverlay.classList.add('check-box__mobile-overlay_active');
					//Hide Header
					
					headerVolusion.style.display = 'none';


				}
			}
			mobileCategoryOverlay.addEventListener('click', (e)=>{
				if(e.target.classList.contains('check-box__mobile-overlay_active')){
					mobileCategoryButton.removeAttribute('style');
					document.querySelector('.check-box__conteiner').style.height = ``;
					checkBoxConteiner.classList.remove('check-box__mobile_active');
					mobileCategoryOverlay.classList.remove('check-box__mobile-overlay_active');
					headerVolusion.style.display = '';
				}
			})

			let buttonUpSpan = document.querySelector('.check-box__button-up');
			buttonUpSpan.addEventListener('click', ()=>{
				getOffSetOfMainConteiner();
			})

			window.addEventListener('scroll', scrollListener);

			function scrollListener(){
				mobileButtonStick();
				buttonUpCheck();
			}

			function mobileButtonStick(){
				//modal__for-quick-ref_open
				let checkForModal = document.querySelector('.modal__for-quick-ref_open');
				if (window.pageYOffset >= 315 && window.pageYOffset <= accessoriesConteiner.offsetHeight && !mobileCategoryOverlay.classList.contains('check-box__mobile-overlay_active') && checkForModal == undefined) {
					mobileCategoryButton.classList.add("check-box__mobile-button_sticky")
				} else {
					mobileCategoryButton.classList.remove("check-box__mobile-button_sticky");
				}
			}

			function buttonUpCheck(){
				if (window.pageYOffset >= 900 && window.pageYOffset <= accessoriesConteiner.offsetHeight && !mobileCategoryOverlay.classList.contains('check-box__mobile-overlay_active')) {
					buttonUpSpan.classList.add("check-box__button-up_active")
				} else {
					buttonUpSpan.classList.remove("check-box__button-up_active");
				}
			}