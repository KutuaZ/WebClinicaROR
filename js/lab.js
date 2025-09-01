document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("reservaForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("reserva-nombre");
        const email = document.getElementById("reserva-email");
        const examen = document.getElementById("reserva-examen");
        const fecha = document.getElementById("reserva-fecha");

        let valid = true;

        // Nombre
        if (!nombre.value.trim()) {
            nombre.classList.add("is-invalid");
            valid = false;
        } else {
            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");
        }

        // Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
            email.classList.add("is-invalid");
            valid = false;
        } else {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        }

        // Examen
        if (!examen.value) {
            examen.classList.add("is-invalid");
            valid = false;
        } else {
            examen.classList.remove("is-invalid");
            examen.classList.add("is-valid");
        }

        // Fecha
        if (!fecha.value) {
            fecha.classList.add("is-invalid");
            valid = false;
        } else {
            fecha.classList.remove("is-invalid");
            fecha.classList.add("is-valid");
        }

        if (valid) {
            alert("Formulario válido.");
        }
    });
});