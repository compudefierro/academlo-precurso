"use strict";
// Averiguar si el  correo que tenemos en un string pertenece a Academlo
let correo1 = "erik@academlo.com";
let correo2 = "jorge@gmail.com";
let academlo1 = correo1.endsWith("academlo.com");
let academlo2 = correo2.endsWith("academlo.com");
console.log(academlo1);
console.log(academlo2);

// Encontrar la primer palabra de un string
let frase = "Tengo 40 años";
let longitudFrase = frase.length;
let indice1 = frase.indexOf(" ");
console.log(frase.slice(0, indice1));

// Encontrar el tamaño de la última palabra en un texto.
let indice2 = frase.lastIndexOf(" ");
console.log(frase.slice(indice2 + 1, longitudFrase));

// Encontrar el tamaño de la segunda palabra en un texto.
console.log(frase.slice(indice1 + 1, indice2));
