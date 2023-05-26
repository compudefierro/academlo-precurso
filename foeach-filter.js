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

function condicionEmail(correo) {
  return correo.email.endsWith("@academlo.com");
}
console.log(users.filter(condicionEmail));
