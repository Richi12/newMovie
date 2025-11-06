console.log($.fn.jquery);
// trailer = document.querySelector("#trailer");
// trailer.hidden = true;
$(document).ready(function () {
    $("#trailer").hide();
    $('#verTrailer').on('click', function () {
        $('body,html').animate({ scrollTop: '1000px' }, 1000);
        $('#trailer').show();
        $(this).hide();
        // $(this).addClass('lateral');
        // $(this).css({ 'float': 'right' });
        // $(this).html('cerrar trailer');
    });

})

fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error)
    });

$.ajax({
    url: "http://localhost:3000/movies",
    method: "GET",

    success: function (data) {
        console.log("Datos obtenidos con jQuery AJAX:");
        console.log(data);
    }
})

