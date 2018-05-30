
function revealpass(fieldId) {
   var field = document.getElementById(fieldId);
   field.type = (field.type == "password") ? "text" : "password";
   field.focus();
   field.setSelectionRange(field.value.length, field.value.length);
}

function log(mesg) {
  $("<p>").html(mesg).appendTo("#logs");
}

$("button.submit").on('click', () => {
  log("clickaid");

  $("#roomshtml").trigger("click");
})

$("a").on("click", () => {
  log("triggered")
})
