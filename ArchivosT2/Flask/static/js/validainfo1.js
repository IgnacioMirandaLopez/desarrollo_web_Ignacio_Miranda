const validaregion = (region) => {
  if (!region) return false;
  return true;
}

const validacomuna = (comuna) => {
  if (!comuna) return false;
  return true;
}

const validanombre = (nombre) => {
  if (!nombre) return false;
  let lengthValid = nombre.trim().length <= 200;
  return lengthValid;
}

const validaemail = (email) => {
  if (!email) return false;
  let lengthValid = email.length <= 100;
  let re = /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let formatValid = re.test(email);
  return lengthValid && formatValid;
}

const validacelular = (celular) => {
  if (!celular) return false;
  let lengthValid = celular.trim().length = 9;
  return lengthValid;
}

const validainicio = (inicio) => {
  if (!inicio) return false;
  return true;
}

const validatermino = (termino) => {
  if (!termino) return false;
  return true;
}

const validatema = (tema) => {
  if (!tema) return false;
  return true;
}

const validatemadescripcion = (temadescripcion) => {
  if (!temadescripcion) return false;
  let lengthValid = temadescripcion.trim().length <= 15;
  return lengthValid;
}

const validafoto = (foto) => {
  if (!foto) return false;
  let lengthValid = 1 <= foto.files.length && foto.files.length <= 5;
  let typeValid = true;
  for (const file of foto.files) {
    let fileFamily = file.type.split("/")[0];
    typeValid &&= fileFamily == "image";
  }
  return lengthValid && typeValid;
}

const validaForm = () => {
  let myForm = document.forms["formularioActividad"];
  let region = myForm["region"].value;
  let comuna = myForm["comuna"].value;
  let nombre = myForm["nombre"].value;
  let email = myForm["email"].value;
  let celular = myForm["celular"].value;
  let inicio = myForm["inicio"].value;
  let termino = myForm["termino"].value;
  let tema = myForm["tema"].value;
  let foto = myForm["foto"];

  let invalidInputs = [];
  let isValid = true;

  let inputs = myForm.querySelectorAll("input, select, textarea");
  inputs.forEach(input => {
    input.style.borderColor = ""; 
  });

  const setInvalidInput = (inputName, element) => {
    invalidInputs.push(inputName);
    isValid &&= false;
    element.style.borderColor = "red";
  };

  if (!validaregion(region)) setInvalidInput("region", myForm["region"]);
  if (!validacomuna(comuna)) setInvalidInput("comuna", myForm["comuna"]);
  if (!validanombre(nombre)) setInvalidInput("nombre", myForm["nombre"]);
  if (!validaemail(email)) setInvalidInput("email", myForm["email"]);
  if (!validacelular(celular)) setInvalidInput("celular", myForm["celular"]);
  if (!validainicio(inicio)) setInvalidInput("inicio", myForm["inicio"]);
  if (!validatermino(termino)) setInvalidInput("termino", myForm["termino"]);
  if (!validatema(tema)) setInvalidInput("tema", myForm["tema"]);
  if (!validafoto(foto)) setInvalidInput("foto", myForm["foto"]);


  let validationBox = document.getElementById("val-box");
  let validationMessageElem = document.getElementById("val-msg");
  let validationListElem = document.getElementById("val-list");
  let formContainer = document.querySelector(".main-container");

  if (!isValid) {
    validationListElem.textContent = "";
    for (let input of invalidInputs) {
      let listElement = document.createElement("li");
      listElement.innerText = input;
      validationListElem.append(listElement);
    }
    validationMessageElem.innerText = "Los siguientes campos son inválidos:";
    validationBox.style.backgroundColor = "#ffdddd";
    validationBox.style.borderLeftColor = "#f44336";
    validationBox.hidden = false;
  } else {
    
    myForm.style.display = "none";
    validationMessageElem.innerText = "¿Está seguro que desea agregar esta actividad?";
    validationListElem.textContent = "";

    validationBox.style.backgroundColor = "#ddffdd";
    validationBox.style.borderLeftColor = "#4CAF50";

    let submitButton = document.createElement("button");
    submitButton.innerText = "Sí, estoy seguro";
    submitButton.style.marginRight = "10px";
    submitButton.addEventListener("click", () => {

      document.getElementById("mensajeFinal").style.display = "block";
      validationBox.style.display = "none";

    });

    let backButton = document.createElement("button");
    backButton.innerText = "“No, no estoy seguro, quiero volver al formulario";
    backButton.addEventListener("click", () => {
      myForm.style.display = "block";
      validationBox.hidden = true;
      document.getElementById("mensajeFinal").style.display = "none";
    });

    validationListElem.appendChild(submitButton);
    validationListElem.appendChild(backButton);
    validationBox.hidden = false;
  }
}

document.getElementById("submit-btn").addEventListener("click", validaForm);
