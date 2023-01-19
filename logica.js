let correspondecia = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"};
let claves = Object.keys(correspondecia)

function ocultarImagen(){
    document.getElementById("salida-imagen").style.display = "none";
    document.getElementById("output-area").style.display = "inline"
}



const buttonEncriptar = document.getElementById("btnEncriptar");
buttonEncriptar.addEventListener("click",encriptar);

function encriptar(){
    let encriptado = "";
    let test = document.getElementById("input-area").value;
    if (test!=""){
        for (let indice =0; indice<test.length; indice++){
            if (claves.indexOf(test[indice]) != -1){
                console.log(correspondecia[test[indice]]);
                encriptado = encriptado + correspondecia[test[indice]];
            }
            else{
                encriptado = encriptado + test[indice];
            }
        }
    
        ocultarImagen();
        document.getElementById('output-area').value = encriptado;
    }
    else {
        alert("No hay mensaje de entrada");
    }

}


const buttonDesencriptar = document.getElementById("btnDesencriptar");
buttonDesencriptar.addEventListener("click", desEncriptar);


function desEncriptar(){
    let desEncriptado = "";
    let test = document.getElementById("input-area").value;
    if (test!=""){
        for (let indice =0; indice<test.length; indice++){
            if (claves.indexOf(test[indice]) != -1){
                desEncriptado = desEncriptado + test[indice];
                indice = indice + correspondecia[test[indice]].length - 1 ;
            }
            else{
                desEncriptado = desEncriptado + test[indice];
            }
        }
    
        ocultarImagen();
        document.getElementById('output-area').value = desEncriptado;
    }
    
    else{
        alert("No hay mensaje de entrada");
    }

}

const copia = document.getElementById("btnCopiar");
copia.addEventListener("click",copiarTexto);

function copiarTexto() {
    var copyText = document.getElementById("output-area");
    copyText.select();
    document.execCommand("copy");
}




// function desEncriptar(){
//     let desEncriptado = "";
//     for (let indice =0; indice<test.value.length; indice++){
//         if (test.value[indice] == "a"){
//             desEncriptado = desEncriptado + "a";
//             indice++;
//         }
//         else if (test.value[indice] == "e"){
//             desEncriptado = desEncriptado + "e";
//             indice = indice+4;
//         }
//         else if (test.value[indice] == "i" ){
//             desEncriptado = desEncriptado + "i";
//             indice = indice+3;
//         }
//         else if (test.value[indice] == "o"){
//             desEncriptado = desEncriptado + "o";
//             indice = indice+3;
//         }
//         else if (test.value[indice] == "u"){
//             desEncriptado = desEncriptado + "u";
//             indice = indice+3;
//         }
//         else{
//             desEncriptado = desEncriptado + test.value[indice];
//         }
//     }
//     alert(desEncriptado)
// }
//
//
