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
function extraeEmail(user) {
  return user.email;
}
function imprimeDatos(datos) {
  console.log(datos);
}
//sin variables:
imprimeDatos(extraeEmail(users[0]));

// con variables:
const email1 = extraeEmail(users[1]);
imprimeDatos(email1);

// funcion validar email, retorna true si es de academlo:
function validarEmail(email) {
  return email.endsWith("@academlo.com") ? true : false;
}
// funcion imprime bienvenido si es mail correcto
function bievenida(email) {
  if (validarEmail(email)) {
    console.log(`Benvenido ${email} a Academlo!`);
  }
}
bievenida(email1);
