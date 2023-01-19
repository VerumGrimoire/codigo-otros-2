var formulario = document.querySelector('form');//no es un id, se añade punto y coma

formulario.onsubmit = function(e) {

  e.preventDefault(); //la función estaba incompleta
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2]; //punto y coma al final de cada declaración

  var nombre = n.value;
  var edad = e.value; //punto y coma al final de cada declaración

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad); //punto y coma al final de cada expresión

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error"); //punto y coma al final de cada expresión
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad); //punto y coma al final de cada expresión
  }
}

// var botonBorrar = document.createElement("button");
// botonBorrar.textContent = "Eliminar invitado";
// botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
// document.body.appendChild(botonBorrar); Se eliminó un botón innecesario

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"; //punto y coma al final de cada expresión
  }

var lista = document.getElementById("lista-de-invitados"); //punto y coma al final de cada declaración

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); //punto y coma al final de cada declaración
lista.appendChild(elementoLista);

var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br"); //punto y coma al final de cada declaración
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre ;
// elementoLista.appendChild(spanNombre); 
// elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio); //punto y coma al final de cada declaración

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");//punto y coma al final de cada declaración
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";//punto y coma al final de cada expresión
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}