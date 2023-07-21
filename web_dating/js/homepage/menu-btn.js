var menubtn = document.querySelector(".header .menu-btn");
menubtn.addEventListener('click',() => {
    let menu_form = document.querySelector('.responsive');
    if (menu_form.classList.contains("active")) setTimeout(()=>{
        menu_form.style.display ="none";
    },800);
    else menu_form.style.display = "block";
    setTimeout(()=>{
        menu_form.classList.toggle("active");
    },100);
});