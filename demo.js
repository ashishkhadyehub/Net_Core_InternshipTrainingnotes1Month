console.log("Hello from Extrnal JS");
let a = 10;
a="test";
const pi=3.14;


let cities = [];
cities =['Kolhapur', 'Pune', 'Mumbai'];
console.log(cities[1]);


let car = {};
car = { name: "A7",brand: "Audi",capacity: 5};
console.log(car['name']);
console.log(car['brand']);

for(let j=1; j<=100; j++) 
{
console.log(j);
}
//check log in browser for output

let person = {name: "Shree", language: "JavaScript", age: 28,city:"Kolhapur",contact:"8870087898"};
for(var prop in person) 
{  
console.log( prop + " = " + person[prop]); 
}

let  evenno = [2,4,6,8,10];
evenno.forEach(showen);
 
function showen(item, index)
{
console.log(item);
}

let x = 1, y = 6;
while (x <= y) 
{
console.log(x);
x += 1;
// x=x+1;
}
//check log in browser for output
console.log("Example of do while");
let p = 10;
let q =3;
do {
console.log(p);
p++;
} while(p <= q);