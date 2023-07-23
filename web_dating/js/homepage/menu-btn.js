var menubtn = document.querySelector(".header .menu-btn");
menubtn.addEventListener('click',() => {
    let menu_form = document.querySelector('.responsive');
    if (menu_form.classList.contains("active")){
        menu_form.classList.toggle("active");
        setTimeout(()=>{
            menu_form.classList.toggle("none");
        },800);
    } 
    else {
        menu_form.classList.toggle("none");
        setTimeout(()=>{
            menu_form.classList.toggle("active");
        },400);
    }
});