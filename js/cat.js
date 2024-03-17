document.addEventListener('DOMContentLoaded', function () {
    const detalles = document.querySelectorAll('#cat details');

    detalles.forEach(detalle => {
        const summary = detalle.querySelector('summary');

        summary.addEventListener('click', (event) => {
            event.stopPropagation();

            // Cerrar todos los detalles hermanos
            detalle.parentNode.querySelectorAll('details').forEach(item => {
                if (item !== detalle) {
                    item.removeAttribute('open');
                }
            });
        });
    });
});