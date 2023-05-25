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
for (let i = 0; i < users.length; i++) {
  if (users[i].gender == "Male" && users[i].email.endsWith("@academlo.com")) {
    usersM.push(users[i]);
  } else if (
    users[i].gender == "Female" &&
    users[i].email.endsWith("@academlo.com")
  ) {
    usersF.push(users[i]);
  } else {
    usersO.push(users[i]);
  }
}
console.log(usersM);
console.log(usersF);
console.log(usersO);
