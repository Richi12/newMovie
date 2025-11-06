
$("#customer").on("submit", (e) => {
    e.preventDefault();
    let customer = $("#customer").serializeArray();
    let dataHtml = customer.reduce((acc, curr) => acc + `<p>${curr.name}: ${curr.value}</p>`, '');
    $("#content").prepend(dataHtml);
});

cambiarTexto();
mostrarMensaje();
// pruebaforinforof();
// polindromo("A man, a plan, a canal Panama");
// polindromo("Anita lava la tina");
// contadorPalabrasTexto("La casa de la abuela esta = en la colina, cerca de la casa de la playa.", "lalo");
// invertir("Hola mundo");
// desconocido(5);


// ######################################
Animal = new Animales("Nemo", "Pez");
Perro = new Perro("Firulais", 4, "Labrador");
console.log(Perro.ladrar() + " y " + Perro.hacerSonido());

function perro(nombre, edad) {
    // let perro = Object.create(objetoConstructor);
    //perro.nombre = nombre;
    //perro.edad = edad;
    this.nombre = nombre;
    this.edad = edad;
    // return perro;
}

perro.prototype.ladrar = function () {
    return "Guau Guau";
}

let Firulais = new perro("Firulais", 3);

let objetoConstructor = {
    ladrar: function () {
        return "Guau Guau";
    },
    comer: function () {
        return "Ñam Ñam";
    }
}

let firulais = perro("Firulais", 3);
// console.log(firulais);
// console.log(`El perro ${firulais.nombre} tiene ${firulais.edad} años. Hace ${firulais.ladrar()} y al comer hace ${firulais.comer()}`);

function cambiarTexto() {
    let numero = 2024;
    // pi = 4.5678; // Esto genera un error porque las constantes no se pueden reasignar
    var copyright = document.getElementById('texto');
    copyright.innerHTML = "Prácticas DesarrolladorWEB" + numero;
}

function mostrarMensaje() {
    let estaciones = ["Invierno", "Primavera", "Verano", "Otoño"];
    ol = `Estamos en: <br>`;
    estaciones.map((estacion) => {
        if (estacion == "Verano") {
            ol += `<li><strong>${estacion}</strong></li>`
        }
    }).join('');
    console.log(ol);
    document.getElementById('texto').innerHTML = ol;
}

function pruebaforinforof() {
    let frutas = ["Manzana", "Banana", "Cereza"];
    let resultado = "";
    for (let fruta of frutas) {
        resultado += fruta + "<br>"
    }
    console.log(resultado);

    for (let indice in frutas) {
        console.log(`Índice: ${indice}, Fruta: ${frutas[indice]}`);
    }
}

function polindromo(cadena) {
    console.log("########### Políndromo ###########");
    let cadenaLimpia = cadena.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let cadenaINvertida = cadenaLimpia.split('').reverse().join('');
    if (cadenaLimpia === cadenaINvertida) {
        console.log(`La cadena ${cadena} es un políndromo.`)
    } else {
        console.log(`La cadena ${cadena} no es un políndromo.`)
    }
}

function contadorPalabrasTexto(frase, busqueda) {
    console.log(`########### Contador de Palabras - ${busqueda} ###########`);
    let contador = 0;
    let fraseLimpia = frase.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/gi, "");
    if (fraseLimpia.includes(busqueda.toLowerCase())) {
        let array = frase.split(" ");
        let mapa = {};
        for (palabra of array) {
            if (mapa[palabra]) {
                mapa[palabra]++;
            }
            else {
                mapa[palabra] = 1;
            }
        }
        console.log(`La palabra - ${busqueda} - se repite ${mapa[busqueda]} veces en la frase`)
    } else {
        console.log(`La palabra ${busqueda} no se encuentra en la frase`)
    }
}

function invertir(cadena) {
    console.log(`########### Invertir Cadena ${cadena} ###########`);
    let cadenaInvertida = '';
    for (letra of cadena) {
        cadenaInvertida = letra + cadenaInvertida;
    }
    console.log(`Cadena original: ${cadena}`);
    console.log(`Cadena invertida: ${cadenaInvertida}`);
}

function pintarCuadrado(numero) {
    let cuadrado = numero * numero;
    let resultado = "";
    let inferior = mostrarsuperiorinferior(numero);
    let medio = mostrarmedio(numero);
    resultado += `\n${inferior}`;
    for (let i = 0; i < numero - 2; i++) {
        resultado += `\n${medio}`;
    }
    resultado += `\n${inferior}`;
    console.log(`El resultado es  ${resultado}`);
}

function mostrarsuperiorinferior(numero) {
    let resultado = '';
    for (let i = 0; i < numero; i++) {
        resultado += '*';
    }
    return resultado;
}

function mostrarmedio(numero) {
    let resultado = '*';
    for (let i = 0; i < numero - 2; i++) {
        resultado += ' ';
    }
    resultado += '*';
    return resultado;
}
// ****
// *  *
// *  *
// ****