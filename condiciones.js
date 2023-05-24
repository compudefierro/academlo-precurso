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
// Si es menor no puede cursar
// Si edad esta entre 18 y 21 y Masculino: gana un cuaderno azul
// Si edad esta entre 18 y 21 y Femenino: gana un cuaderno rosa
// Si edad mayor de 21 y Masculino: gana un cupon de descuento pantalon
// Si edad mayor de 21 y Femenino: gana un cupon de descuento blusa
if (user1.edad >= 18 && user1.edad <= 21) {
  if (user1.genero == "M") {
    console.log("Recibe un cuaderno azul");
  } else {
    console.log("Recibe un cuaderno rosa");
  }
} else if (user1.edad > 21) {
  if (user1.genero == "M") {
    console.log("Recibe cupon de descuento pantalon");
  } else {
    console.log("Recibe cupon de descuento pantalon blusa");
  }
}
if (user2.edad >= 18 && user2.edad <= 21) {
  if (user2.genero == "M") {
    console.log("Recibe un cuaderno azul");
  } else {
    console.log("Recibe un cuaderno rosa");
  }
} else if (user2.edad > 21) {
  if (user2.genero == "M") {
    console.log("Recibe cupon de descuento pantalon");
  } else {
    console.log("Recibe cupon de descuento pantalon blusa");
  }
}
