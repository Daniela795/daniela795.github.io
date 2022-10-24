pagina = "ADN ASTROLOGICO"

function saludar() {
    console.log("Bienvenidx " +" " + "a tu ADN astrologico" );
}
saludar();
let nombreUsuario = prompt("Por favor ingresa tu nombre");{
    console.log ("Ahora si, " + nombreUsuario, "empecemos!");  
}

let dia = parseInt(prompt("¿Que dia nacio?"));
if(dia <= 31){
alert("El dia que ingreso es: " + dia);
}else {
alert("El dia que ingreso no es valido")
}

let mes =  parseInt(prompt("¿Cual es tu mes de nacimiento?"));
if(mes >= 12){
alert ("Su mes de nacimiento es: "+ mes);
}else("El mes ingresado no es valido");

let anio =  parseInt(prompt("¿En que año nacio?"));
if(anio >=1959){
alert("El año en que nacio es: " + anio)
}else("El año ingresado no figura en nuestros registros");

console.log("Su fecha de nacimiento es: ",dia + " " + mes + " " + anio);

mes = Number(prompt("Ingrese su mes de nacimiento en NUMEROS "));
switch (mes){
    case 1:
        console.log ("Tu signo es: Acuarii");
        break;
    case 2:
        console.log("Tu signo es: Piscis");
        break;
    case 3:
        console.log("Tu signo es: Aries");
        break;
    case 4:
        console.log("Tu signo es:Tauro");
        break;
    case 5:
        console.log("Tu signo es:Geminis");
        break;
    case 6:
        console.log("Tu signo es:Cancer");
        break;
    case 7:
        console.log("Tu signo es:Leo")
        break;
    case 8:
        console.log("Tu signo es: Virgo");
        break;
    case 9:
        console.log("Tu signo es: Libra");
        break;
    case 10:
        console.log("Tu signo es: Escorpio");
        break;
    case 11:
        console.log ("Tu signo es: Sagitario");
        break;
    case 12:
        console.log("Tu signo es: Capricornio");
        break;
    

}

function despedir () {
    console.log("Gracias" ,nombreUsuario, "por realizar tu consulta astrologico en nuestras web" );
 }

 despedir()