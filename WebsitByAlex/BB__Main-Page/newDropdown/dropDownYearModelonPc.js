(function(){const myDropDownForm = document.forms['dropDownFormYearModel'];
		myDropDownForm['model'].disabled = true;
		const yearModelObj = {
			'-Year-': [{
				name:'-Model-',
				link:'#'
			}],
			2007 :[
				{
					name:'-Model-',
					link : 'https://www.badboylawnmowerparts.com/2007-BAD-BOY-MOWER-PARTS-s/2359.htm'
				},
				{
					name:'AOS',
				 	link: 'https://www.badboylawnmowerparts.com/BAD-BOY-AOS-s/2934.htm'
				}, 
				{
					name:'DIESEL',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-DIESEL-s/2935.htm'
				},
				{
					name:'PUP',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-PUP-s/2936.htm'
				},
				{
					name:'ZT',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-ZT-s/2937.htm'
				}
			],
			2008 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/2008-BAD-BOY-MOWER-PARTS-s/2358.htm'
				},
				{
					name:'AOS',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-AOS-s/3006.htm'
				},
				{
					name:'DIESEL',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-DIESEL-s/3007.htm'
				},
				{
					name:'PUP & LIGHTNING',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-PUP-LIGHTNING-s/3008.htm'
				},
				{
					name:'ZT',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-ZT-s/3009.htm'
				}
			],
			2009 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/2009-BAD-BOY-MOWER-PARTS-s/2357.htm'
				},
				{
					name:'AOS',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-AOS-s/3078.htm'
				},
				{
					name:'DIESEL',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-DIESEL-s/3079.htm'
				},
				{
					name:'PUP & LIGHTNING',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-PUP-LIGHTNING-s/3080.htm'
				},
				{
					name:'ZT',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-ZT-s/3081.htm'
				}
			],
			2010 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/2010-BAD-BOY-MOWER-PARTS-s/2356.htm'
				},
				{
					name:'AOS',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-AOS-s/3151.htm'
				},
				{
					name:'AOS DIESEL',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-AOS-DIESEL-s/3152.htm'
				},
				{
					name:'COMPACT DIESEL',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-COMPACT-DIESEL-s/3153.htm'
				},
				{
					name:'CZT',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-CZT-s/3154.htm'
				},
				{
					name:'MZ',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-MZ-s/3155.htm'
				},
				{
					name:'OUTLAW',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-s/3156.htm'
				},
				{
					name:'PUP & LIGHTNING',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-PUP-LIGHTNING-s/3157.htm'
				},
				{
					name:'ZT',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-ZT-s/3158.htm'
				}
			],
			2011 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/2011-BAD-BOY-MOWER-PARTS-s/2355.htm'
				},
				{
					name:'CZT',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-CZT-s/3287.htm'
				},
				{
					name:'DIESEL',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-DIESEL-s/3288.htm'
				},
				{
					name:'MZ',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-MZ-s/3290.htm'
				},
				{
					name:'OUTLAW & EXTREME',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-EXTREME-s/3291.htm'
				},
				{
					name:'PUP & LIGHTNING',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-PUP-LIGHTNING-s/3289.htm'
				},
				{
					name:'ZT',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-ZT-s/3292.htm'
				}
			],
			2012 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/2012-BAD-BOY-MOWER-PARTS-s/2354.htm'
				},
				{
					name:'CZT ELITE',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-CZT-ELITE-s/3362.htm'
				},
				{
					name:'DIESEL',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-DIESEL-s/3368.htm'
				},
				{
					name:'MZ',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-MZ-s/3369.htm'
				},
				{
					name:'OUTLAW & EXTREME',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-EXTREME-s/3370.htm'
				},
				{
					name:'OUTLAW XP',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-XP-s/3372.htm'
				},
				{
					name:'STAND-ON',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-STAND-ON-s/3371.htm'
				},
				{
					name:'ZT ELITE',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-ZT-ELITE-s/3373.htm'
				}
			],
			2013 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/2013-BAD-BOY-MOWER-PARTS-s/2353.htm'
				},
				{
					name:'CZT ELITE',
					link:'https://www.badboylawnmowerparts.com/category-s/3629.htm'
				},
				{
					name:'DIESEL',
					link:'https://www.badboylawnmowerparts.com/category-s/3630.htm'
				},
				{
					name:'MZ',
					link:'https://www.badboylawnmowerparts.com/category-s/3631.htm'
				},
				{
					name:'MZ MAGNUM',
					link:'https://www.badboylawnmowerparts.com/category-s/3632.htm'
				},
				{
					name:'OUTLAW & EXTREME',
					link:'https://www.badboylawnmowerparts.com/category-s/3633.htm'
				},
				{
					name:'OUTLAW XP',
					link:'https://www.badboylawnmowerparts.com/category-s/3635.htm'
				},
				{
					name:'STAND-ON',
					link:'https://www.badboylawnmowerparts.com/category-s/3634.htm'
				},
				{
					name:'ZT ELITE',
					link:'https://www.badboylawnmowerparts.com/category-s/3636.htm'
				}
			],
			2014 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/2014-BAD-BOY-MOWER-PARTS-s/2352.htm'
				},
				{
					name:'CZT ELITE',
					link:'https://www.badboylawnmowerparts.com/category-s/3621.htm'
				},
				{
					name:'DIESEL',
					link:'https://www.badboylawnmowerparts.com/category-s/3622.htm'
				},
				{
					name:'MZ',
					link:'https://www.badboylawnmowerparts.com/category-s/3623.htm'
				},
				{
					name:'MZ MAGNUM',
					link:'https://www.badboylawnmowerparts.com/category-s/3624.htm'
				},
				{
					name:'OUTLAW & EXTREME',
					link:'https://www.badboylawnmowerparts.com/category-s/3625.htm'
				},
				{
					name:'OUTLAW XP',
					link:'https://www.badboylawnmowerparts.com/category-s/3627.htm'
				},
				{
					name:'STAND-ON',
					link:'https://www.badboylawnmowerparts.com/category-s/3626.htm'
				},
				{
					name:'ZT ELITE',
					link:'https://www.badboylawnmowerparts.com/category-s/3628.htm'
				}
			],
			2015 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/2015-BAD-BOY-MOWER-PARTS-s/2351.htm'
				},
				{
					name:'COMPACT DIESEL',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-COMP-DIESEL-s/2806.htm'
				},
				{
					name:'CZT ELITE',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-CZT-ELITE-s/2791.htm'
				},
				{
					name:'DIESEL',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-DIESEL-s/2807.htm'
				},
				{
					name:'MZ',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-MZ-s/2808.htm'
				},
				{
					name:'MZ MAGNUM',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-MZ-MAGNUM-s/2809.htm'
				},
				{
					name:'OUTLAW & EXTREME',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-EXTREME-s/2810.htm'
				},
				{
					name:'OUTLAW XP',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-XP-s/2811.htm'
				},
				{
					name:'STAND-ON',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-STAND-ON-s/2812.htm'
				},
				{
					name:'ZT ELITE',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-ZT-ELITE-s/2813.htm'
				}
			],
			2016 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/2016-BAD-BOY-MOWER-PARTS-s/2350.htm'
				},
				{
					name:'COMPACT DIESEL 1100cc',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-COMP-DIESEL-1100cc-s/2473.htm'
				},
				{
					name:'COMPACT OUTLAW',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-COMP-OUTLAW-s/2384.htm'
				},
				{
					name:'DIESEL 1500cc',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-DIESEL-1500cc-s/2474.htm'
				},
				{
					name:'MAVERICK',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-MAVERICK-s/2475.htm'
				},
				{
					name:'MZ',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-MZ-s/2476.htm'
				},
				{
					name:'MZ MAGNUM',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-MZ-MAGNUM-s/2477.htm'
				},
				{
					name:'OUTLAW & EXTREME',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-EXTREME-s/2478.htm'
				},
				{
					name:'OUTLAW XP',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-XP-s/2479.htm'
				},
				{
					name:'STAND-ON',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-STAND-ON-s/2480.htm'
				},
				{
					name:'ZT ELITE',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-ZT-ELITE-s/2481.htm'
				}
			],
			2017 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/2017-BAD-BOY-MOWER-PARTS-s/2349.htm'
				},
				{
					name:'COMPACT DIESEL 1100cc',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-COMPACT-DIESEL-s/2361.htm'
				},
				{
					name:'COMPACT OUTLAW',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-COMPACT-OUTLAW-s/2363.htm'
				},
				{
					name:'DIESEL 1500cc',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-DIESEL-1500-s/2362.htm'
				},
				{
					name:'MAVERICK',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-MAVERICK-s/2364.htm'
				},
				{
					name:'MZ & MZ MAGNUM',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-MZ-MZ-MAGNUM-s/2368.htm'
				},
				{
					name:'OUTLAW & EXTREME',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-OUTLAW-EXTREME-s/2365.htm'
				},
				{
					name:'OUTLAW XP',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-XP-s/2366.htm'
				},
				{
					name:'STAND-ON',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-OUTLAW-STAND-ON-s/2367.htm'
				},
				{
					name:'WALK BEHIND',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-WALK-BEHIND-s/2369.htm'
				},
				{
					name:'ZT ELITE',
					link:'https://www.badboylawnmowerparts.com/BAD-BOY-ZT-ELITE-s/2360.htm'
				}
			],
			2018 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/category-s/4111.htm'
				},
				{
					name:'COMPACT DIESEL 1100cc',
					link:'https://www.badboylawnmowerparts.com/category-s/4241.htm'
				},
				{
					name:'COMPACT OUTLAW',
					link:'https://www.badboylawnmowerparts.com/category-s/4242.htm'
				},
				{
					name:'DIESEL 1500cc',
					link:'https://www.badboylawnmowerparts.com/category-s/4117.htm'
				},
				{
					name:'MAVERICK',
					link:'https://www.badboylawnmowerparts.com/category-s/4243.htm'
				},
				{
					name:'MZ & MZ MAGNUM',
					link:'https://www.badboylawnmowerparts.com/category-s/4244.htm'
				},
				{
					name:'OUTLAW & EXTREME',
					link:'https://www.badboylawnmowerparts.com/category-s/4245.htm'
				},
				{
					name:'OUTLAW XP',
					link:'https://www.badboylawnmowerparts.com/category-s/4246.htm'
				},
				{
					name:'WALK BEHIND',
					link:'https://www.badboylawnmowerparts.com/category-s/4247.htm'
				},
				{
					name:'ZT ELITE',
					link:'https://www.badboylawnmowerparts.com/category-s/4248.htm'
				}
			],
			2019 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/category-s/4576.htm'
				},
				{
					name:'COMPACT OUTLAW',
					link:'https://www.badboylawnmowerparts.com/category-s/4579.htm'
				},
				{
					name:'DIESEL 1500CC',
					link:'https://www.badboylawnmowerparts.com/category-s/4580.htm'
				},
				{
					name:'MAVERICK',
					link:'https://www.badboylawnmowerparts.com/category-s/4581.htm'
				},
				{
					name:'MZ & MZ MAGNUM',
					link:'https://www.badboylawnmowerparts.com/category-s/4582.htm'
				},
				{
					name:'REBEL',
					link:'https://www.badboylawnmowerparts.com/category-s/4583.htm'
				},
				{
					name:'RENEGADE DIESEL',
					link:'https://www.badboylawnmowerparts.com/category-s/4584.htm'
				},
				{
					name:'RENEGADE GASOLINE',
					link:'https://www.badboylawnmowerparts.com/category-s/4585.htm'
				},
				{
					name:'REVOLT',
					link:'https://www.badboylawnmowerparts.com/category-s/4586.htm'
				},
				{
					name:'ROGUE',
					link:'https://www.badboylawnmowerparts.com/category-s/4587.htm'
				},
				{
					name:'ZT ELITE',
					link:'https://www.badboylawnmowerparts.com/category-s/4588.htm'
				}
			],
			2020 : [
				{
					name:'-Model-',
					link:'https://www.badboylawnmowerparts.com/category-s/5313.htm'
				},
				{
					name:'COMPACT OUTLAW',
					link:'https://www.badboylawnmowerparts.com/category-s/5318.htm'
				},
				{
					name:'DIESEL 1500CC',
					link:'https://www.badboylawnmowerparts.com/category-s/5320.htm'
				},
				{
					name:'MAVERICK',
					link:'https://www.badboylawnmowerparts.com/category-s/5317.htm'
				},
				{
					name:'MZ & MZ MAGNUM',
					link:'https://www.badboylawnmowerparts.com/category-s/5325.htm'
				},
				{
					name:'REBEL',
					link:'https://www.badboylawnmowerparts.com/category-s/5323.htm'
				},
				{
					name:'RENEGADE DIESEL',
					link:'https://www.badboylawnmowerparts.com/category-s/5319.htm'
				},
				{
					name:'RENEGADE GASOLINE',
					link:'https://www.badboylawnmowerparts.com/category-s/5321.htm'
				},
				{
					name:'REVOLT',
					link:'https://www.badboylawnmowerparts.com/category-s/5324.htm'
				},
				{
					name:'ROGUE',
					link:'https://www.badboylawnmowerparts.com/category-s/5322.htm'
				},
				{
					name:'WALK BEHIND',
					link:'https://www.badboylawnmowerparts.com/category-s/5316.htm'
				},
				{
					name:'ZT AVENGER',
					link:'https://www.badboylawnmowerparts.com/category-s/5315.htm'
				},
				{
					name:'ZT ELITE',
					link:'https://www.badboylawnmowerparts.com/category-s/5314.htm'
				}
			],
		}
		myDropDownForm.addEventListener("click", (elem)=>{
			(elem.target.id === 'year' && myDropDownForm['year'].value !== '-Year-')?setModel(elem.target.value):false;
			(elem.target.id === 'model' && myDropDownForm['year'].value === '-Year-')?setErrorMessage(elem.target):false;
		});
		myDropDownForm.addEventListener("submit", forBeenSubmited)
		function forBeenSubmited(event){
			event.preventDefault();
			(myDropDownForm['year'].value === '-Year-')?setErrorMessage(event.target):goToUrl();
			function goToUrl(){
				let year = myDropDownForm['year'].value;
				let model = myDropDownForm['model'].value;
				(year === '-Year-')?setErrorMessage():window.location.href = model;
			}
			
		};
		function setModel(year){
			let mowerModel = document.querySelector('#model');
			while (mowerModel.hasChildNodes()) {  
				mowerModel.removeChild(mowerModel.firstChild);
			}
			let modelList = yearModelObj[year];
			modelList.forEach((e)=>{
				mowerModel.insertAdjacentHTML('beforeend', `<option value='${e.link}'>${e.name}</option>`)
			})
			myDropDownForm['model'].disabled = false;
			myDropDownForm['submit'].disabled = false;
		};
		function setErrorMessage(model){
			myDropDownForm['model'].disabled = true;
			let errBlock = document.querySelector('.form__error');
			errBlock.classList.remove('form__error_off');
			errBlock.classList.add('form__error_active');
			setTimeout(removeError, 6000);
			function removeError(){
				errBlock.classList.remove('form__error_active');
				errBlock.classList.add('form__error_off');
			}
		}
	}());