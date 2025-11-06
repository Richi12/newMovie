class Animales {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    hacerSonido() {
        return `${this.nombre} hace un sonido.`;
    }

    nadar() {
        return `${this.nombre} está nadando.`;
    }

    correr() {
        return `${nombre} esta corriendo.`;
    }
}

class Perro extends Animales {
    constructor(nombre, edad, raza) {
        super(nombre, "perro")
        this.edad = edad;
        this.raza = raza;
    }

    ladrar() {
        return `${this.nombre} es de raza ${this.raza} de ${this.edad} años y dice: Guau Guau!`;
    }
}