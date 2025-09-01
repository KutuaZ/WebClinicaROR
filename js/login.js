document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("login-email");
        const password = document.getElementById("login-password");
        let valid = true;

        // Validar email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
            valid = false;
        } else {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        }

        // Validar contraseña mínimo 6 caracteres
        if (!password.value.trim() || password.value.trim().length < 6) {
            password.classList.add("is-invalid");
            password.classList.remove("is-valid");
            valid = false;
        } else {
            password.classList.remove("is-invalid");
            password.classList.add("is-valid");
        }

        if (valid) {
            alert("Formulario válido\n");
            // form.submit(); // descomenta si quieres enviar el formulario
        }
    });
});