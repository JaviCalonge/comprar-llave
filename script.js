const contenedor = document.querySelector(".container");

const imagenes = [
  "Imagen-llaves/01.png",
  "Imagen-llaves/02.png",
  "Imagen-llaves/03.png",
  "Imagen-llaves/04.jpg",
  "Imagen-llaves/05.jpg",
  "Imagen-llaves/06.jpg",
  "Imagen-llaves/07.jpg",
  "Imagen-llaves/08.jpg",
  "Imagen-llaves/09.jpg",
  "Imagen-llaves/10.jpg",
  "Imagen-llaves/11.jpg",
  "Imagen-llaves/12.jpg"
];

function crearLlave(imagen, nombre, modelo, precio) {
  imagen = `<img src="${imagen}" alt="Imagen de la llave">`;
  nombre = `<h2>${nombre}</h2>`;
  modelo = `<h3>${modelo}</h3>`;
  precio = `<p><b>${precio}</b></p>`;

  return [imagen, nombre, modelo, precio];
}

let documentFragment = document.createDocumentFragment();
let selectedImg = null;

for (var i = 1; i <= 12; i++) {
  let imagenRandom = imagenes[Math.floor(Math.random() * imagenes.length)];
  let modeloRandom = Math.floor(Math.random() * 10000);
  let precioRandom = Math.floor(Math.random() *10 + 33);
  let llave = crearLlave(`${imagenRandom}`, `LLAVE ${i}`, `Modelo ${modeloRandom}`, `Precio: ${precioRandom}€`);

  let div = document.createElement("DIV");
  // div.tabIndex = i;
  div.classList.add(`item-${i}`, `item`);
  div.innerHTML = llave.join("");


//Añade un event listener al img para manejar la selección y el cambio de valor

div.addEventListener('click', (event) => {
  // Selección de imagen
  let img = div.querySelector('img');
  if (selectedImg) {
    selectedImg.classList.remove('selected');
  }
  if (selectedImg !== img) {
    img.classList.add('selected');
    selectedImg = img;
  } else {
    selectedImg = null;
  }

  // Configuración del valor en .key-data
  document.querySelector(".key-data").value = modeloRandom;

  // Evita que el clic se propague al documento
  event.stopPropagation();
});

documentFragment.appendChild(div);

}


// Maneja el clic fuera de las imágenes para deseleccionar
document.addEventListener('click', (event) => {
if (!contenedor.contains(event.target) && selectedImg) {
  selectedImg.classList.remove('selected');
  selectedImg = null;
}
});


contenedor.appendChild(documentFragment);
