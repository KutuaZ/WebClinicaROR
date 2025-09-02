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
        }
    });
});


/*formulario validacion telemedicina*/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("telemedForm");
    const messageInput = document.getElementById("telemed-message");
    const wordCount = document.getElementById("telemedWordCount");
    const maxWords = 50;

    //  contar palabras
    function countWords(text) {
        if (!text.trim()) return 0;
        return text.trim().split(/\s+/).length;
    }

    // Actualiza contador de palabras mientras se escribe
    messageInput.addEventListener("input", function() {
        let words = countWords(this.value);
        if (words > maxWords) {
            // Limita a 50 palabras
            let trimmed = this.value.split(/\s+/).slice(0, maxWords).join(" ");
            this.value = trimmed;
            words = maxWords;
        }
        wordCount.textContent = `${words} / ${maxWords} palabras`;
    });

    // Validación al enviar
    form.addEventListener("submit", function(e) {
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        form.classList.add("was-validated");
    }, false);
});
// fin formulario telemedicina




// validacion aranceles 

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("arancelForm");

    form.addEventListener("submit", function(e) {
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            alert("Solicitud enviada. Se enviará el presupuesto a tu correo.");
            e.preventDefault(); 
        }
        form.classList.add("was-validated");
    }, false);
});