document.addEventListener('DOMContentLoaded', function () {
    //acá agarro los elementos del DOM para usarlos
    const cantidadInput = document.querySelector('.cantidad');
    const totalElement = document.getElementById('total');

    const precioTicket = 200;

    function actualizarTotal() {
        const cantidad = cantidadInput.value ? parseInt(cantidadInput.value) : 0;
        const total = cantidad * precioTicket;
        totalElement.textContent = total;
    }

    cantidadInput.addEventListener('input', actualizarTotal);
});