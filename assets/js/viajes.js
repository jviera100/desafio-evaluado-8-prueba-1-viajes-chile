$(document).ready(function () {
});
   // Tooltip initialization

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$(document).ready(function () {
   // Tooltip initialization
   $('[data-bs-toggle="tooltip"]').tooltip();

   // Evento click boton tooltip formulario
   $(".d-inline-block").click(function () {
       alert("El correo fue enviado correctamente...");
   });

   // Selectores de etiqueta titulos de las section
   $(".display-4").dblclick(function () {
       $(this).css("color", "red");
   });
 
// Selectores de clase descripcion tarjetas ocultar/mostrar
$(".card-img-top").click(function () {
    $(this).siblings(".card-body").toggle();
});

});
