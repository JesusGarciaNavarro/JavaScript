// Clase Coche
function Coche(modelo,marca,color,estado) {
 this.modelo = modelo;
 this.marca = marca;
 this.color = color;
 this.estado = estado;
}

// Los métodos los ponenmos con prototype
Coche.prototype.arrancar = function() {
this.estado = 'arrancado';
console.log(this.estado);
};


// Clase Turismo
function Turismo(modelo,marca,color,estado,motor){
    Coche.call(this,modelo,marca,color,estado);
    this.motor = motor;
}

// A continuación tenemos que referenciar los prototype
Turismo.prototype = Object.create(Coche.prototype);

// Añadimos nuevos métodos.
Turismo.prototype.verMotor = function(){
    console.log(this.motor);
}


// Función que se ejecuta al cargar la página
var windowOnLoad = function (e) {


    // 1
    var miCoche = new Coche('seat','ibiza','azul','apagado');
    miCoche.arrancar();


    //2
    var miTurismo = new Turismo('seat','ibiza','azul','apagado',1900);
    miTurismo.arrancar();
    miTurismo.verMotor();

    // Aquí recargamos las etiquetas PRE
    SyntaxHighlighter.highlight();
};

// Añadimos el listener y el método que ejecutará.
window.addEventListener('load', windowOnLoad);
