// ejerciciosJavaScript
let miNombre = "Ander";
let miApellido = "Sato";
let miEdad = 32;
let miMascota = "Yogo";
let edadMascota = 3;

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

let nombreCompleto = (miNombre + " " + miApellido);
console.log(nombreCompleto);

let textoPresentacion = (`Soy ${miNombre} ${miApellido}, tengo una mascota llamada ${miMascota} con una edad ${edadMascota}`);
console.log(textoPresentacion);

let sumaEdades = (miEdad + edadMascota);
console.log(sumaEdades);

let restaEdades = (miEdad - edadMascota);
console.log(restaEdades);

let productoEdades = (miEdad * edadMascota);
console.log(productoEdades);

let divisionEdades = ( miEdad / edadMascota);
console.log(divisionEdades);

let textoPresentacion2 = (`la suma de mi edad y la de mi mascota es ${sumaEdades}, la resta de las edades es ${restaEdades}, el producto de las edad es ${productoEdades}, la division de las edades es ${divisionEdades}`);
console.log(textoPresentacion2);

const alumno = {
    nombre: "Andres",
    apellido: "satoba",
    edad: 32,
    curso: "Javascript",
    calificacion: 5,
};
console.table(alumno)
console.log(alumno.nombre);
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.curso)
console.log(alumno.calificacion)

const mascota = {
    raza: "Labrador Retriever",
    edad: 2,
    genero: "Macho",
    color: "Cafe",
    pesoKilogramos: 25
};
console.table(mascota);
console.log(mascota.raza);
console.log(mascota.edad);
console.log(mascota.genero);
console.log(mascota.color);
console.log(mascota.pesoKilogramos);

const fruits = ["Pera","Mango","Manzana","Mandarina","Melon"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

const numeros = [27,12,5,17,21];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

const familia = ["Claudia","Andres","David","Nazly","Sandra"];
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

let textoAleatorio = (`la ${fruits[2]} numero ${numeros[3]} es de ${familia[4]}`);
console.log(textoAleatorio);

let tuEdad = prompt("ingresa tu edad")
console.log("Mi edad es" + " " + tuEdad)

let edadCompañero = prompt("ingresa la edad de tu compañero")
console.log("La edad de mi compañero es" + " " + edadCompañero)

let edadIguales = (tuEdad === edadCompañero)
console.log("Mi edad es igual a la de mi compañero: " +  edadIguales)

let soyMayor = (tuEdad > edadCompañero)
console.log("Mi edad es mayor a la de mi compañero: " +  soyMayor)

let soyMenor = (tuEdad < edadCompañero)
console.log("Mi edad es menor a la de mi compañero: " +  soyMenor)

let soyMayorDeEdad = (tuEdad >= 18)
console.log("Soy mayor de edad: " , soyMayorDeEdad)

let edad = prompt ("ingresa tu edad")
let altura = prompt ("ingresa tu altura")


let puedeSubir = (edad > 6 && altura < 120 )
console.log("Puede subir a la atracción " , puedeSubir);



//ejerciciosCondicionales
