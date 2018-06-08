


$("#roomName").html(window.localStorage.getItem("roomName"));

$('div#chat').hide();
$('div#settings').hide();

document.addEventListener("backbutton", ()=>{
  socket.emit('leaveRoom', {'pseudo': window.localStorage.getItem('pseudo'), 'roomId': window.localStorage.getItem('roomId')})
}, false);

$('h2#chat').on('click', () => {
  $('div#units').hide();
  $('h2#units').css('border-bottom', 'none');
  $('div#settings').hide();
  $('h2#settings').css('border-bottom', 'none');
  $('div#chat').show();
  $('h2#chat').css('border-bottom', '5px solid #7f756b');
});
$('h2#units').on('click', () => {
  $('div#chat').hide();
  $('h2#chat').css('border-bottom', 'none');
  $('div#settings').hide();
  $('h2#settings').css('border-bottom', 'none');
  $('div#units').show();
  $('h2#units').css('border-bottom', '5px solid #7f756b');
});
$('h2#settings').on('click', () => {
  $('div#chat').hide();
  $('h2#chat').css('border-bottom', 'none');
  $('div#units').hide();
  $('h2#units').css('border-bottom', 'none');
  $('div#settings').show();
  $('h2#settings').css('border-bottom', '5px solid #7f756b');
});

//"test"
// const a = new Player('aazer', 0, 3, 5, 20);
// const b = new Player('brzerzerezr', 1, 4, 3);
// const c = new Player('erfjezorifjz', 2, 6, 2);
//
// a.setHealth('player', 50);
// a.newUnit('castle');
// a.newUnit('knight');
// a.setWood(27);
//
// b.setHealth('player', 70);
// b.newUnit('paysant');
// b.newUnit('castle');
//
// c.setHealth('player', 20);
// c.newUnit('paysant');
// c.newUnit('knight');
// c.newUnit('knight');
