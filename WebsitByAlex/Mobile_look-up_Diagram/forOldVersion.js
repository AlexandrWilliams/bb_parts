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

		//main variable to make all shit work
		var imgSizes = document.querySelector(imgIdForMap);
		var map = document.querySelector(mapIdForMap);

		// Modal script code //
		(function(){

			const modalInnerContainer = `<div class="modal__container"></div>`;
			map.insertAdjacentHTML('afterend', modalInnerContainer);
			const modalContainer = document.querySelector('.modal__container');
			const conteiner = `<div class="conteiner__of-elements-under-pic"></div>`;
			modalContainer.insertAdjacentHTML('afterend', conteiner);

			const part = partsProduct.split('$'); // psefdo Data Base

			const regexHTM = /((?<=product-p\/)[A-Za-z0-9-]+|(?<=ProductCode\=)[A-Za-z0-9-]+)/g;//regex for link href
			
			const areas = [map.querySelectorAll('area')];
			
			const arrWithoutSameElem = [];

			/// Part number Organizer drawer under Main Diagrm(img)

			const altOrganize = [];

			(function organizeAreas(){
				areas.forEach( (e) => {
					e.forEach((elem) => {
						if(elem.getAttribute('alt').match(/\d+/)){
							var num = elem.getAttribute('alt').match(/\d+/);
							elem.setAttribute('idOrganize', num.input);
							altOrganize.push({id: num.input, area:elem});
						} else {
							altOrganize.push({id: 0, area:elem});
						}
					})
				})
			}());
			altOrganize.forEach(e => mapPreMake(e.area));

			function mapPreMake(elem) {	
				const idOrganize = (elem.getAttribute('idorganize')!== undefined||null)?elem.getAttribute('idorganize'):false;
				const href = elem.getAttribute('href');
				const preAlt = elem.setAttribute('alt', 'none');
				//const regexHTM = /((?<=product-p\/)[A-Za-z0-9-]+|(?<=ProductCode\=)[A-Za-z0-9-]+)/g;
						
				const hrefToAlt = (href.match(regexHTM))?makeAlt(href.match(regexHTM)):false;
				const hrefToHref = (href.length < 20)?makeAHref(href):false;
				const ifHrefNull = (!regexHTM.test(href))?elem.setAttribute('title', 'Bad Boy parts, for you Bad Boy Mower'):false;

				function makeAHref(href){
					elem.setAttribute('title', `Bad Boy parts ${href.match(regexHTM)}`);
					elem.setAttribute('href', `https://www.badboylawnmowerparts.com/ProductDetails.asp?ProductCode=${href}`);
					elem.setAttribute('alt', href);
					var objOfElem = {partNum: href, id: idOrganize};
					var checkForSameElem = arrWithoutSameElem.find(e => e.partNum === href);
					if (checkForSameElem === undefined){
						console.log(true)
						arrWithoutSameElem.push({objOfElem});
					}
				}

				function makeAlt(href) {
					//console.log(arrWithoutSameElem[].includes(href[0]))
					elem.setAttribute('alt', href[0]);
					elem.setAttribute('title', `Bad Boy parts ${href[0]}`);
					var objOfElem = {partNum: href[0], id: idOrganize};
					var checkForSameElem = arrWithoutSameElem.find(e => e.partNum === href[0]);
					if (checkForSameElem === undefined){
						console.log(true)
						arrWithoutSameElem.push(objOfElem);
					}
				}	
			};
			console.log(arrWithoutSameElem)
			arrWithoutSameElem.forEach((e) => {var partObj = findPart(e.partNum, e.id); modal_maker(partObj);});
			//sorting and deleting same id
			arrWithoutSameElem.sort(compareNumbers);
			function compareNumbers(a, b) { 
			  	return a.id - b.id;
			}
			function deleteSameElem(array){
			  for(var i = array.length - 1; i >= 0; i--){
			    var x = (i === 0)?i + 1:i - 1;
			    if(array[i].id === array[x].id){
			      array.splice(i,1);
			      console.log('work');
			    }
			  }
			}
			deleteSameElem(arrWithoutSameElem)//use after sort
			//create content under pic
			console.log(arrWithoutSameElem);
			console.log(altOrganize);
			arrWithoutSameElem.forEach((e) => {var partObj = findPart(e.partNum, e.id); makeListWithParts(partObj);})

			function makeListWithParts(e){
				//e === partObj{part, description, price, url}
				const specialSumbolPart = e.part.split('-').join('%2D');
				const numerick = (e.id === null||undefined)?'?':e.id;
				const content = `<div class="elem-under-pic">
									<div class="elem-under-pic__pic_holder">
										<img class="modal__for-quick-ref_img" src="https://www.badboylawnmowerparts.com/v/vspfiles/photos/${e.part}-2.jpg" alt="Bad Boy Mower ${e.description}" onerror="this.src='https://www.badboylawnmowerparts.com/v/popUpForDiagram/errorImg.png'">
									</div>
									<h3>${numerick}</h3>
									<p>${e.description}</p>
									<a href="${e.url}">#${e.part}</a>
									<div class="modal__addToCartForm_container">
										<form id="vCSS_mainform" method="post" name="MainForm" action="/ProductDetails.asp?ProductCode=${specialSumbolPart}" class="vol-product__form modalForm_QTY-AddToCart">  
											<div width="100%" cellpadding="0" cellspacing="0" border="0" id="v65-product-parent" class=" vol-product__top vol-product__main-details clearfix">
												<div>
													<div valign="top" class="qtyItem__container">
														<span class="vol-cartqty__text">Qty:</span>
														<div class="vol-cartqty__wrap">
															<input type="text" class="v65-productdetail-cartqty form-control" name="QTY.${e.part}" size="3" maxlength="8" value="1" title="Quantity">
														</div>

													</div>
													<div class="modalForm__element_addToCart">
														<input type="submit" id="btn_addtocart" name="btnaddtocart" onclick="return addToCart(this.form, this);" value="Add To Cart" class="vCSS_input_addtocart btn btn-primary btn-lg btn_addtocart">

															<input type="hidden" name="ReplaceCartID" value="">
															<input type="hidden" name="ProductCode" value="${e.part}">
															<input type="hidden" name="e" value="">
																		                
															<input type="hidden" name="ReturnTo" value="">
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>`;
				const conteinerForElem = document.querySelector('.conteiner__of-elements-under-pic');
				conteinerForElem.insertAdjacentHTML('beforeend', content);
			}

			function maper(e) {
				// body...
				if(e.target.parentNode.tagName !== 'DIV'){//check for div so ifts dont let go father to error
					const partNum = e.target.parentNode.getAttribute('alt');
					const checkParts = (partNum.length > 5)?part.includes(partNum):false;
					if (checkParts) {
						e.preventDefault();
						popModal(partNum);
					}
				}
			}

			function popModal(part) {
				modalContainer.querySelectorAll('.modal__for-quick-ref').forEach((elem) => {
					if (elem.classList.contains(part)) {
						/// bypass id repeat
						const specialSumbolPart = part.split('-').join('%2D');
						const volusionFormForAddToCard = `
						<form id="vCSS_mainform" method="post" name="MainForm" action="/ProductDetails.asp?ProductCode=${specialSumbolPart}" class="vol-product__form modalForm_QTY-AddToCart">  
							<div width="100%" cellpadding="0" cellspacing="0" border="0" id="v65-product-parent" class=" vol-product__top vol-product__main-details clearfix">
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

								elem.addEventListener('click', (e) => {
									if (e.target.classList.contains('modal__for-quick-ref_bg')||e.target.classList.contains('btn_addtocart')||e.target.classList.contains('modal__for-quick-ref_close-btn')) {
										(elem.querySelector('#vCSS_mainform')!== null)?elem.querySelector('#vCSS_mainform').remove():false;
										elem.classList.remove('modal__for-quick-ref_open');
										headerVolusion.style.display = '';
									}
								})
					}
				})
			}

			function findPart(e, id){
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
						id : id
					}
					return partObj;
					//modal_maker(partNum, description, price, webLinkToDescription);
				}
			};

			

				function modal_maker(partObj) {

						//partObj{part, description, price, url}
						const specialSumbolPart = partObj.part.split('-').join('%2D');

						const modalInnerCreator = `<!--  Modal  -->
								<div class="modal__for-quick-ref ${partObj.part}">
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

			//map.addEventListener('click', maper);

			//}());

			//html for PsefdoMAP
			imgSizes.insertAdjacentHTML('beforebegin', `<div id="psefdoMap" class="conteiner__of-map" style="max-width:${imgSizes.getAttribute('width')}px; max-height:${imgSizes.getAttribute('height')}px;">`);
			const psefdoMap = document.querySelector('#psefdoMap');
			psefdoMap.appendChild(imgSizes);
			psefdoMap.appendChild(map);

			/// Svg creator and new diagram effect 11/27/2019
			map.insertAdjacentHTML('afterend', `<svg class="svg__layout" style="height: 100%; width: 100%;" id="svgDrawer">Sorry, your browser does not support inline SVG.</svg>`);
			const svg = document.querySelector('#svgDrawer');

			svg.addEventListener('click', maper);

			window.addEventListener('resize', (element)=>{
				setTimeout(resizeJumpingLight, 2000);
			});
			function resizeJumpingLight(){
				var a = svg.querySelectorAll('a');
					a.forEach(e => e.remove());
					var imgSizes = document.querySelector(imgIdForMap);
					var map = document.querySelector(mapIdForMap);
					getCords();
			};
				//jumping ligth
				var trigger;
				var counter = 0;
				function arrCounter(arr){		
					return function caller() {	
						if (counter == arr.length) {timerRemove(arr[arr.length-1]);counter = 0;}
						timerAdd(arr[counter]);
						if (counter >= 1) {timerRemove(arr[counter-1]);}
						return counter++;
					}
				}
				function timerAdd(elem){
					elem.classList.add('animation');
				}
				function timerRemove(elem){
					elem.classList.remove('animation');
				}
				function stop(arr){
					clearInterval(trigger);
					timerRemove(arr[counter-1]);
				}

			//arr of map for light
			var arrForDiagram;

			function getCords(){	
				var r;//radius for circle
				const area = map.querySelectorAll('area');
				area.forEach(e => buildSVG(e.getAttribute('coords'), e.getAttribute('href'), e.getAttribute('title'), e.getAttribute('alt')));
				//build SVG
				function buildSVG(coords, link, title, alt){
					if (coords.split(',').length < 4) {
						var makeCircle = coords.split(',');
						var circle = `	<a href="${link}" title="${title}" alt="${alt}">
											<circle cx="${makeCircle[0]}" cy="${makeCircle[1]}" r="${makeCircle[2]}">
												<!--<title>${title}</title>-->
											</circle>
										</a>`;
						svg.insertAdjacentHTML('beforeend', circle);
						r = makeCircle[2];
					}
					if (coords.split(',').length > 3) {
						var polygon = `	<a href="${link}" title="${title}" alt="${alt}">
											<polygon points="${coords}">
												<!--<title>${title}</title>-->
											</polygon>
										</a>`;
						svg.insertAdjacentHTML('beforeend', polygon);
					}
				}

				svg.addEventListener('mouseover', (e) => {
					if (e.target.tagName === 'circle') {
						e.target.classList.add('hoverAnimationforCircle');
					}
				});

				//svg elem //push element to array
				arrForDiagram = [];
				const polygon = svg.querySelectorAll('polygon');
				const circle = svg.querySelectorAll('circle');
				polygon.forEach((e)=>{arrForDiagram.push(e)});
				circle.forEach((e)=>{arrForDiagram.push(e)});
					
				arrForDiagram.forEach(e => e.addEventListener('mouseout', (elem) => {removeImgFromMap(); trigger = setInterval(arrCounter(arrForDiagram), 500);}));
				arrForDiagram.forEach(e => e.addEventListener('mouseover', (elem) => {stop(arrForDiagram); setImgForHoverImg(e.parentNode.getAttribute('href'));}));
				arrForDiagram.forEach(e => e.addEventListener('mousemove', (elem) => {setCoordsForHoverImg(elem.clientX, elem.pageY)}));

				clearInterval(trigger);

				trigger =  setInterval(arrCounter(arrForDiagram), 500);
				//set hover for elem
				const animationStyleForCircle = `<style class="style_for_animation_test">
					@keyframes bounceIn-Out {
						0% {
							r: ${r}px;
						}
						50% {
							r: calc(${r}px + ${r / 2}px);
						}
						100% {
							r: ${r}px;
						}
					}

					.hoverAnimationforCircle:hover {
						animation: bounceIn-Out 1s infinite;
					}
				</style>`;
				
				var getOldStylesForAnimation = psefdoMap.querySelector('.style-sheet___for-animation-on-hover_map');
				if(getOldStylesForAnimation !== null){
					getOldStylesForAnimation.remove();
				}
				imgSizes.insertAdjacentHTML('beforebegin', animationStyleForCircle);
			};

			(function mainTimeoutForSvgCoords() {setTimeout(getCords, 2000)} ());

			

			//img on hover map
			svg.insertAdjacentHTML('afterend', '<div class="img__hover_map-parts_or_description"></div>');
			const imgHoverMapPartsOrDescription = document.querySelector('.img__hover_map-parts_or_description');

			var img = `<img src='https://www.badboylawnmowerparts.com/v/popUpForDiagram/errorImg.png' onerror="this.src='https://www.badboylawnmowerparts.com/v/popUpForDiagram/errorImg.png'">`;
				imgHoverMapPartsOrDescription.insertAdjacentHTML('beforeend', img);

			function setImgForHoverImg(elem) {
				var imgPartNum = elem.match(regexHTM) != null ?`https://www.badboylawnmowerparts.com/v/vspfiles/photos/${elem.match(regexHTM)[0]}-2.jpg`:'https://www.badboylawnmowerparts.com/v/popUpForDiagram/errorImg.png';
				imgHoverMapPartsOrDescription.querySelector('img').setAttribute('src', imgPartNum);
			}

			function setCoordsForHoverImg(x, y) {
				var screenSize = window.innerWidth;
				var conteinerOffSet = document.querySelector('.container--content').offsetTop;
				var top = psefdoMap.offsetTop;
				var left = psefdoMap.offsetLeft;
				var newX = x - (200 + left);
				var newY = y - conteinerOffSet - top;

				imgHoverMapPartsOrDescription.style.left = `${newX}px`;
				imgHoverMapPartsOrDescription.style.top = `${newY}px`;
				(screenSize > 640)?imgHoverMapPartsOrDescription.style.display = 'block':imgHoverMapPartsOrDescription.style.display = 'none';
			}
			function removeImgFromMap(){
				imgHoverMapPartsOrDescription.style.display= 'none';
			}

		}());

		
