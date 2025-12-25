// 1st Challenge: Accessing Array Elements
let teaFlavours = ["green tea", "black tea", "oolong tea"];

// console.log(teaFlavours[0]);

let firstTea = teaFlavours[0];

// 2nd Challenge: Storing Array Elements in Variables
let cities = ["London", "Tokyo", "Paris", "New York"];

let favourtecity = cities[2];

// console.log(favourtecity);

// 3rd Challenge: Modifying Array Elements
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

// console.log(teaTypes);

// 4th Challenge: Adding Elements to an Array
let citiesVisited = ["Mumbai", "Sydney"];

citiesVisited.push("Berlin");

// console.log(citiesVisited);

// 5th Challenge: Removing Elements from an Array
let teaOrder = ["chai", "iced tea", "matcha", "earl grey"];
let a = teaOrder.pop();

// console.log(teaOrder);
// console.log(a);

// 6th Challenge: Copying Arrays
let popularTeas = ["green tea", "oolong tea", "chai"];

let softCopyTeas = popularTeas;

// console.log(popularTeas);
// console.log(softCopyTeas);

// 7th Challenge: Creating a Hard Copy of an Array
let topCities = ["Berlin", "Singapore", "New York"];
let HardCopyCities = [...topCities];

topCities.push("Dubai");
// console.log(topCities);
// console.log(HardCopyCities);

// 8th Challenge: Concatenating Arrays
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

let worldCities = europeanCities.concat(asianCities);

// console.log(worldCities);

// 9th Challenge: Finding the Length of an Array
let teaMenu = ["Masala Chai", "Oolong", "Green Tea", "earl Grey"];

let length = teaMenu.length;

// console.log(length);

// 10th Challenge: Checking for the Existence of an Element in an Array
let cityBucketList = ["Kyoto", "London", "Cape Town", "vancouver"];

let isLondonInList = cityBucketList.includes("London");

// console.log(isLondonInList);
