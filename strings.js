"use strict";
let nombre = "Jorge";
let segundoNombre = "Osvaldo";
let apellido = "Pico";
let separador = " ";
let positionIndex = 0;
let nombreCompleto = nombre + separador + segundoNombre + separador + apellido;
let siglas =
  nombre[positionIndex] +
  segundoNombre[positionIndex] +
  apellido[positionIndex];
console.log(nombreCompleto);
console.log(siglas);
