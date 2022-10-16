import Swal from "sweetalert2";


export const validacionNombre = (nombre)=>{
if(nombre !== '' && isNaN(nombre)){
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

export const validacionApellido = (apellido)=> {
    if (apellido !== '' && isNaN(apellido))
  {  
    return true;
}else {
    Swal.fire({
        icon: "error",
        title: "Apellido Invalido",
        text: "escribe un apellido correcto"
        })
        return false;
    }}
export const validarEmail = (email)=> {
    const regEx =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (email !== '' &&  regEx.test(email)){
        return true;
    } else {
        Swal.fire({
            icon: "error",
            title: "Email Invalido",
            text: "escribe un Email correcto"
    }) 
    return false;
} }   

export const validarDni = (dni)=> {
    const regEx = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/;
    if (dni !== '' && regEx.test(dni) ){
        return true;
    } else {
        Swal.fire({
            icon: "error",
            title: "Dni Invalido",
            text: "escribe un Dni correcto"
    }) 
    return false;
    }
}