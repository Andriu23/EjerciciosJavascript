let edad = prompt("Ingresa tu edad")

if (edad >= 0 && edad <= 12) {
    alert("eres un infante")
} else if (edad >= 13 && edad <= 18) {
    alert("eres un adolescente")
} else if (edad >= 19 && edad <= 45) {
    alert("eres un mayor joven")
} else if (edad >= 45 && edad <= 100) {
    alert("eres un anciano")
} else if (edad > 100) {
    alert("¿en realidad tienes esa edad?")
}