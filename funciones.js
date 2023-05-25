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
// Extraer los usuarios con correos academlo
// Separar hombres y mujeres
let usersM = [];
let usersF = [];
let usersO = [];

function filtro(user) {
  if (user.gender == "Male" && user.email.endsWith("@academlo.com")) {
    usersM.push(user);
  } else if (user.gender == "Female" && user.email.endsWith("@academlo.com")) {
    usersF.push(user);
  } else {
    usersO.push(user);
  }
}

for (let i = 0; i < users.length; i++) {
  filtro(users[i]);
}
console.log(usersM);
console.log(usersF);
console.log(usersO);
