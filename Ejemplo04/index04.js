function ConstructorA(privada, publica) {
    var propiedadPrivada = privada;
    this.propiedadPublica = publica;
    var metodoPrivado = function () {
        console.log("-->propiedadPrivada", propiedadPrivada);
    }
    this.metodoPublico = function () {
        console.log("-->propiedadPublica", this.propiedadPublica);
        metodoPrivado();
    }
}



// Función que se ejecuta al cargar la página
var windowOnLoad = function (e) {

    var miObjeto = new ConstructorA('interna','externa');

    miObjeto.metodoPublico();


    // Aquí recargamos las etiquetas PRE
    SyntaxHighlighter.highlight();
};
// Añadimos el listener y el método que ejecutará.
window.addEventListener('load', windowOnLoad);
