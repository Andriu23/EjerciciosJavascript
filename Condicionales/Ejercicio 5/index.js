let persona1 = {
    nombre: "David", 
    edad: 14, 
    altura: 185
}
let persona2 = {
     nombre: "Ander", 
     edad: 32, 
     altura: 160
}

if (persona1.altura > persona2.altura) {
    console.log("la persona más alta es", persona1.nombre)
} else if (persona2.altura > persona1.altura) {
    console.log("la persona más alta es", persona2.nombre)
} else {
    console.log("ambas personas", persona1.nombre, "y", persona2.nombre, "son igual de altas")
}

if (persona1.edad > persona2.edad) {
    console.log("la persona de mayor edad es", persona1.nombre)
} else if (persona2.edad > persona1.edad) {
    console.log("la persona de mayor edad es", persona2.nombre)
} else {
    console.log("ambas personas", persona1.nombre, "y", persona2.nombre, "tienen la misma edad")
}