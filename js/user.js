let firstdrop = document.getElementById("first-drop");
let seconddrop = document.getElementById("second-drop");
let userAcount = document.getElementById("user-acount");
let alink = document.getElementById("a-link");
let logout = document.getElementById("logout");


localStorage.length === 0 ? seconddrop.style.display = 'none' : seconddrop.style.display = 'block' 


if (localStorage.getItem("username")) {
  firstdrop.remove();
  alink.style.display = "flex";
  alink.style.alignItems = "center";
  userAcount.innerHTML = localStorage.getItem("username");
  userAcount.style.marginRight = "15px";
}
logout.addEventListener("click", () => {
  setTimeout(() => {
    localStorage.clear();
    window.location = "login.html";
  }, 2000);
});
