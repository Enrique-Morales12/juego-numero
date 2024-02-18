let numeroSecreto;
let numeroIntentos;
let listaNumerosSorteados = [];
let numeroMaximo = prompt('Escribe el número máximo a jugar');
console.log(numeroSecreto); 

//SE PUEDE ASIGNAR TEXTO A UN ELEMENTO DE HTML MEDIANTE UNA FUNCION
//SE CREA LA FUNCION Y SE LLAMA CON EL NOMBREFUN(); FUERA DE LA FUNCION
//SE LE ASIGNAN PARAMETROS ALAS VARIABLES PARA PODER UTILIZARLA EN OTRO MOMENTO
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);  

    console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if( numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //esta funcion 
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya se sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.')
    }else{
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
    
}

function reiniciarJuego() {
    //Primero se limpia la caja de texto
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    //Generar numero aleatorio
    //Iniciar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

//SE MANDA LLAMAR LA FUNCION PARA QUE SE EJECUTE
//PARA USAR LA FUNCION PARA ASIGNAR TEXTO SE LLAMA Y SE LE PASAN LOS PARAMETROS QUE SE DESEEN

condicionesIniciales();


/*HORA DE PRACTICAR
//1.Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludo() {
    console.log('Hola, Mundo!')
    return;
}
saludo();

//2.Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludoNombre(nombre) {
    console.log('Hola,', nombre);
    return;
}
saludoNombre('Belén');

//3.Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function numeroDoble(numero) {
    console.log(numero*2);
    return;
}
numeroDoble(5);

//4.Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(num1, num2, num3) {
    console.log((num1 + num2 + num3)/3);
    return;
}
promedio(5, 7, 9);

//5.Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numMax(num1, num2) {
    console.log(Math.max(num1, num2));
    return;
}
numMax(90, 89);

//6.Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function cuadradoNumero(numero) {
    console.log(numero*numero);
    return;
}
cuadradoNumero(13);*/

