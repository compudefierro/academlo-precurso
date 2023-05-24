"use strict";
let user1 = {
  name: "Jorge",
  edad: 40,
  puntos: 80,
  genero: "M",
};
let user2 = {
  name: "Lidia",
  edad: 56,
  puntos: 89,
  genero: "F",
};
if (user1.puntos >= 70) {
  if (user1.genero == "M") {
    console.log("Bienvenido " + user1.name);
  } else {
    console.log("Bienvenida " + user1.name);
  }
}
if (user2.puntos >= 70) {
  if (user2.genero == "M") {
    console.log("Bienvenido " + user2.name);
  } else {
    console.log("Bienvenida " + user2.name);
  }
}
