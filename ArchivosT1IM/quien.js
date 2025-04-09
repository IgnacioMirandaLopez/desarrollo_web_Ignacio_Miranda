const redes = [
    "Whatsapp",
    "Telegram",
    "X",
    "Instagram",
    "Tiktok",
    "Otra"
  ];
  
  function cargarOpcionesContacto() {
    const contactoSelect = document.getElementById("contacto");
  
    // Agrega opciones
    contactoSelect.innerHTML = '<option value="">Seleccione un método de contacto</option>';
    redes.forEach(red => {
      const option = document.createElement("option");
      option.value = red;
      option.textContent = red;
      contactoSelect.appendChild(option);
    });
  }
  
  function mostrarCampoContacto() {
    const contactoSelect = document.getElementById("contacto");
    const contactoLabel = document.querySelector("label[for='contacto-id']");
    const contactoInput = document.getElementById("contacto-id");
  
    if (contactoSelect.value !== "") {
      contactoLabel.style.display = "block";
      contactoInput.style.display = "block";
  

      contactoLabel.textContent = `Ingrese su usuario o URL de ${contactoSelect.value}:`;
    } else {
      contactoLabel.style.display = "none";
      contactoInput.style.display = "none";
      contactoInput.value = "";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    cargarOpcionesContacto();
    mostrarCampoContacto();
  
    document.getElementById("contacto").addEventListener("change", mostrarCampoContacto);
  });
  