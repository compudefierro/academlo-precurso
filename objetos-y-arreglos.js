"use strict";
// crear un arreglo con 5 objetos que tengan propiedades name y email
let users = [
  { name: "Jorge", email: "jorge@gmail.com" },
  { name: "Enron", email: "enron@gmail.com" },
  { name: "Legol", email: "lego@academlo.com" },
  { name: "Gise", email: "gise@academlo.com" },
  { name: "Ranu", email: "ranu@gmail.com" },
];
// validar si los usuarios tienen correo academlo.com
console.log(users[0].email.endsWith("academlo.com"));
console.log(users[1].email.endsWith("academlo.com"));
console.log(users[2].email.endsWith("academlo.com"));
console.log(users[3].email.endsWith("academlo.com"));
console.log(users[4].email.endsWith("academlo.com"));
