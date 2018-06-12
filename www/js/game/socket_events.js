
let socket = io.connect('http://port-4242.freefreeciv-server-olivierworkk493832.codeanyapp.com');
log("connection to server....")



socket.on('connected', function (data) {
    log("socket connection : enabled");


    if (window.localStorage.getItem('createRoom') == 'true'){
      let roomName = prompt("Name of your new room : ");

      window.localStorage.setItem("roomName", roomName)
      socket.emit('createRoom', {'name': roomName, 'admin': window.localStorage.getItem('pseudo')});
      window.localStorage.setItem("createRoom", false);
      $("#roomName").html(window.localStorage.getItem("roomName"));
    } else {
      socket.emit('joinRoom', {'pseudo': window.localStorage.getItem('pseudo'), 'roomId': window.localStorage.getItem('roomId')});
    }


  socket.on("newPlayer", (data) => {

    if (data.room == window.localStorage.getItem("roomId")){
      players[data.slot] = new Player (data.pseudo, data.isAiControlled, data.slot);
    }
  });

  socket.on("playerLeave", (data)=>{

    alert(data.pseudo)

    if (data.room == window.localStorage.getItem("roomId")){
      $('.player.slot'+data.slot).remove();
      $('.player.slot'+data.slot).detach();
      $('.player.slot'+data.slot).empty();
      $('#'+data.pseudo).remove();
      $('#'+data.pseudo).detach();
      $('#'+data.pseudo).empty();
      delete players[data.slot];
    }

  });


      //ADMIN STUFF

    socket.on("youAreAdmin", (room)=>{
      console.log("admin " + room.roomId);
      window.localStorage.setItem('roomId', room.roomId)
      $("#tabs #settings").show();
    })




        //CHATTING
    socket.on("message", (mesg)=>{
      if (mesg.room == window.localStorage.getItem("roomId")){
        Message.display(mesg.content, mesg.playerColor);
      }
    })


      //GAME EVENTS

    socket.on('damage', (data)=>{

    })

    socket.on("setGold", (data) => {
      if (data.room == window.localStorage.getItem("roomId"))
        players[data.id].setGold(data.val);
    });

    socket.on("setWood", (data) => {
      if (data.room == window.localStorage.getItem("roomId"))
        players[data.id].setWood(data.val);
    });

    socket.on("newUnit", (data) => {
      if (data.room == window.localStorage.getItem("roomId"))
        players[data.id].newUnit(type);
    });
});
