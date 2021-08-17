function goToPage() {
	var serialNumberInput = prompt('Type your serial number', 'BZ60KT745P08180050');
	var serialNumber = serialNumberInput.toUpperCase();
	var serialCode = serialNumber.split("");
	var year = 07;
	var model = serialCode[1] + serialCode[2];
	var linkModel = 'http://www.badboylawnmowerparts.com/category-s/';
	var wrongModel = '#'/*'http://www.badboylawnmowerparts.com'*/;

	if (serialNumber.length == 17) {
	 	year = serialCode[11] + serialCode[12];
	}	else if (serialNumber.length == 18) {
		year = serialCode[12] + serialCode[13];
	}	else {
		alert('Something went wrong, try again or give us a call 904 259 5494 !');
		linkModel = wrongModel;
	}

	var num = Number(serialCode[2]);

	for (var i = 0; i >= 10; i++) {
		return num = i
	}
	if (serialCode[2] == num) {
		model = serialCode[0] + serialCode[1];
	}
	
	 /*modelNNNN = [Aos, diesel, Pup, Zt*/
	var model2007 = {
		aos : '2934',
		diesel : '2935',
		pup : '2936',
		zt : '2937'
	} ;

	var model2008 = {
		aos : '3006',
		diesel : '3007',
		pup : '3008',
		zt : '3009'
	} ;

	var model2009 = {
		aos : '3078',
		diesel : '3079',
		pup : '3080',
		zt : '3081'
	} ;

	var model2010 = {
		aos : '3151',
		diesel : '3153',
		aosDiesel : '3152',
		czt : '3154',
		mz : '3155',
		outlaw : '3156',
		pup : '3157',
		zt : '3158'
	} ;

	var model2011 = {
		diesel : '3288',
		czt : '3287',
		mz : '3290',
		outlaw : '3291',
		pup : '3289',
		zt : '3292'
	} ;

	var model2012 = {
		diesel : '3368',
		czt : '3362',
		mz : '3369',
		outlaw : '3370',
		standOn : '3371',
		outlawXP : '3372',
		zt : '3373'
	} ;

	var model2013 = {
		diesel : '3630',
		czt : '3629',
		mz : '3631',
		mzMagnum : '3632',
		outlaw : '3633',
		standOn : '3634',
		outlawXP : '3635',
		zt : '3636'
	} ;

	var model2014 = {
		diesel : '3622',
		czt : '3621',
		mz : '3623',
		mzMagnum : '3624',
		outlaw : '3625',
		standOn : '3626',
		outlawXP : '3627',
		zt : '3628'
	} ;

	var model2015 = {
		diesel : '2806',
		aosDiesel : '2807',
		czt : '2791',
		mz : '2808',
		mzMagnum : '2809',
		outlaw : '2810',
		standOn : '2812',
		outlawXP : '2811',
		zt : '2813'
	} ;

	var model2016 = {
		diesel : '2473',
		aosDiesel : '2474',
		maverick : '2475',
		czt : '2791',
		mz : '2476',
		mzMagnum : '2477',
		compactOutlaw : '2384',
		outlaw : '2478',
		standOn : '2480',
		outlawXP : '2479',
		zt : '2481'
	} ;

	var model2017 = {
		diesel : '2361',
		aosDiesel : '2362',
		maverick : '2364',
		czt : '2364',
		mz : '2368',
		mzMagnum : '2368',
		compactOutlaw : '2363',
		outlaw : '2365',
		standOn : '2367',
		outlawXP : '2366',
		zt : '2360',
		walkBehind : '2369'
	} ;

	var model2018 = {
		diesel : '4241',
		aosDiesel : '4117',
		maverick : '4243',
		czt : '4243',
		mz : '4244',
		mzMagnum : '4244',
		compactOutlaw : '4242',
		outlaw : '4245',
		outlawXP : '4246',
		zt : '4248',
		walkBehind : '4247'
	} ;

	var model2019 = {
		rebel : '4583',
		renegadeGas : '4585',
		renegadeDiesel : '4584',
		rogue : '4587',
		aosDiesel : '4580',
		maverick : '4581',
		mz : '4582',
		mzMagnum : '4582',
		compactOutlaw : '4579',
		standOn : '4586',
		zt : '4588'
	} ;

	var model2020 = {
		avenger : '5315',
		rebel : '5323',
		renegadeGas : '5321',
		renegadeDiesel : '5319',
		rogue : '5322',
		aosDiesel : '5320',
		maverick : '5317',
		mz : '5325',
		mzMagnum : '5325',
		compactOutlaw : '5318',
		standOn : '5324',
		zt : '5314',
		walkBehind : '5316'
	};

	var model2021 = {
		avenger : '8141',
		rebel : '8297',
		renegadeGas : '8230',
		renegadeDiesel : '8255',
		rogue : '8201',
		maverick : '8102',
		mz : '8160',
		mzMagnum : '8160',
		compactOutlaw : '8323',
		standOn : '8272',
		zt : '8121',
		walkBehind : '8185'
	};

	if (year == 07) {
		year = model2007;
	} else if (year == 08) {
		year = model2008;
	} else if (year == 09) {
		year = model2009;
	} else if (year == 10) {
		year = model2010;
	} else if (year == 11) {
		year = model2011;
	} else if (year == 12) {
		year = model2012;
	} else if (year == 13) {
		year = model2013;
	} else if (year == 14) {
		year = model2014;
	} else if (year == 15) {
		year =model2015;
	} else if (year == 16) {
		year = model2016;
	} else if (year == 17) {
		year = model2017;
	} else if (year == 18) {
		year = model2018;
	} else if (year == 19) {
		year = model2019;
	} else if (year == 20) {
		year = model2020;
	} else if (year == 21) {
		year = model2021;
	} else {
		linkModel = wrongModel;
	}

	if (model == 'ZE') {
		model = 'zt';
	}	else if (model == 'BA') {
		model = 'aos';
	}	else if (model == 'BC') {
		model = 'czt';
	}	else if (model == 'BD') {
		model = 'diesel';
	} else if (model == 'BZ') {
		model = 'zt';
	} else if (model == 'ZT') {
		model = 'zt';
	} else if (model == 'ZS') {
		model = 'zt';
	} else if (model == 'BL') {
		model = 'pup';
	} else if (model == 'BM') {
		model = 'mz';
	} else if (model == 'MZ') {
		model = 'mz';
	}	else if (model == 'MG') {
		model = 'mzMagnum';
	} else if (model == 'BO') {
		model = 'outlaw';
	}	else if (model == 'BP') {
		model = 'pup';
	} else if (model == 'BS') {
		model = 'standOn';
	} else if (model == 'BX') {
		model = 'outlawXP';
	} else if (model == 'CE') {
		model = 'czt';
	} else if (model == 'BE') {
		model = 'maverick'
	} else if (model == 'MV') {
		model = 'maverick'
	} else if (model == 'MR') {
		model = 'maverick'
	} else if (model == 'RV') {
		model = 'standOn'
	} else if (model == 'RB') {
		model = 'rebel'
	} else if (model == 'RG') {
		model = 'rogue'
	} else if (model == 'RN') {
		model = 'renegadeGas'
	} else if (model == 'AZ') {
		model = 'avenger'
	} else if (model == 'WK') {
		model = 'walkBehind'
	} else {
		alert('Something went wrong, try again or give us a call 904 259 5494 !');
		linkModel = wrongModel;
	}

	if (model == 'aos') {var engine = serialCode[8] + serialCode[9];

		if (engine == 'PK') {
			model = 'aosDiesel'
		} else if ( engine == 'CA') {
			model = 'aosDiesel'
		} else {
			model = 'aos';
		}
	}

	if (model == 'renegadeGas') {var engine = serialCode[8] + serialCode[9];

		if (engine == 'PK') {
			model = 'renegadeDiesel'
		} else if ( engine == 'VA') {
			model = 'renegadeGas'
		} else {
			model = 'renegadeGas';
		}
	}

	if (model == 'outlaw') { var deckSize = serialCode[3] + serialCode[4];
		
		if (deckSize == '42') {
			model = 'compactOutlaw'
		} else if (deckSize == '48') {
			model = 'compactOutlaw'
		} else {
			model = 'outlaw';
		}
	}

	var linkToGo = year[model];

	var url = document.getElementById('#findBySerial');
	document.location.href = linkModel + linkToGo + '.html';
}
