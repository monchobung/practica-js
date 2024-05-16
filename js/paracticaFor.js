// ejercicio 1

//a 
for (let i = 0; i < 10; i++) {
    console.log("La variable i tiene el valor " + i);
}


//b.
for (var i = 0; i < 10; i++) {
    console.log("La variable i tiene el valor " + i);
}

//c
for (var i = 2; i <= 20; i += 2) {
    console.log(i);
}

for (var i = 5; i <= 250; i += 5) {
    console.log(i);
}

//d
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

//ejercicio 2 

//a
var base = 5;

var resultados = [];

for (var i = 1; i <= 10; i++) {
    resultados.push(base * i);
}

//b
for (var i = 1; i <= 10; i++) {
    resultados.push(i);
}

//c

var multiplicador = 5;

var resultados = [];

for (var i = 1; i <= 10; i++) {
   
    resultados.push(multiplicador * i);
}

//d
console.log(resultados);

//ejercicio 3 


var ganancias = [100, -50, 200, -100, 300, -200, 400, -300, 500, -400];

var sumaTotal = 0;

for (var i = 0; i < ganancias.length; i++) {
    sumaTotal += ganancias[i];
}

console.log(sumaTotal);



//ejercicio 4 
//a
let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];


for (var i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i]);
}
//b

let healingIsDifficultb = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

// Imprimir la lista de temas con el número de orden del track
for (var i = 0; i < healingIsDifficultb.length; i++) {
    console.log((i + 1) + " " + healingIsDifficult[i]);
}

//ejercicio 5 
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];


for (var i = 0; i < got.length; i++) {
    console.log("Hola " + got[i].nombre + " " + got[i].apellido + " criatura viajera!");
}
//b 

for (var i = 0; i < got.length; i++) {
    if (got[i].ciudad) {
        console.log("Soy " + got[i].nombre + " " + got[i].apellido + " de la ciudad " + got[i].ciudad);
    }
}
