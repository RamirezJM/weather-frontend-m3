const iconos = {
  despejado: '<i class="bi bi-sun text-warning fs-2"></i>',
  nublado: '<i class="bi bi-cloud text-secondary fs-2"></i>',
  lluvia: '<i class="bi bi-cloud-rain text-primary fs-2"></i>',
  parcial: '<i class="bi bi-cloud-sun text-secondary fs-2"></i>',
};

/* creo un array de objetos con los datos de las ciudades, lo que me permite
agregarlos de manera dinámica a un sólo modal base */ 

const ciudades = [
  {
    id: 1,
    nombre: "Santiago",
    imagen: "./assets/images/ciudades/santiago.webp",
    icono: "despejado",
    temperatura: 27,
    estado: "despejado",
    humedad: 40,
    viento: 12,
    pronosticoSemana: [
      { dia: "Hoy", icono: 'despejado', temperatura: 27, estado: "despejado" },
      { dia: "Día 2", icono: "parcial", temperatura: 25, estado: "parcial" },
      { dia: "Día 3", icono: "nublado", temperatura: 22, estado: "nublado" },
      { dia: "Día 4", icono: "despejado", temperatura: 26, estado: "despejado" },
      { dia: "Día 5", icono: "lluvia", temperatura: 19, estado: "lluvia" },
      { dia: "Día 6", icono: "parcial", temperatura: 24, estado: "parcial" },
      { dia: "Día 7", icono: "despejado", temperatura: 28, estado: "despejado" }
    ]
  },
  {
    id: 2,
    nombre: "Nueva York",
    imagen: "./assets/images/ciudades/nueva-york.webp",
    icono: "nublado",
    temperatura: 12,
    estado: "nublado",
    humedad: 55,
    viento: 20,
    pronosticoSemana: [
      { dia: "Hoy", icono: "nublado", temperatura: 12, estado: "nublado" },
      { dia: "Día 2", icono: "lluvia", temperatura: 10, estado: "lluvia" },
      { dia: "Día 3", icono: "parcial", temperatura: 14, estado: "parcial" },
      { dia: "Día 4", icono: "despejado", temperatura: 18, estado: "despejado" },
      { dia: "Día 5", icono: "nublado", temperatura: 15, estado: "nublado" },
      { dia: "Día 6", icono: "lluvia", temperatura: 11, estado: "lluvia" },
      { dia: "Día 7", icono: "parcial", temperatura: 16, estado: "parcial" }
    ]
  },
  {
    id: 3,
    nombre: "Londres",
    imagen: "./assets/images/ciudades/londres.webp",
    icono: "lluvia",
    temperatura: 9,
    estado: "lluvia",
    humedad: 80,
    viento: 18,
    pronosticoSemana: [
      { dia: "Hoy", icono: "lluvia", temperatura: 9, estado: "lluvia" },
      { dia: "Día 2", icono: "nublado", temperatura: 10, estado: "nublado" },
      { dia: "Día 3", icono: "lluvia", temperatura: 8, estado: "lluvia" },
      { dia: "Día 4", icono: "parcial", temperatura: 12, estado: "parcial" },
      { dia: "Día 5", icono: "lluvia", temperatura: 7, estado: "lluvia" },
      { dia: "Día 6", icono: "nublado", temperatura: 11, estado: "nublado" },
      { dia: "Día 7", icono: "lluvia", temperatura: 9, estado: "lluvia" }
    ]
  },
  {
    id: 4,
    nombre: "Johannesburgo",
    imagen: "./assets/images/ciudades/johannesburg.webp",
    icono: "despejado",
    temperatura: 29,
    estado: "despejado",
    humedad: 30,
    viento: 10,
    pronosticoSemana: [
      { dia: "Hoy", icono: "despejado", temperatura: 29, estado: "despejado" },
      { dia: "Día 2", icono: "parcial", temperatura: 27, estado: "parcial" },
      { dia: "Día 3", icono: "nublado", temperatura: 25, estado: "nublado" },
      { dia: "Día 4", icono: "despejado", temperatura: 30, estado: "despejado" },
      { dia: "Día 5", icono: "lluvia", temperatura: 21, estado: "lluvia" },
      { dia: "Día 6", icono: "parcial", temperatura: 26, estado: "parcial" },
      { dia: "Día 7", icono: "despejado", temperatura: 31, estado: "despejado" }
    ]
  },
  {
    id: 5,
    nombre: "Beijing",
    imagen: "./assets/images/ciudades/beijing.webp",
    icono: "nublado",
    temperatura: 14,
    estado: "nublado",
    humedad: 48,
    viento: 14,
    pronosticoSemana: [
      { dia: "Hoy", icono: "nublado", temperatura: 14, estado: "nublado" },
      { dia: "Día 2", icono: "lluvia", temperatura: 12, estado: "lluvia" },
      { dia: "Día 3", icono: "parcial", temperatura: 16, estado: "parcial" },
      { dia: "Día 4", icono: "nublado", temperatura: 13, estado: "nublado" },
      { dia: "Día 5", icono: "despejado", temperatura: 18, estado: "despejado" },
      { dia: "Día 6", icono: "parcial", temperatura: 17, estado: "parcial" },
      { dia: "Día 7", icono: "lluvia", temperatura: 11, estado: "lluvia" }
    ]
  },
  {
    id: 6,
    nombre: "San Francisco",
    imagen: "./assets/images/ciudades/san-francisco.webp",
    icono: "parcial",
    temperatura: 17,
    estado: "parcial",
    humedad: 60,
    viento: 15,
    pronosticoSemana: [
      { dia: "Hoy", icono: "parcial", temperatura: 17, estado: "parcial" },
      { dia: "Día 2", icono: "nublado", temperatura: 16, estado: "nublado" },
      { dia: "Día 3", icono: "lluvia", temperatura: 13, estado: "lluvia" },
      { dia: "Día 4", icono: "parcial", temperatura: 18, estado: "parcial" },
      { dia: "Día 5", icono: "despejado", temperatura: 21, estado: "despejado" },
      { dia: "Día 6", icono: "parcial", temperatura: 17, estado: "parcial" },
      { dia: "Día 7", icono: "nublado", temperatura: 15, estado: "nublado" }
    ]
  },
  {
    id: 7,
    nombre: "Budapest",
    imagen: "./assets/images/ciudades/budapest.webp",
    icono: "parcial",
    temperatura: 11,
    estado: "parcial",
    humedad: 65,
    viento: 9,
    pronosticoSemana: [
      { dia: "Hoy", icono: "parcial", temperatura: 11, estado: "parcial" },
      { dia: "Día 2", icono: "nublado", temperatura: 9, estado: "nublado" },
      { dia: "Día 3", icono: "lluvia", temperatura: 7, estado: "lluvia" },
      { dia: "Día 4", icono: "parcial", temperatura: 12, estado: "parcial" },
      { dia: "Día 5", icono: "nublado", temperatura: 10, estado: "nublado" },
      { dia: "Día 6", icono: "despejado", temperatura: 13, estado: "despejado" },
      { dia: "Día 7", icono: "lluvia", temperatura: 8, estado: "lluvia" }
    ]
  },
  {
    id: 8,
    nombre: "El Cairo",
    imagen: "./assets/images/ciudades/el-cairo.webp",
    icono: "despejado",
    temperatura: 33,
    estado: "despejado",
    humedad: 25,
    viento: 20,
    pronosticoSemana: [
      { dia: "Hoy", icono: "despejado", temperatura: 33, estado: "despejado" },
      { dia: "Día 2", icono: "despejado", temperatura: 34, estado: "despejado" },
      { dia: "Día 3", icono: "parcial", temperatura: 30, estado: "parcial" },
      { dia: "Día 4", icono: "nublado", temperatura: 28, estado: "nublado" },
      { dia: "Día 5", icono: "despejado", temperatura: 35, estado: "despejado" },
      { dia: "Día 6", icono: "parcial", temperatura: 32, estado: "parcial" },
      { dia: "Día 7", icono: "despejado", temperatura: 36, estado: "despejado" }
    ]
  },
  {
    id: 9,
    nombre: "París",
    imagen: "./assets/images/ciudades/paris.webp",
    icono: "parcial",
    temperatura: 13,
    estado: "parcial",
    humedad: 70,
    viento: 11,
    pronosticoSemana: [
      { dia: "Hoy", icono: "parcial", temperatura: 13, estado: "parcial" },
      { dia: "Día 2", icono: "nublado", temperatura: 12, estado: "nublado" },
      { dia: "Día 3", icono: "lluvia", temperatura: 10, estado: "lluvia" },
      { dia: "Día 4", icono: "despejado", temperatura: 17, estado: "despejado" },
      { dia: "Día 5", icono: "parcial", temperatura: 14, estado: "parcial" },
      { dia: "Día 6", icono: "nublado", temperatura: 11, estado: "nublado" },
      { dia: "Día 7", icono: "lluvia", temperatura: 9, estado: "lluvia" }
    ]
  },
  {
    id: 10,
    nombre: "Sidney",
    imagen: "./assets/images/ciudades/sidney.webp",
    icono: "despejado",
    temperatura: 26,
    estado: "despejado",
    humedad: 50,
    viento: 13,
    pronosticoSemana: [
      { dia: "Hoy", icono: "despejado", temperatura: 26, estado: "despejado" },
      { dia: "Día 2", icono: "parcial", temperatura: 24, estado: "parcial" },
      { dia: "Día 3", icono: "nublado", temperatura: 23, estado: "nublado" },
      { dia: "Día 4", icono: "despejado", temperatura: 27, estado: "despejado" },
      { dia: "Día 5", icono: "lluvia", temperatura: 21, estado: "lluvia" },
      { dia: "Día 6", icono: "parcial", temperatura: 25, estado: "parcial" },
      { dia: "Día 7", icono: "despejado", temperatura: 28, estado: "despejado" }
    ]
  }
];

