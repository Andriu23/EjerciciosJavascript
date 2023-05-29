let nombre = prompt("Ingrese su nombre")
let edad = prompt("Ingrese su edad")
let altura = prompt("Ingrese su altura, en centímetros")
let vision = prompt("Ingrese su visión, de 0 a 8")

let estaCapacitadoParaConducir = edad >= 18 && altura > 150 && vision >= 8;

if (estaCapacitadoParaConducir) {
    console.log(nombre, "está capacitado para conducir")
} else {
    console.log(nombre, "no está capacitado para conducir")
}