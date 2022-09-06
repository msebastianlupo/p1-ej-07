'use strict'

let numero1;
let numero2;
let calculo;


function obtenerNumero1(){
    let num = parseFloat(prompt("Ingrese el primer número"));
    if(!isNaN(num)){
        numero1 = num;
    }else{
        alert("El valor ingresado es incorrecto");
        numero1 = undefined;
    }
}


function obtenerNumero2(){
    let num = parseFloat(prompt("Ingrese el primer número"));
    if(!isNaN(num)){
        numero2 = num;
    }else{
        alert("El valor ingresado es incorrecto");
        numero2 = undefined;
    }
}


function operacion(op = ""){
    if(!isNaN(numero1)  && !isNaN(numero2)){
        switch(op){
            case "sumar":
                calculo = numero1 + numero2;
            break;
            case "restar":
                calculo = numero1 - numero2;
            break;
            case "multiplicar":
                calculo = numero1 * numero2;
            break;
            case "dividir":
                if(numero2 !== 0){
                calculo = numero1 / numero2;
                }else{
                    alert("Error: no se puede dividir por 0");
                }
            break;
        }
    }else{
        alert("Debe ingresar los 2 números");
    }
    return op;
}


function mostrar(){
    let salida = document.getElementById("salida");
    if(!isNaN(calculo)){
        let salida = document.getElementById("salida");
        salida.innerText = `Resultado de la operación: ${calculo}`;
        numero1 = undefined;
        numero2 = undefined;
        calculo = undefined;
        return 1;
    }else{
        alert("Faltan número/s y/o operador");
        salida.innerText = "";
    }
    return 0;
}