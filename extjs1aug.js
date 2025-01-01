console.log("Hello from ext JS");

// Store
localStorage.setItem("Company", "Revolution IT Solutions");
// Retrieve
let company = localStorage.getItem("Company");
console.log(company);
//check log in browser for output
//check log in browser for output

function showmsg()
{
    alert("This is alert from JS");
}

document.getElementById("btntest").addEventListener("click",showmsg );