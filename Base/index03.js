
// Función que se ejecuta al cargar la página
var windowOnLoad = function (e) {





    // Aquí recargamos las etiquetas PRE
    SyntaxHighlighter.highlight();
};

// Añadimos el listener y el método que ejecutará.
window.addEventListener('load', windowOnLoad);
