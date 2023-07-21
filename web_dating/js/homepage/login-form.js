var login_menu = document.getElementById("login-menu");
var login_form = document.getElementById("login-form");
var page = document.getElementById("page");
login_menu.addEventListener("click", function () {
  page.style = "filter: blur(1.5rem);";
  login_form.style = "display: flex;";
  setTimeout(() => {
    login_form.style = "display: flex; filter: blur(0px);";
  }, 100);
});
var cancel_login = document.getElementById("cancel-btn-login");
cancel_login.addEventListener("click", function () {
  page.style = "filter: blur(0px);";
  login_form.style = "display: flex; filter: blur(1.5rem);";
  setTimeout(() => {
    login_form.style = "display: none; filter: blur(1.5rem);";
  }, 100);
});

function change_personal(event) {
  event.preventDefault();
  window.location.href = "personal.html";
}
var register_form = document.querySelector(".login-form .register-form");
var registerbtn = document.querySelector(".login-form .option #register");
registerbtn.addEventListener("click",function(){
  register_form.style = "display: flex; filter: blur(0px)";
  
})
