const partsListConteiner =  document.querySelector('#schematic-parts-list');
let elems = partsListConteiner.querySelectorAll('.schematic-item-part-number');
elems.forEach((e) => {
	console.log(e.textContent)
})