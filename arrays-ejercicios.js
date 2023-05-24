"use strict";
let emails = ["correo1@academlo.com", "correo1@gmail.com"];

// Averiguar si los correos que tenemos en un arreglo pertenece a Academlo
console.log(
  "el email " +
    emails[0] +
    " pertenece a Academlo: " +
    emails[0].endsWith("academlo.com")
);
console.log(
  "el email " +
    emails[0] +
    " pertenece a Academlo: " +
    emails[1].endsWith("academlo.com")
);
// Encuentra el tamaño de la primer palabra de un string
let data = ["Proximo feriado argentino", 25, "Mayo", 2023];
let indiceFinPrimerPalabra = data[0].indexOf(" ");
let tamanhoPrimerPalabra = data[0].slice(0, indiceFinPrimerPalabra).length;
console.log("El tamaño de la primer palabra es: " + tamanhoPrimerPalabra);
