// add to heart
let heartbtn = document.getElementById("heartbtn");
let badge = document.querySelector(".badge");
let contact_name = document.querySelector(".contact-name");
let contact_namediv = document.querySelector(".contact-name div");

let addeditem = localStorage.getItem("propertinheart")
  ? JSON.parse(localStorage.getItem("propertinheart"))
  : [];
if (addeditem) {
  badge.innerHTML = addeditem.length;
  badge.style.display = "block";
}

function addtoheart(id) {
  if (localStorage.getItem("username")) {
    let property = Allpropertes.find((item) => item.id === id);
    let ispropinheart = addeditem.find((itm)=> itm.id === property.id)
    /////////////////
    if (ispropinheart) {
      addeditem = addeditem.map((item) => {
        if (item.id === property.id) item.quntity += 1;
        return item ;
      })
    } else {
      addeditem.push(property)
    }
    
 
    contact_namediv.innerHTML += `<p>${property.title} </p>`;
    let heartitem = document.querySelectorAll(".contact-name div p");
    contact_name.style.display = "none";
    badge.style.display = "block";
    badge.innerHTML = addeditem.length;

    // addeditem = [...addeditem, property];
    localStorage.setItem("propertinheart", JSON.stringify(addeditem));
  }
}