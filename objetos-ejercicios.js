"use strict";
let user1 = {
  name: "Erik",
  email: "erik@academlo.com",
  frase: "practica todos los dias",
};
let user2 = {
  name: "Demian",
  email: "demian@gmail.com",
  frase: "La historia la escriben los vencedores",
};
//Averiguar si el correo dentro de un objeto pertenecen a Academlo
let email_user1 = user1.email;
let email_user2 = user2.email;
console.log(email_user1.endsWith("academlo.com"));
console.log(email_user2.endsWith("academlo.com"));
// Agrega y Suma las edades de los usuarios
user1.edad = 38;
user2.edad = 29;
console.log("Suma edades: " + user1.edad + user1.edad);
//Encuentra el tamaño de la primer palabra de un string
let frase_user1 = user1.frase;
let frase_user2 = user2.frase;
console.log(frase_user1.slice(0, frase_user1.indexOf(" ")).length);
console.log(frase_user2.slice(0, frase_user2.indexOf(" ")).length);
