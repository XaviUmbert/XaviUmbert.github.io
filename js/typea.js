window.addEventListener('DOMContentLoaded', function() {
    var nestedOLs = document.querySelectorAll('ol ol'); // Seleccionar todos los elementos ol anidados
    nestedOLs.forEach(function(ol) {
        ol.setAttribute('type', 'a'); // Establecer el atributo type como 'a'
    });
});