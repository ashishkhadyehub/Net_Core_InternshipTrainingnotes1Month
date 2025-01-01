console.log("Hello from extrnal JS..!");


//There are two ways to declare Array

let cities = [];
cities =['Kolhapur', 'Pune', 'Mumbai']
//How to access array elements
console.log(cities[0])
console.log(cities[1])
//check log in browser for output

let car = {};
car = { name: "A7",brand: "Audi",capacity: 5};
//How to access properties of an Object
console.log(car['name'])
console.log(car['brand'])

var person = {name: "Shree", language: "JavaScript", age: 28,City:"Mumbai"};
for(var p in person) 
{  
console.log( p + " = " + person[p]); 
}
//check log in browser for output

let a = 10;
let b =3;
do {
console.log(a);
a++;
} while(a <= b);
//check log in browser for output