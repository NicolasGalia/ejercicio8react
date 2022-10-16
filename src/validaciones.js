import Swal from "sweetalert2";


export const validacionNombre = (nombre)=>{
if(nombre !== '' ){
    return true;
} else {
    Swal.fire({
icon: "error",
title: "Nombre Invalido",
text: "escribe un nombre correcto"
})
return false; 
}
};

export const validacionApellido = ()=> {
    if (apellido !== '')
    return true;
}