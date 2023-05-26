"use strict";
const users = [
  {
    name: "Erik",
    age: 29,
    email: "erik@academlo.com",
    social: [
      { name: "facebook", url: "facebook/erik" },
      { name: "twitter", url: "twitter/erik" },
    ],
    gender: "Male",
  },
  {
    name: "Georg",
    age: 33,
    email: "georg@academlo.com",
    social: [
      { name: "facebook", url: "facebook/georg" },
      { name: "twitter", url: "twitter/georg" },
    ],
    gender: "Male",
  },
  {
    name: "Andrea",
    age: 42,
    email: "andrea@hotmail.com",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" },
    ],
    gender: "Female",
  },
  {
    name: "Oscar",
    age: 31,
    email: "oscar@academlo.com",
    social: [
      { name: "facebook", url: "facebook/oscar" },
      { name: "twitter", url: "twiter/oscar" },
    ],
    gender: "Male",
  },
  {
    name: "Daniela",
    age: 22,
    email: "daniela@uaq.mx",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" },
    ],
    gender: "Female",
  },
  {
    name: "Elena",
    age: 22,
    email: "daniela@academlo.com",
    social: [
      { name: "facebook", url: "facebook/elena" },
      { name: "twitter", url: "twitter/elena" },
    ],
    gender: "Female",
  },
];

/*
1- Extraer los correos de los usuarios
2- Obtener a todos los usuarios con el correo de Academlo
3- Obtener a todos los usuarios que NO tengan correo de Academlo.*/
let listaCorreos = [];
let listaUsuariosAcademlo = [];
let listaUsuariosExternos = [];
const emailAcademlo = "@academlo.com";

function extraerEmail(user) {
  listaCorreos.push(user.email);
}
function extraerUsuariosAcademlo(user) {
  if (user.email.endsWith(emailAcademlo)) {
    listaUsuariosAcademlo.push(user);
  } else {
    listaUsuariosExternos.push(user);
  }
}

function imprimeLista(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }
}
users.forEach(extraerEmail);
users.forEach(extraerUsuariosAcademlo);
console.log("Emails: " + listaCorreos);
console.log("Usuarios Academlo: ");
imprimeLista(listaUsuariosAcademlo);
// console.log(listaUsuariosAcademlo);
console.log("Usuarios Externos: ");
console.log(listaUsuariosExternos);
