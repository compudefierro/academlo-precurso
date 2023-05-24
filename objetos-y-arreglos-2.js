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
];
// Estraer todos los correos y guardarlos en un nuevo arreglo.
let emails = [];

emails.push(users[0].email);
emails.push(users[1].email);
emails.push(users[2].email);
emails.push(users[3].email);
emails.push(users[4].email);
console.log(emails);

// Extraer las cuentas de facebook y guardarlas en un arreglo
let facebookAccounts = [];
facebookAccounts.push(users[0].social[0].url);
facebookAccounts.push(users[1].social[0].url);
facebookAccounts.push(users[2].social[0].url);
facebookAccounts.push(users[3].social[0].url);
facebookAccounts.push(users[4].social[0].url);
console.log(facebookAccounts);
