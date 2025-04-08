function mostrarConfirmacion() {
    document.getElementById("formularioActividad").style.display = "none";
    document.getElementById("confirmacion").style.display = "block";
}

function cancelarEnvio() {
    document.getElementById("confirmacion").style.display = "none";
    document.getElementById("formularioActividad").style.display = "block";
}

function confirmarEnvio() {
    document.getElementById("confirmacion").style.display = "none";
    document.getElementById("mensajeFinal").style.display = "block";
}

function volverAPortada() {
    window.location.href = "Portadaa.html";
}
