
//  -----------------------  Declaración de funciones  ------------------------------

// Añade dinamicamente la classe sticky a la navbar
function stickyNav() {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () { myFunction() };

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
      if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
      } else {
          navbar.classList.remove("sticky");
      }
  }
}
// Oculta Card-Text
function toggleSection(){
    $('#destacados').click(function() {
        $('.card-text').toggleClass("invisible");
    });
}

// Función onClick para enviar correo de contacto
function btnEnviar() {
  alert("El correo fue enviado correctamente...");
}

// Habilita tooltip bootstrap
function enableTooltips() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}

/////////////////////////////////////////////////////////////////////////////////





// ----------------------------  Llamada de funciones  ---------------------------

toggleSection();

stickyNav();

enableTooltips();


/////////////////////////////////////////////////////////////////////////////////
