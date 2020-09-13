var nameCar = 'Carlos';
var nameManu = 'Manu';

function toMayus() {
    name1 = nameCar.toUpperCase()
    console.log(name1);
}

function toMinus() {
    name1 = nameCar.toLowerCase()
    console.log(name1);
}
toMayus();
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
    //    var nombre  = humano.nombre; this is exactly as the below line
    var { nombre } = humano;
    var edad = humano.edad;
    var raza = humano.raza;
    console.log('Hola, soy: ' + `${nombre}`);
    console.log('Tengo: ' + `${edad}` + ' ' + 'annios');
    console.log('Y mi raza es : ' + `${raza}`);
    //    console.log(estatura);
}

saludar(hombre1);
saludar(mujer1);