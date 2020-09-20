var personita = {
    personitaName: 'Pedro',
    personitaLastName: 'Paramo',
    personitaEdad: 99
}
var nameCar = 'Carlos';
var nameManu = 'Manu';

function toMayus({ personitaName }) {
    //    var personitaUpperName = personitaName.toUpperCase()
    console.log(personitaName.toUpperCase());
}

const toMin = ({ nombre }) => nombre.toUpperCase();

function toMinus(nombre) {
    console.log(toMin(nombre));
    toMin(nombre);
    console.log(`${hombre1.nombre}  - este es el nombre pasado por la funcion de minusculas`);
    //    console.log(`${ nombre } se ha convertido a minus`);
}

function toExpand(hombre1) {
    return {
        ...hombre1
        //        console.log(hombre1);
    }
}

toMayus(personita);

hombre1 = {
    nombre: 'Huancho Leen',
    edad: 35,
    complexion: 'robusta',
    estatura: 'baja',
    altura: 1.86,
    raza: 'asiatico',
    /**
     eleccion: function choice() {
         number2 = Math.random;
         console.log(number2);
         return number2;
        }
        */
}
console.log('about to enter to toMinus function');
/**
    toExpand(hombre1);
    console.log(hombre1);
*/
//console.log(hombre1 === hombre1);
toMinus(hombre1);


mujer1 = {
    nombre: 'Petra Hanks',
    edad: 46,
    complexion: 'delgada',
    estatura: 'alta',
    altura: 1.56,
    raza: 'caucasica'
}
toMinus(mujer1);
/**
    var male = new Object(),
        name = 'Carlos',
        lastName = 'Sanchez',
        gender = 'male',
        age = 17,
        rocker = true,
        sportbilly = false,
        learner = true,
        engineer = true,
        singer = false,
        dreamer = true,
        guitarrist = false
    
*/
male = {
    name: 'Carlos',
    lastName: 'Sanchez',
    gender: 'male',
    age: 17,
    rocker: true,
    sportbilly: false,
    learner: true,
    engineer: true,
    singer: false,
    dreamer: true,
    guitarrist: false

}


female = {
    name: 'Constanza Atkins',
    age: 19,
    sportbilly: true,
    rocker: false

}

console.log(female);
console.log(`${ female.rocker }`);
for (const property in mujer1) {
    console.log(`${property}:${mujer1[property]}`);
}

function hobbiesProfessions(humans) {

    if (humans.rocker) {
        console.log(`Yes, ${humans.name} is already a rocker`);
    } else {
        console.log(`No, ${humans.name} is not a rocker`);
    }

    if (humans.sportbilly) {
        console.log(`Yes, ${humans.name} is already a sportbilly`);
    } else {
        console.log(`No, ${humans.name} is not a sportbilly`);
    }
    //    console.log(`${humans.learner}`);
    if (humans.learner) {
        console.log(`Yes, ${humans.name} is already a lerner`);
    } else {
        console.log(`No, ${humans.name} is not a lerner`);
    }
    /**
            if (`${humans.rocker}`) {
                console.log(`Yes, ${humans.name} is already a rocker`);
            } else {
                console.log(`No, ${humans.name} is not a rocker`);
            }
        
            if (`${humans.sportbilly}`) {
                console.log(`Yes, ${humans.name} is already a sportbilly`);
            } else {
                console.log(`No, ${humans.name} is not a sportbilly`);
            }
            //    console.log(`${humans.learner}`);
            if (`${humans.learner}`) {
                console.log(`Yes, ${humans.name} is already a lerner`);
            } else {
                console.log(`No, ${humans.name} is not a lerner`);
            }
    */
    /**
            if (`${age}` >= 18) {
                console.log(`${name} es mayor de edad`);
            } else {
                console.log(`${name} es menor de edad`);
            }
    */
}
/**
    function iterate(myHuman) {
        console.log('enter function')
        console.log(rand);
    }
    
    */
//iterate();

//myHuman(21, 'medio', 'negro');

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

//console.log('la edad :' + hombre1.edad);

function cumpleanios(hombre1) {
    return {
        ...hombre1,
        edad: hombre1.edad += 1
    }
    //    return edad;
}

saludar(hombre1);
saludar(mujer1);
cumpleanios(hombre1);
console.log(hombre1.edad);
hombre1;

const LEGAL_AGE = 18;

/**
    var legalAge = function(person) {
        return `${person.age}` >= LEGAL_AGE;
    }
*/
//the arrow function gaves us this notation
const legalAge = ({ age }) => age >= LEGAL_AGE;



function printIfPlus18(person) {
    if (legalAge(person)) {
        console.log(`${person.name} es mayor de edad`);
    } else {
        console.log(`${person.name} es menor de edad`);
    }
}


function isLegalAge(person) {
    if (!legalAge(person)) {
        console.log(`MMhh no, sorry, ${person.name} is below legal age`);
    }
}

function allowAcces(person) {
    if (!legalAge(person)) {
        console.log('Access denied!!');
    }
}
isLegalAge(male);
isLegalAge(female);
printIfPlus18(male);
printIfPlus18(female);
//printIfPlus18(human);
hobbiesProfessions(male);
hobbiesProfessions(female);
allowAcces(male);
allowAcces(female);
Promise.resolve().then(function() {
    console.log('Hola');
})
console.log('Mundo');

let objeto = new(function Clase() {})

/**
    function dummy({
        if (Math.floor(Date.now() / 1000) % 2 === 0)
            return Promise.resolve('Hello, world!');
        return Promise.reject('error!');
    })
    
    dummy();
*/
//class 20 18/09/2020
var personas = [hombre1, mujer1];
console.log(personas.length);
/**
    personas.forEach(nombre => {
        console.log(personas);
        console.log(nombre);
    });
*/
for (i = 0; i < personas.length; i++) {
    //    console.log({ nombre: personas[i] });
    var persons = personas[i];
    console.log(`${persons.nombre } es de raza: ${persons.raza }  y de complexion: ${persons.complexion }  `);
}

const esVieja = ({ edad }) => edad > 37;

var personasViejas = personas.filter(esVieja)
console.log(personasViejas);

//class 21 - transforming an array
//const pasarPersonasAltas = ({ altura }) => altura * 100;
const pasarPersonasAltas = persona => {
    persona.altura * 100
    return persona;
}
var personasCms = personas.map(pasarPersonasAltas);
console.log(personasCms);