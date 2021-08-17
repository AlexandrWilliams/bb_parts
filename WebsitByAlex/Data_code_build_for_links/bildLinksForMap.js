(function(){
		//links its obj to bilt links
	const objForLinks = linksDataForMap;
	const mapForLinks = document.querySelector(mapIdForMap);
	const areas = [mapForLinks.querySelectorAll('area')];
	/// Part number Organizer drawer under Main Diagrm(img)
	const arrToBildHref = [];
	const arrCheckAll = [];
	for(var i = 0; i < areas.length; ++i){
		for(var e = 0; e < areas[i].length; ++e){
				var elem = areas[i][e];
			if(elem.getAttribute('alt').match(/\d+/)){
				var num = elem.getAttribute('alt').match(/\d+/);
				arrCheckAll.push(num.input);
				elem.setAttribute('idOrganize', num.input);
				arrToBildHref.push({id: num.input, area:elem});
			} else {
				arrToBildHref.push({id: 0, area:elem});
			}			
		}
	}
	//sorting and deleting same id
	arrToBildHref.sort(compareNumbers);
	function compareNumbers(a, b) { 
  		return a.id - b.id;
	}
	for(var i = 0; i < arrToBildHref.length; ++i){
		var elem = arrToBildHref[i];
		var preObj = `$${elem.id}`;
		try {
			var partNum = objForLinks[preObj].split('$');
			var link = `https://www.badboylawnmowerparts.com/ProductDetails.asp?ProductCode=${partNum[1]}`;//0: qty of parts, 1: part num, 2: descriptions;
			elem.area.setAttribute('href', link);
		}
		catch { console.log(preObj)};
	}
	function checkIfAllBeenInserted(){
		for (key in objForLinks) {
			let keyNum = key.replace(/\$/g, "");
			if (!arrCheckAll.includes(keyNum)) {
				console.log("This number not in Map " + keyNum);
			}
		}
	};
	checkIfAllBeenInserted();
}());