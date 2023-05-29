let numero1 = prompt("Ingrese el primer número")
let numero2 = prompt("Ingrese el segundo número")

if (numero1 > numero2) {
    console.log("el número más grande es", numero1)
} else if (numero2 > numero1) {
    console.log("el número más grande es", numero2)
} else {
    console.log("los números son iguales")
}