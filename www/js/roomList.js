let socket = io.connect('http://port-4242.aze-olivierworkk493832.codeanyapp.com');

socket.on('connected', function (data) {
    log("socket connection : enabled");
    log("waiting for rooms list");

    socket.emit('roomList');

    socket.on('roomList', (list) => {
      for (room in list) {
        new Room(room.name, room.id, room.players);
      }
    });
});


class Room {
  constructor(name, id, players){

    this.container = $("<a>").attr("href", "game.html").appendTo("#roomList");
    $("<div>").addClass('room').html("<strong>"+ name +"</strong> <p>players : "+ players +" / 4</p>").appendTo(this.container);

    this.container.on("click", () => {
      socket.emit('joinRoom', id);
    });
  }
}
