document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("reservaForm");

    const campos = {
        "reserva-nombre": {
            regex: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/,
            required: true,
            error: {
                required: "El nombre es obligatorio.",
                format: "Solo se permiten letras y espacios (3-50 caracteres)."
            }
        },
        "reserva-email": {
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            required: true,
            error: {
                required: "El correo es obligatorio.",
                format: "Formato de correo inválido."
            }
        },
        "reserva-telefono": {
            regex: /^\+?[0-9\s\-()]{7,15}$/,
            required: true,
            error: {
                required: "El teléfono es obligatorio.",
                format: "Formato de teléfono inválido."
            }
        },
        "reserva-rut": {
            regex: /^\d{1,2}\.\d{3}\.\d{3}-[\dKk\d]$/,
            required: true,
            error: {
                required: "El RUT es obligatorio.",
                format: "Formato de RUT inválido. X.XXX.XXX-X"
            }
        },
        "reserva-fecha": {
            required: true,
            error: { required: "La fecha es obligatoria." }
        },
        "reserva-tiempo": {
            required: true,
            error: { required: "Debe seleccionar una hora." }
        },
        "reserva-specialty": {
            required: true,
            error: { required: "Debe seleccionar una especialidad." }
        }
    };

    // Llenar opciones de hora
    const tiempoSelect = document.getElementById("reserva-tiempo");
    const horarios = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
    horarios.forEach(h => {
        const opt = document.createElement("option");
        opt.value = h;
        opt.text = h;
        tiempoSelect.appendChild(opt);
    });

    function mostrarError(id, mensaje) {
        const input = document.getElementById(id);
        limpiarError(id);
        const errorElem = document.createElement("div");
        errorElem.className = "text-danger";
        errorElem.innerText = mensaje;
        input.parentNode.appendChild(errorElem);
        input.classList.add("is-invalid");
    }

    function limpiarError(id) {
        const input = document.getElementById(id);
        const error = input.parentNode.querySelector(".text-danger");
        if (error) error.remove();
        input.classList.remove("is-invalid");
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let valido = true;

        Object.keys(campos).forEach(id => {
            const input = document.getElementById(id);
            const valor = input.value.trim();

            if (campos[id].required) {
                if (input.tagName === "SELECT") {
                    if (!valor) {
                        mostrarError(id, campos[id].error.required);
                        valido = false;
                        return;
                    }
                } else if (!valor) {
                    mostrarError(id, campos[id].error.required);
                    valido = false;
                    return;
                }
            }

            if (valor && campos[id].regex && !campos[id].regex.test(valor)) {
                mostrarError(id, campos[id].error.format);
                valido = false;
            } else {
                limpiarError(id);
            }
        });

        if (valido) {
            alert("¡Formulario válido! Datos enviados.");
            form.reset();
        }
    });

    // Validación en tiempo real
    Object.keys(campos).forEach(id => {
        const input = document.getElementById(id);
        if (input.tagName === "SELECT") {
            input.addEventListener("change", () => limpiarError(id));
        } else {
            input.addEventListener("input", () => limpiarError(id));
        }
    });
});
