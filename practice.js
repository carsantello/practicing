var nameCar = 'Carlos';
var nameManu = 'Manu';

function toMinus() {
    name1 = nameCar.toUpperCase()
    console.log(name1);
}

toMinus();

hombre1 = {
    nombre: 'Huan Lee',
    edad: 38,
    complexion: 'robusta',
    estatura: 'baja',
    raza: 'asiatico'
}
mujer1 = {
    nombre: 'Petra Hanks',
    edad: 46,
    complexion: 'delgada',
    estatura: 'alta',
    raza: 'caucasica'
}

function saludar(humano) {
    var nombre = humano.nombre;
    console.log(nombre);
    console.log('Hola, soy: ' + `${nombre}`);
    //    console.log(estatura);
}

saludar(hombre1);
saludar(mujer1);