console.log("Hello from extrnal JS");

let cities = [];
cities =['Kolhapur', 'Pune', 'Mumbai']
console.log(cities[0])
console.log(cities[1])

let car = {};
car = { name: "A7",brand: "Audi",capacity: 5};

console.log(car['name'])
console.log(car['brand'])

for(var j=1; j<=100; j++) 
{
console.log(j);
}
//check log in browser for output

var person = {name: "Shree", language: "JavaScript", age: 28, city:"Mumbai"};
for(var p in person) 
{  
console.log( p + " = " + person[p]); 
}
const  evenno = [2,4,6,8,10];
evenno.forEach(showen)
function showen(item, index)
{
console.log(item);
}

// Store
localStorage.setItem("Company", "Revolution IT Solutions");
// Retrieve
let company = localStorage.getItem("Company");
console.log(company);
//check log in browser for output