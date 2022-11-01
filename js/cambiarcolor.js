let icono2 = document.querySelector("#icono2");
let i2 = document.querySelector("#DN2");
let nav2 = document.querySelector("#nav2");
let cuerpo = document.querySelector("body");

eventListeners();

function eventListeners(){
    icono2.addEventListener('click', cambiarColor2);
}

function cambiarColor2(e){
    e.preventDefault();
    if(icono2.value=="dia"){
        cuerpo.classList.remove("text-white");
        cuerpo.classList.remove("darks");
        nav2.classList.remove("navbar-dark", "bg-dark");
        i2.classList.remove("fa-sun-o", "text-white");
        i2.classList.add("fa-moon-o");
        nav2.classList.add("navbar-light", "bg-light");
        icono2.value = "noche";
    }else if(icono2.value == "noche"){
        cuerpo.classList.remove("text-dark");
        cuerpo.classList.remove("bg-white");
        nav2.classList.remove("navbar-light", "bg-light");
        cuerpo.classList.add("darks");
        cuerpo.classList.add("text-white");
        icono2.value = "dia";
        i2.classList.remove("fa-moon-o");
        i2.classList.add("fa-sun-o", "text-white");
        nav2.classList.add("navbar-dark", "bg-dark");
    }
}