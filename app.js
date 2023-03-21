const miArreglo = ["cadena1", "cadena2", "cadena3"];

function mostrarListaEnDOM(arreglo) {
    // Obtiene el elemento del DOM donde se agregará la lista
    const lista = document.getElementById('miLista');
  
    // Crea un arreglo vacío para almacenar los elementos HTML de la lista
    const elementosLista = [];
    
    // Recorre el arreglo y crea un elemento HTML para cada cadena
    for (let i = 0; i < arreglo.length; i++) {
      const elemento = document.createElement('li'); // Crea un nuevo elemento <li>
      elemento.textContent = arreglo[i]; // Establece el texto del elemento
      elementosLista.push(elemento); // Agrega el elemento al arreglo de elementos de lista
    }
    
    // Agrega cada elemento de la lista al elemento del DOM
    for (let i = 0; i < elementosLista.length; i++) {
      lista.appendChild(elementosLista[i]); // Agrega el elemento al final de la lista en el DOM
    }
  }

  mostrarListaEnDOM(miArreglo);