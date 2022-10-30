let sabores = "";
let adornos = "";
let seleccionados = 0;
let estado = false;
//Obteniendo las etiquetas.
let descripcion = document.querySelector("#descripcion");
let checks = document.querySelectorAll(".valores");
let checksA = document.querySelectorAll(".valoresA");
let guardar = document.querySelector("#guardar");
eventListeners();

function eventListeners(){
    guardar.addEventListener('click', agregarInfo);
    ColorCuadros();
}

function agregarInfo(e){
    e.preventDefault();
    checks.forEach((e)=>{
        if(e.checked){
            seleccionados = seleccionados + 1;
            sabores = sabores + ", " + e.value;
        }
    }    
    );
    checksA.forEach((e) =>{
       if(e.checked){
        adornos = adornos + ", " + e.value;
       } 
    });
    if(seleccionados < 1){
        alert("Debes de escoger por lo menos un sabor de pastel");
        sabores ="";
        adornos ="";
        descripcion.removeAttribute = "bg-success text-white px-5 font-weight-bold";
    }else{
        let guardar = sabores;
        sabores ="El pastel es de sabor" + sabores;
        guardar = adornos;
        adornos = "Los adornos son" + adornos;
        
    }
    descripcion.classList = "bg-success text-white px-5 font-weight-bold";
    descripcion.innerHTML = sabores + ". " + adornos;
    sabores ="";
    adornos ="";
}

