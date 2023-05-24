"use strict";
let emails = [
  "correo1@academlo.com",
  "correo2@academlo.com",
  "correo3@academlo.com",
  "correo4@academlo.com",
  "correo1@gmail.com",
];
// pop Elimina un elemento al final
console.log(emails.pop());
// push Agrega un elemento al final
console.log(emails.push("nuevo2@academlo.com"));
// shift Elimina un elemento al comienzo
console.log(emails.shift());
// splice Devuelve el rango de elementos del arreglo.
console.log(emails.splice(0, 2));
// unshift Agrega un elemento al comienzo
console.log(emails.unshift("nuevo1@academlo.com"));

console.log(emails);
console.log(emails.splice(1, 0, "nuevo3@academlo.com"));
console.log(emails);
