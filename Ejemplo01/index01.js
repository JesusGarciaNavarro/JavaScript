// Función que se ejecuta al cargar la página
var windowOnLoad = function (e) {

    // Crear y desturir objetos en tiempo de ejecución


    // 1
    var persona = {};
    persona.nombre = "Jesus";
    persona.apellido = "Garcia";
    persona.edad = 35;


    document.getElementById("1").innerHTML += '<br>' + persona.nombre + ' ' + persona.apellido + ' ' + persona.edad;

    // 2
    delete persona.edad;

    document.getElementById("2").innerHTML += '<br>' + persona.nombre + ' ' + persona.apellido + ' ' + persona.edad;


    // 3
    var perro ={
      nombre: "Dartacán",
        raza: "Dalmata"
    };

     document.getElementById("3").innerHTML += '<br>' + perro.nombre + ' ' + perro.raza;

    // 4
    function gato(nombre,raza){
        this.nombre = nombre;
        this.raza = raza;
    }

};


// Añadimos el listener y el método que ejecutará.
window.addEventListener('load', windowOnLoad);
