"use strict";
let auto1 = {
  nombre: "Pingo",
  color: "Negro",
  puertas: 4,
  precio: 10000,
};

//Agregar propiedades:
auto1.stock = 4;
auto1.patente = "";
//Eliminar:
delete auto1.patente;
// Modificar:
auto1.nombre = "Pingo Jr";

console.log(auto1);
