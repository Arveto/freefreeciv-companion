
let socket = io.connect('http://port-4242.freefreeciv-server-olivierworkk493832.codeanyapp.com');
log("connection to server....")

socket.on('connected', function (data) {
    log("socket connection : enabled");

    if (window.sessionStorage.getItem('gameId')) {
      socket.emit('joinRoom', window.localStorage.getItem("gameId"));
    } else {
      log("ERR : key 'gameId' doesn't exists");
    }

    socket.on("newPlayer", (data) => {
      players[data.id] = new Player (data.name, data.id, data.gold, data.wood, data.health);
    });

    socket.on("setGold", (data) => {
      players[data.id].setGold(data.val);
    });

    socket.on("setWood", (data) => {
      players[data.id].setWood(data.val);
    });

    socket.on("newUnit", (data) => {
      players[data.id].newUnit(type);
    });
});
