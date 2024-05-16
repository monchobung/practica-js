//ejercicio 1


function rectangulo(altura, ancho) {
    return altura * ancho;
}


console.log(rectangulo(5, 8)); 
console.log(rectangulo(10, 3));



//ejercicio 2


function triangulo(base, altura) {
    return (base * altura) / 2;
}

console.log(triangulo(5, 8));


// ejercicio 3

function largoDelArray(array) {
    return array.length;
}


const miArray = [1, 2, 3, 4, 5]
console.log(largoDelArray(miArray)); 

// ejercicio 4

function cantidadDeLetras(palabra) {
    return palabra.length;
}

const leo = "messi";
console.log(cantidadDeLetras(leo));

// ejercicio 5

function persoADolar(pesos) {
    return pesos / 1090;  

}

console.log(persoADolar(50000));

// ejercicio 6

function precioFinal(precio) {
    var iva = 0.21;
    var precioConIva = precio * (1 + iva);
    return precioConIva;
}

console.log(precioFinal(500))

//ejercicio 7

function division (numero) {
    return numero/2
}


console.log(division(10))

