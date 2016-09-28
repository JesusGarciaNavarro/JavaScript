function Coche(modelo,marca,color,estado) {
 this.modelo = modelo;
 this.marca = marca;
 this.color = color;
 this.estado = estado;
}

// Añadimos un atributo estático
Coche.contador = 0;

// Añadimos un método estático
Coche.verTotal = function(){
    console.log(this.contador);

}

// Función que se ejecuta al cargar la página
var windowOnLoad = function (e) {


Coche.verTotal();


    // Aquí recargamos las etiquetas PRE
    SyntaxHighlighter.highlight();
};

// Añadimos el listener y el método que ejecutará.
window.addEventListener('load', windowOnLoad);
