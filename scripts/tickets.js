document.addEventListener('DOMContentLoaded', function () {
    const cantidadInput = document.querySelector('.cantidad');
    const totalElement = document.getElementById('total');
    const categoryInput = document.querySelector('.category');
    const formulario = document.querySelector('form');

    const precioTicket = 200;
    const descuentos = {
        1: 80, // Estudiante
        2: 50, // Trainee
        3: 15  // Junior
    };

    function aplicarDescuento(precio, categoria) {
        return precio * (descuentos[categoria] / 100);
    }

    function actualizarTotal() {
        const cantidad = cantidadInput.value ? parseInt(cantidadInput.value) : 0;
        const categoria = categoryInput.value;
        const precioConDescuento = precioTicket - aplicarDescuento(precioTicket, categoria);
        const total = cantidad * precioConDescuento;
        totalElement.textContent = total;
    }

    const botonResumen = document.querySelector('.btn-resumen');
    botonResumen.addEventListener('click', function () {
        actualizarTotal();
    });

    const botonBorrar = document.querySelector('.btn-borrar');
    botonBorrar.addEventListener('click', function () {
        formulario.reset();
        totalElement.textContent = '0';
    });
});
