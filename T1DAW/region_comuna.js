document.addEventListener("DOMContentLoaded", () => {
    const data = {
        "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
        "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
        "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
        "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Freirina", "Huasco", "Alto del Carmen"],
        "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado", "Illapel", "Canela", "Los Vilos", "Salamanca"],
        "Valparaíso": ["Valparaíso", "Viña del Mar", "Concón", "Quintero", "Puchuncaví", "Casablanca", "Juan Fernández", "Quilpué", "Villa Alemana", "Limache", "Olmué", "San Antonio", "Cartagena", "El Tabo", "El Quisco", "Algarrobo", "Santo Domingo", "San Felipe", "Llaillay", "Putaendo", "Santa María", "Catemu", "Panquehue", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Petorca", "Cabildo", "Zapallar", "Papudo"],
        "Metropolitana de Santiago": ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "San Bernardo", "Pirque", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor", "Talagante", "Buin", "Calera de Tango", "Paine", "Colina", "Lampa", "Tiltil", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro"],
        "Libertador General Bernardo O'Higgins": ["Rancagua", "Machalí", "Graneros", "Mostazal", "Codegua", "Doñihue", "Coinco", "Coltauco", "Olivar", "Requínoa", "Malloa", "Quinta de Tilcoco", "Rengo", "San Vicente", "Peumo", "Pichidegua", "Las Cabras", "San Fernando", "Chépica", "Chimbarongo", "Nancagua", "Palmilla", "Placilla", "Santa Cruz", "Lolol", "Peralillo", "Pumanque", "Paredones", "Pichilemu", "La Estrella", "Litueche", "Navidad", "Marchigüe"],
        "Maule": ["Talca", "San Clemente", "Pelarco", "Pencahue", "Maule", "San Rafael", "Curepto", "Constitución", "Empedrado", "Río Claro", "Linares", "Colbún", "Yerbas Buenas", "Villa Alegre", "San Javier", "Parral", "Retiro", "Longaví", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Teno", "Romeral", "Molina", "Sagrada Familia", "Hualañé", "Licantén", "Vichuquén", "Rauco"],
        "Ñuble": ["Chillán", "Chillán Viejo", "Coihueco", "El Carmen", "Pemuco", "San Ignacio", "Yungay", "Quillón", "Bulnes", "San Nicolás", "Quirihue", "Cobquecura", "Ninhue", "Portezuelo", "Trehuaco", "San Carlos", "Coelemu", "Ránquil", "San Fabián"],
        "Biobío": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Los Ángeles", "Nacimiento", "Negrete", "Mulchén", "San Rosendo", "Santa Bárbara", "Tucapel", "Laja", "Quilleco", "Quilaco", "Antuco", "Cabrero", "Yumbel", "Alto Biobío", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa"],
        "La Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
        "Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
        "Los Lagos": ["Puerto Montt", "Puerto Varas", "Cochamó", "Calbuco", "Maullín", "Llanquihue", "Fresia", "Frutillar", "Osorno", "San Juan de la Costa", "San Pablo", "Puyehue", "Río Negro", "Purranque", "Puerto Octay", "Castro", "Ancud", "Quellón", "Quemchi", "Dalcahue", "Chonchi", "Curaco de Vélez", "Puqueldón", "Quinchao", "Queilén", "Quellón", "Chaitén", "Futaleufú", "Palena", "Hualaihué"],
        "Aysén del General Carlos Ibáñez del Campo": ["Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Río Ibáñez", "Chile Chico", "O’Higgins", "Cochrane", "Tortel"],
        "Magallanes y de la Antártica Chilena": ["Punta Arenas", "Puerto Natales", "Porvenir", "Primavera", "San Gregorio", "Laguna Blanca", "Río Verde", "Torres del Paine", "Timaukel", "Cabo de Hornos", "Antártica"]
    };
    
    const regionSelect = document.getElementById("region");
    const comunaSelect = document.getElementById("comuna");
    const reasonLabel = document.querySelector("label[for='reason']");
    const reasonTextarea = document.getElementById("comments");
  
    const poblarDepartamentos = () => {
      for (const region in data) {
        let option = document.createElement("option");
        option.value = region;
        option.text = region;
        regionSelect.appendChild(option);
      }
    };
  
    const updateCursos = () => {
      const selectedRegion = regionSelect.value;
      courseSelect.innerHTML = '<option value="">Seleccione un ramo</option>';
  
      if (data[selectedRegion]) {
        data[selectedRegion].forEach(comuna => {
          let option = document.createElement("option");
          option.value = comuna;
          option.text = comuna;
          courseSelect.appendChild(option);
        });
      }
  
      changeArguments();
    };
  
    function changeArguments() {
      if (courseSelect.value !== "") {
        reasonLabel.style.display = "block";
        reasonTextarea.style.display = "block";
      } else {
        reasonLabel.style.display = "none";
        reasonTextarea.style.display = "none";
      }
    }
  
    departmentSelect.addEventListener("change", updateCursos);
    courseSelect.addEventListener("change", changeArguments);
  
    // Inicialización
    poblarDepartamentos();
    changeArguments();
  });
  