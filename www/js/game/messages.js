
const Message = {

  display: (message, playerColor) => {
    if (playerColor) {
      $("<p>").addClass('message notMine').html("<img class='pp' src='src/player"+playerColor+".png'>"+message).appendTo('#messagesContainer');
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
      socket.emit('message', {'content': message, 'sender': window.localStorage.getItem("pseudo"), 'room': window.localStorage.getItem("roomId")})
    }
  }
});
