console.log("Hello from external JS..!");
let car = {};
car = { name: "A7",brand: "Audi",capacity: 5};
//How to access properties of an Object
console.log(car['name'])
console.log(car['brand'])

var person = {name: "Shree", language: "JavaScript", age: 28,City:"Kolhapur"};
for(var p in person) 
{  
console.log( p + " = " + person[p]); 
}
//check log in browser for output

function showmsg()
{
    alert("Button is clicked...!");
}