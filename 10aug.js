console.log("External JS");


//There are two ways to declare Array

cities = [];
cities =['Kolhapur', 'Pune', 'Mumbai'];
//How to access array elements
console.log(cities[0])
console.log(cities[1])
//check log in browser for output

//There are two ways to declare Object

let car = {};
car = { name: "A7",brand: "Audi",capacity: 5}
//How to access properties of an Object
console.log(car['name'])
console.log(car['brand'])
//check log in browser for output


//check log in browser for output

let a = 10;
let b =3;
do {
console.log(a);
a++;
} while(a <= b);
//check log in browser for output

// Store
localStorage.setItem("Company", "Revolution IT Solutions");
// Retrieve
let company = localStorage.getItem("Company");
console.log(company);
//check log in browser for output