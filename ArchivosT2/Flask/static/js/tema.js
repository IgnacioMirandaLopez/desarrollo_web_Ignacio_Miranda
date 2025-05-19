const temas = [
    "Música",
    "Deporte",
    "Ciencias",
    "Religión",
    "Política",
    "Tecnología",
    "Juegos",
    "Baile",
    "Comida",
    "Otro"
  ];
  
  function cargarOpcionestema() {
    const temaSelect = document.getElementById("tema");
  
    // Agrega opciones
    temaSelect.innerHTML = '<option value="">Seleccione un tema</option>';
    temas.forEach(tema => {
      const option = document.createElement("option");
      option.value = tema;
      option.textContent = tema;
      temaSelect.appendChild(option);
    });
  }
  
  function mostrarCampotema() {
    const temaSelect = document.getElementById("tema");
    const temaLabel = document.querySelector("label[for='tema-descripcion']");
    const temaInput = document.getElementById("tema-descripcion");
  
    if (temaSelect.value == "Otro") {
        temaLabel.style.display = "block";
        temaInput.style.display = "block";
  

      temaLabel.textContent = `Describe tu tema:`;
    } else {
      temaLabel.style.display = "none";
      temaInput.style.display = "none";
      temaInput.value = "";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    cargarOpcionestema();
    mostrarCampotema();
  
    document.getElementById("tema").addEventListener("change", mostrarCampotema);
  });
  