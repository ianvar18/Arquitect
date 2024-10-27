document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('consentimiento');
    const btnReserva = document.getElementById('btnReserva');
    const popup = document.getElementById('reservaPopup');
    const closeBtn = document.querySelector('.close');
    const reservaForm = document.getElementById('reservaForm');
    const btnConfirmar = document.getElementById('confirmarReserva');

    // Habilitar/deshabilitar botón según checkbox
    checkbox.addEventListener('change', function() {
        btnReserva.disabled = !this.checked;
    });

    // Mostrar popup
    btnReserva.addEventListener('click', function() {
        popup.classList.add('active');
    });

    // Cerrar popup
    closeBtn.addEventListener('click', function() {
        popup.classList.remove('active');
    });

    // Cerrar popup al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.classList.remove('active');
        }
    });

    // Manejar envío del formulario
    reservaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener y validar los campos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        
        // Validar que los campos no estén vacíos
        if (!nombre || !email || !telefono) {
            alert('Por favor, complete todos los datos del paciente antes de reservar.');
            return;
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un email válido.');
            return;
        }

        // Validar formato de teléfono
        const telefonoRegex = /^\d{9}$/;
        if (!telefonoRegex.test(telefono)) {
            alert('Por favor, ingrese un número de teléfono válido (9 dígitos).');
            return;
        }

        // Si todas las validaciones pasan, mostrar mensaje de éxito
        alert('¡Solicitud enviada con éxito! Ahora serás redireccionado a la página de pagos.');
        popup.classList.remove('active');
        reservaForm.reset();
    });

    // Redirección al hacer clic en "Confirmar Reserva"
    if (btnConfirmar) {
        btnConfirmar.addEventListener('click', function() {
            // Obtener los valores de los campos
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            
            // Validar que los campos no estén vacíos
            if (!nombre || !email || !telefono) {
                alert('Por favor, complete todos los datos del paciente antes de confirmar la reserva.');
                return;
            }

            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingrese un email válido.');
                return;
            }

            // Validar formato de teléfono (ajusta según tu necesidad)
            const telefonoRegex = /^\d{9}$/;  // Para 9 dígitos
            if (!telefonoRegex.test(telefono)) {
                alert('Por favor, ingrese un número de teléfono válido (9 dígitos).');
                return;
            }

            // Si todo está correcto, redirigir a la página de pagos
            window.location.href = 'pagos.html';
        });
    }

    function validarCampos() {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        
        const btnConfirmar = document.getElementById('confirmarReserva');
        
        if (nombre && email && telefono) {
            btnConfirmar.removeAttribute('disabled');
            btnConfirmar.style.opacity = '1';
            btnConfirmar.style.cursor = 'pointer';
        } else {
            btnConfirmar.setAttribute('disabled', 'true');
            btnConfirmar.style.opacity = '0.5';
            btnConfirmar.style.cursor = 'not-allowed';
        }
    }

    // Agregar los event listeners a los campos
    document.getElementById('nombre').addEventListener('input', validarCampos);
    document.getElementById('email').addEventListener('input', validarCampos);
    document.getElementById('telefono').addEventListener('input', validarCampos);

    function reservarCita() {
        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        
        // Validar que los campos no estén vacíos
        if (!nombre || !email || !telefono) {
            alert('Por favor, complete todos los datos del paciente antes de reservar.');
            return false; // Detiene el proceso de reserva
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un email válido.');
            return false;
        }

        // Validar formato de teléfono
        const telefonoRegex = /^\d{9}$/;
        if (!telefonoRegex.test(telefono)) {
            alert('Por favor, ingrese un número de teléfono válido (9 dígitos).');
            return false;
        }

        // Si todas las validaciones pasan, mostrar el popup
        document.getElementById('popup').style.display = 'block';
        return true;
    }

    // Modificar el event listener del botón de reservar
    document.querySelector('.btn-reservar').addEventListener('click', function(e) {
        e.preventDefault();
        if (!reservarCita()) {
            return; // No muestra el mensaje de éxito si la validación falla
        }
    });
});
