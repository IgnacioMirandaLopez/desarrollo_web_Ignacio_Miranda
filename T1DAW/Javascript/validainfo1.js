const validaregion = (region) => {
    if(!region) return false;
    let lengthValid = name.trim().length >= 4;
    
    return lengthValid;
  }
  const validacomuna = (comuna) => {
    if(!region) return false;
    let lengthValid = name.trim().length >= 4;
    
    return lengthValid;
  }
  
  const validanombre = (nombre) => {
    if(!nombre) return false;
    let lengthValid = name.trim().length >= 4;
    
    return lengthValid;
  }
  
  const validaemail = (email) => {
    if(!region) return false;
    let lengthValid = name.trim().length >= 4;
    
    return lengthValid;
  }
  
  const validainicio = (select) => {
    if(!select) return false;
    return true
  }
  const validatermino = (region) => {
    if(!region) return false;
    let lengthValid = name.trim().length >= 4;
    
    return lengthValid;
  }
  const validatema = (region) => {
    if(!region) return false;
    let lengthValid = name.trim().length >= 4;
    
    return lengthValid;
  }
  const validafoto = (region) => {
    if(!region) return false;
    let lengthValid = name.trim().length >= 4;
    
    return lengthValid;
  }

  const validateForm = () => {
    // obtener elementos del DOM usando el nombre del formulario.
    let myForm = document.forms["formulario"];
    let region = myForm["region"].value;
    let comuna = myForm["comuna"].value;
    let sector = myForm["sector"].value;
    let nombre = myForm["nombre"].files;
    let email = myForm["email"].value;
    let celular = myForm["celular"].value;
    let contacto = myForm["contacto"].value;
    let contactoid = myForm["contacto-id"].value;
    let inicio = myForm["inicio"].value;
    let termino = myForm["termino"].value;
    let descripcion = myForm["descripcion"].value;
    let tema = myForm["tema"].value;
    let temadescripcion = myForm["tema-descripcion"].value;
    let foto = myForm["foto"].value;

  
    // variables auxiliares de validación y función.
    let invalidInputs = [];
    let isValid = true;
    const setInvalidInput = (inputName) => {
      invalidInputs.push(inputName);
      isValid &&= false;
    };
  
    // lógica de validación
    if (!validateName(region)) {
      setInvalidInput("region");
    }
    if (!validateEmail(comuna)) {
      setInvalidInput("comuna");
    }
    if (!validatePhoneNumber(sector)) {
      setInvalidInput("sector");
    }
    if (!validateFiles(nombre)) {
      setInvalidInput("nombre");
    }
    if (!validateSelect(email)) {
      setInvalidInput("email");
    }
    if (!validateSelect(celular)) {
      setInvalidInput("celular");
    }
    if (!validateSelect(contacto)) {
      setInvalidInput("contacto");
    }
    if (!validateSelect(contactoid)) {
        setInvalidInput("contacto-id");
    }
    if (!validateSelect(inicio)) {
        setInvalidInput("inicio");
    }
    if (!validateSelect(termino)) {
        setInvalidInput("termino");
    }
    if (!validateSelect(descripcion)) {
        setInvalidInput("descripcion");
    }
    if (!validateSelect(tema)) {
        setInvalidInput("tema");
    }
    if (!validateSelect(temadescripcion)) {
        setInvalidInput("tema-descripcion");
    }
    if (!validateSelect(foto)) {
        setInvalidInput("foto");
    }
}

