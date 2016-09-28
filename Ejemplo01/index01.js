// FORMAS DE CREAR OBJETOS

// En tiempo de ejecución
var persona = {
    nombre: "Jesus"
    , apellido: "Garcia"
    , edad: 35
};

// Con objeto iniciador
var perro = {
    nombre: "Dartacán"
    , raza: "Dalmata"
    , ladrar: function () {
        document.getElementById("ladrido").innerHTML ="WOOF!!!!!";
        setTimeout(function(){ document.getElementById("ladrido").innerHTML =''; }, 1500);
    }
};

// Con función constructora
function gato(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
}
var miGato = new gato("Sultan", "Mixta");

// Asignar evento
document.getElementById("ladrar").onclick = function () {
    ejercicio.perro.ladrar();
};


var ejercicio = {};

// Atributos
ejercicio.persona = persona;
ejercicio.perro = perro;
ejercicio.gato = gato;

// Métodos
ejercicio.verPersona = function () {
    document.getElementById("1").innerHTML = persona.nombre + ' ' + persona.apellido + ' ' + persona.edad;
};
ejercicio.borrarEdadPersona = function () {
    delete persona.edad;
    document.getElementById("2").innerHTML = persona.nombre + ' ' + persona.apellido + ' ' + persona.edad;
}
ejercicio.verPerro = function () {
    document.getElementById("3").innerHTML += perro.nombre + ' ' + perro.raza;
};
ejercicio.verGato = function () {
    document.getElementById("4").innerHTML += miGato.nombre + ' ' + miGato.raza;
};


// Función que se ejecuta al cargar la página
var windowOnLoad = function (e) {
    // Crear y desturir objetos en tiempo de ejecución
    // 1
    ejercicio.verPersona();
    // 2
    ejercicio.borrarEdadPersona();
    // 3
    ejercicio.verPerro();
    // 4
    ejercicio.verGato();
    // Aquí recargamos las etiquetas PRE
    SyntaxHighlighter.highlight();
};

// Añadimos el listener y el método que ejecutará.
window.addEventListener('load', windowOnLoad);
