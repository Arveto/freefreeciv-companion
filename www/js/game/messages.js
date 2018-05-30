
const Message = {

  display: (message, pseudo) => {
    if (pseudo) {
      $("<p>").addClass('message notMine').html("<span class='messenger "+pseudo+"'>>"+pseudo+"</span><br><br>"+message).appendTo('#messagesContainer');
    } else {
      $("<p>").addClass('message mine').html(message).appendTo('#messagesContainer');
      $("input#message").val("");
    }
    Message.scroll();
  },

  scroll: () => {
    $( "#messagesContainer" ).scrollTop( $("#messagesContainer").height() + $(window).height() );
  }
}


$("input#message").on('keypress', (e) => {
  if (e.charCode == 0 || e.charCode == 13) {
    e.preventDefault();

    let message = $("input#message").val();
    if (message != "") {
      Message.display(message);
    }
  }
});
