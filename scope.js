"use strict";
function imprimeDatos() {
  console.log(userName);
  let email = "kiko@gmail.com";
}
function imprimeLog(log) {
  console.log("Lista de errores detectados:\n" + log);
}
let userName = "Kiko";
imprimeDatos();
let logError = [];
try {
  console.log(email);
} catch (error) {
  logError.push(error);
}
imprimeLog(logError);
