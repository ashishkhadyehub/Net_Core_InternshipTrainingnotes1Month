console.log("Hello from Extrnal JS..!");

const passing = 40;


cities =['Kolhapur', 'Pune', 'Mumbai']
//How to access array elements
console.log(cities[0])
console.log(cities[1])

let car = {};
car = { name: "A7",brand: "Audi",capacity: 5};
//How to access properties of an Object
console.log(car['name'])
console.log(car['brand'])

var person = {name: "Shree", language: "JavaScript", age: 28,city:"Mumbai",Dept:"IT"};
for(var p in person) 
{  
console.log( p + " = " + person[p]); 
}
//check log in browser for output