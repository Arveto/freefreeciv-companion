
  //socket.io stuff
let socket = io.connect('http://port-4242.freefreeciv-server-olivierworkk493832.codeanyapp.com');
log("connection to server....")

socket.on('connected', function () {
    log("socket connection : enabled");
    log("waiting for rooms list....");

    socket.emit('roomsResquest');

    socket.on('newRoom', (room) => {
      new Room(room.name, room.id, room.players);
      console.log(room);
    });

    socket.on('incrementRoom', (data)=>{
      $("."+data.roomId+"nplayers").html("players :" + data.value +" / 4");
    });
});

window.localStorage.setItem("createRoom", false);

class Room {
  constructor(name, id, players){
    this.id = id;
    this.players = players

    this.container = $("<a>").attr("href", "game.html").appendTo("#roomList");
    let el = $("<div>").addClass('room').html("<strong>"+ name +"</strong> <p class='"+id+"nplayers'>players : "+ players +" / 4</p>").appendTo(this.container);

    this.container.on("click", () => {
      console.log('id : '+ id);
      window.localStorage.setItem("roomId", id);
      window.localStorage.setItem("roomName", name);
    });
  }
}


$('#create').on('click', ()=>{
  window.localStorage.setItem("createRoom", true);
})
