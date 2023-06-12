const fechaSeleccionada = document.querySelector("#fechaSeleccionada");
const formDias = document.querySelector("#formDias");
const dias = document.querySelector("#dias");
const newFecha = document.querySelector(".newFecha");
const newFechaEscrita = document.querySelector(".newFechaEscrita");

formDias.addEventListener("submit", (e) => {
  e.preventDefault();
  if (fechaSeleccionada.value.length > 0) {
    const nuevaFecha = moment(fechaSeleccionada.value).add(dias.value, "d");
    // console.log(nuevaFecha._i);
    newFecha.textContent = nuevaFecha.format("DD-MM-YYYY");

    const fechaEscrita = moment(nuevaFecha).format("dddd, MMMM Do YYYY");
    // console.log(fechaEscrita);
    newFechaEscrita.textContent = fechaEscrita;
  } else {
    console.log("No se ha seleccionado una fecha");
    alert("No se ha seleccionado una fecha");
  }
});
