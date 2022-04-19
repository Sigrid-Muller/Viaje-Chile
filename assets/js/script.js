$(document).ready(function(){

    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {

                scrollTop: $(gato).offset().top -10
            },
            800
        )
    })
})

$('#enviarcorreo').click(function(){
    alert("El correo fue enviado correctamente...");
  });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})