// Make sure jquery is working
// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// found on https://stackoverflow.com/questions/3670487/jquery-text-fade-transition-from-one-text-to-another
(function() {

var quotes = $(".quote");
var quoteIndex = -1;

function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
        .fadeIn(2000)
        .delay(10000)
        .fadeOut(2000, showNextQuote);
}

showNextQuote();

})();

// Changes the opacity of the gallery images when the cursor enters and leaves. Also reveals a button
$(".gallery-image").mouseenter(function() {
  $(this).css("opacity", .5);
  $(this).find("button").show();
})

$(".gallery-image").mouseleave(function() {
  $(this).css("opacity", 1);
  $(this).find("button").hide();
})

// Changes the image in the modal based on which button is clicked. From Bootstrap documentation
$('#exampleModalCenter').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  var modal = $(this)
  modal.find('.modal-body').empty();
  modal.find('.modal-body').append(`<img src="${recipient}">`)
})


// Clears the entries of the forms when submit is clicked
document.querySelector(".submit").addEventListener('click', clearForm)

function clearForm(e) {
  e.preventDefault();
  document.getElementById('myForm').reset();
}




