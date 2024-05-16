// ejercicio 1 

var misDatos = {
    nombre: "Ramon",
    apellido: "Bunge",
    dni: "46753129",
    comidasFavoritas: ["Ravioles", "Sopa de Calabaza", "Hamburguesa"]
}
console.log(misDatos)

// ejercicio 2

var misDatos = {
    nombre: "Ramon",
    apellido: "Bunge",
    dni: "46753129",
    comidasFavoritas: ["Ravioles", "Sopa de Calabaza", "Hamburguesa"],
    edad: 18,
    saludar: function() {
        var primeraComida = this.comidasFavoritas[0];
        return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primer comida favorita es " + primeraComida + ".";
    }
};

console.log(misDatos.saludar());

// ejercicio 3

var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "blanco",
    posicion: 0,
    avanzar: function(n) {
        if (n > 0) {
            this.posicion += n;
            console.log("El auto avanzó " + n + " unidades");
        } 
    },
    retroceder: function(n) {
        if (n > 0) {
            this.posicion -= n;
            console.log("El auto retrocedió " + n + " unidades");
        } 
    }
}

auto.avanzar(5), 
auto.retroceder(3),
auto.avanzar(10),
auto.retroceder(8),
console.log("La posición final del auto es: " + auto.posicion)

//ejercicio 4

var nuevoAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    color: "blanco",
    posicion: 0,
    moverse: function(n) {
        this.posicion += n;
        if (n > 0) {
            console.log("El auto avanzó " + n + " unidades.");
        } else if (n < 0) {
            console.log("El auto retrocedió " + (-n) + " unidades.");
        }
    }
};


nuevoAuto.moverse(5);
nuevoAuto.moverse(-3);
nuevoAuto.moverse(10);
nuevoAuto.moverse(-8);


console.log("La posición final del auto es: " + nuevoAuto.posicion);
