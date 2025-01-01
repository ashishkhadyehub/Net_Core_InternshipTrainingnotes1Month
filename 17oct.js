console.log("Hello from extrnal JS...!");
// Store
localStorage.setItem("Company", "Revolution IT Solutions");
// Retrieve
let company = localStorage.getItem("Company");
console.log(company);

document.getElementById("btnshowmsg").addEventListener("click",showmsg);
//check log in browser for output


