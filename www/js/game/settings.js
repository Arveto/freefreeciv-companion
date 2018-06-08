
$("#start").on('click', ()=>{
  socket.emit('startGame', {'roomId': window.localStorage.getItem("roomId")});
})
