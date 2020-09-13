var nameCar = 'Carlos';
var nameManu = 'Manu';

function toMayus() {
    name1 = nameCar.toUpperCase()
    console.log(name1);
}

function toMinus() {
    name2 = nameManu.toLowerCase()
    console.log(name2);
}
toMayus();
toMinus();

hombre1 = {
    nombre: 'Huan Lee',
    edad: 38,
    complexion: 'robusta',
    estatura: 'baja',
    raza: 'asiatico',
    /**
            eleccion: function choice() {
                number2 = Math.random;
                console.log(number2);
                return number2;
            }
    */
}
mujer1 = {
    nombre: 'Petra Hanks',
    edad: 46,
    complexion: 'delgada',
    estatura: 'alta',
    raza: 'caucasica'
}

var myHuman = new Object()
myHuman.edad = 19;
myHuman.rand = Math.random();
myHuman.estatura;
myHuman.raza;

//myHuman(21, 'medio', 'negro');
console.log(myHuman.rand);

function saludar(humano) {
    //    var nombre  = humano.nombre; this is exactly as the below line
    var { nombre } = humano;
    //    var edad = humano.edad;
    var { edad } = humano;
    //    var raza = humano.raza;
    var { raza } = humano;
    //    var { eleccion } = humano;
    console.log('Hola, soy: ' + `${nombre}`);
    console.log('Tengo: ' + `${edad}` + ' ' + 'annios');
    console.log('Y mi raza es : ' + `${raza}`);
    //    console.log({ nombre });
    console.log(nombre);
    if (nombre == 'Huan Lee') {
        //        choice(5);
        //        console.log(choice);
        //        console.log('Yes, the person is : ' + `${ nombre }` + ' and my election was: ' + `${eleccion}`);
        console.log('Yes, the person is : ' + `${ nombre }`);
    } else {
        console.log('No, the lady is : ' + `${ nombre }`);
    }
}

saludar(hombre1);
saludar(mujer1);