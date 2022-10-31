let sabores = "";
let adornos = "";
let seleccionados = 0;
let estado = false;
let pedido = false;
//Obteniendo las etiquetas.
let descripcion = document.querySelector("#descripcion");
let checks = document.querySelectorAll(".valores");
let checksA = document.querySelectorAll(".valoresA");
let guardar = document.querySelector("#guardar");
let enviar = document.querySelector("#enviar");

//Obteniendo inputs
let nombre = document.querySelector("#nombre");
let telefono = document.querySelector("#telefono");
let correo = document.querySelector("#correoelectronico");
eventListeners();

function eventListeners(){
    guardar.addEventListener('click', agregarInfo);
    enviar.addEventListener('click', enviarPedidos);
}

function agregarInfo(e){
    e.preventDefault();
    checks.forEach((e)=>{
        if(e.checked){
            seleccionados = seleccionados + 1;
            sabores = sabores + ", " + e.value;
            pedido = true;
        }
    }    
    );
    checksA.forEach((e) =>{
       if(e.checked){
        adornos = adornos + ", " + e.value;
        estado = true;
       } 
    });
    if(seleccionados <= 0){
        sabores ="";
        adornos ="";
        if(descripcion.classList != ""){
            descripcion.classList.remove("bg-success", "text-white", "px-5", "font-weight-bold");
            descripcion.innerHTML = "";
        }
        
    pedido = false;
        alert("Debes de escoger por lo menos un sabor de pastel");
    }else{
        let guardar = sabores;
        sabores ="El pastel es de sabor" + sabores;
        guardar = adornos;
        adornos = "Los adornos son" + adornos;
        descripcion.classList = "bg-success text-white px-5 font-weight-bold";
        
        if(estado == false){
            descripcion.innerHTML = sabores + ". ";
        }else{
            descripcion.innerHTML = sabores + ". " + adornos;
        }
    }
    sabores ="";
    adornos ="";
    seleccionados = 0;
    estado = false;
}

function enviarPedidos(e){
    e.preventDefault();{
        if(pedido){
            checks.forEach((e)=>{
                if(e.checked){
                    e.checked = false;
                }
            }    
            );
            checksA.forEach((e) =>{
               if(e.checked){
                e.checked = false;
               } 
            });
            descripcion.classList.remove("bg-success", "text-white", "px-5", "font-weight-bold");
            descripcion.innerHTML = "";
            sabores = "";
            adornos = "";
            seleccionados = 0;
            estado = false;
            alert('Su pedido se registro exitosamente.');
            nombre.value = "";
            telefono.value = "";
            correo.value = "";
            pedido = false;
        }
        else{
            alert('Debe de escoger un tipo de pastel para su pedido');
        }
    }
}