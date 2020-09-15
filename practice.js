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

function toMinus() {
    name2 = nameManu.toLowerCase()
    console.log(name2);
}
toMayus(personita);
toMinus();

hombre1 = {
    nombre: 'Huan Lee',
    edad: 35,
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
    sportbilly: true

}

console.log(typeof(female));
console.log(`${ female.name }`);
for (const property in mujer1) {
    console.log(`${property}:${mujer1[property]}`);
}

function hobbiesProfessions(humans) {
    console.log(`${ humans.age }`);
    if (`${humans.rocker}`) {
        console.log(`Yes, ${humans.name} is already a rocker`);
    } else {
        console.log(`No, ${humans.name} is not a rocker`);
    }

    if (`${humans.sportbilly}` === false) {
        console.log(`Yes, ${humans.name} is already a sportbilly`);
    } else {
        console.log(`No, ${humans.name} is not a sportbilly`);
    }

    if (`${humans.learner}`) {
        console.log(`Yes, ${humans.name} is already a lerner`);
    } else {
        console.log(`No, ${humans.name} is not a lerner`);
    }
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

function legalAge(person) {
    return `${person.age}` >= LEGAL_AGE;
}

function printIfPlus18(person) {
    if (legalAge(person)) {
        console.log(`${person.name} es mayor de edad`);
    } else {
        console.log(`${person.name} es menor de edad`);
    }
}

printIfPlus18(male);
printIfPlus18(female);
//printIfPlus18(human);
hobbiesProfessions(male);
hobbiesProfessions(female);