/* omití la forma nativa de bootstrap de abrir el modal para hacerlo de manera manual con JS.
   Uso propagación de eventos para hacer el código más eficiente */

const contenedorTarjetas = document.querySelector('#pronostico')
contenedorTarjetas.addEventListener("click", e => {
  const btn = e.target.closest(".btn-detalle");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const ciudad = ciudades.find(c => c.id === id);
  if (!ciudad) return;

  cargarModal(ciudad);
});

function cargarModal({ nombre, imagen, temperatura, estado, humedad, viento, pronosticoSemana }) {
  document.querySelector('#detalleModalLabel').textContent = nombre;
  document.querySelector('#modalTemp').textContent = `${temperatura}°C`;
  document.querySelector('#modalEstado').textContent = estado;
  document.getElementById("modal-icono").innerHTML = iconos[estado];
  document.querySelector('.modalImage').src = imagen
  document.querySelector('.modalImage').alt = nombre
  document.querySelector('#modalHumedad').textContent = `${humedad}%`;
  document.querySelector('#modalViento').textContent = `${viento}km/h`;

  const contenedor = document.querySelector('#modalPronostico');
  contenedor.innerHTML = "";

  pronosticoSemana.forEach(dia => {
    const item = document.createElement('div');
    item.className = "item-pronostico border rounded p-2";
    item.innerHTML = `
      <span><strong>${dia.dia}</strong></span>
      <span class="text-center me-2">${dia.temperatura}°C</span>
      <span class="text-end">${iconos[dia.estado]}</span>
      <span class="text-muted text-start ms-1">${dia.estado}</span>
      `;
    contenedor.appendChild(item);
  });

  const modal = new bootstrap.Modal('#detalleModal');
  modal.show();
}

// botón top

const topButton = document.getElementById('btn-top')
window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    topButton.classList.add('show')
  }
  else{
    topButton.classList.remove('show')
  }
})
topButton.addEventListener('click', () => {
  document.documentElement.scrollTop = 0
})

