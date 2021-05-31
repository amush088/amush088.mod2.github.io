// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		nutFree: true,
		isOrganic: true,
		priceStr: " $1.99",
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		nutFree: true,
		isOrganic: false,
		priceStr: " $2.35",
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		nutFree: true,
		isOrganic: true,
		priceStr: " $10.00",
		price: 10.00
	},
	{
		name: "yoghurt",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		nutFree: true,
		isOrganic: false,
		priceStr: " $6.99",
		price: 6.99
	},
	{
		name: "almond granola",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		nutFree: false,
		isOrganic: true,
		priceStr: " $4.99",
		price: 4.99
	},

	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		nutFree: true,
		isOrganic: false,
		priceStr: " $3.79",
		price: 3.79
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		nutFree: true,
		isOrganic: true,
		priceStr: " $9.50",
		price: 9.50
	},
	{
		name: "pistachios",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		nutFree: false,
		isOrganic: true,
		priceStr: " $2.30",
		price: 2.30
	},
	{
		name: "bananas",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		nutFree: true,
		isOrganic: false,
		priceStr: " $0.79",
		price: 0.79
	},
	{
		name: "cake",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: false,
		nutFree: true,
		isOrganic: false,
		priceStr: " $8.15",
		price: 8.15
	},
];
	
// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

//FIX this functionality is wonky
function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push([prods[i].name, prods[i].priceStr]);
			//product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name, prods[i].priceStr]);
			//product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push([prods[i].name, prods[i].priceStr]);
			//product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push([prods[i].name, prods[i].priceStr]);
			//product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].isOrganic == true)){
			product_names.push([prods[i].name, prods[i].priceStr]);
			//product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push([prods[i].name, prods[i].priceStr]);
			//product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}

