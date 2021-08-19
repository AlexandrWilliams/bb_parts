#How to uptade dataBase 
	* Go to https://www.badboylawnmowerparts.com/admin/db_export.asp
	* Select Standard Export
	* Export From : Products
	* Select : ProductCode, ProductName, ProductPrice(currency)
	* import type: cvs,
	* Excel before formula find and replace all empty inputs
	* EXCEL formula "=CONCATENATE("$",a1,"$",b1,"$",c1)"
	* insert in psefdoDataBaseProductdescriptionPrice.js
	* upload Js file to server