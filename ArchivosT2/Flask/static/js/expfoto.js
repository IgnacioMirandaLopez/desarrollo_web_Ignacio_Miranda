function agrandarfoto1() {
    document.getElementById("foto1grande").style.display = "block";
    document.getElementById("tabla").style.display = "none";
}
function agrandarfoto2() {
    document.getElementById("foto2grande").style.display = "block";
    document.getElementById("tabla").style.display = "none";
}
function cerrar() {
    document.getElementById("foto1grande").style.display = "none";
    document.getElementById("foto2grande").style.display = "none";
    document.getElementById("tabla").style.display = "block";
}