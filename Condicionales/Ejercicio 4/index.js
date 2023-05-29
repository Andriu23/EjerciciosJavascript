let numero1 = prompt("Ingrese el primer número")
let numero2 = prompt("Ingrese el segundo número")
let numero3 = prompt("Ingrese el tercer número")

if (numero1 <= numero2 && numero1 <= numero3) {
    console.log("el número", numero1, "es el más chico")
} else if (numero2 <= numero1 && numero2 <= numero3) {
    console.log("el número", numero2, "es el más chico")
} else {
    console.log("el número", numero3, "es el más chico")
}