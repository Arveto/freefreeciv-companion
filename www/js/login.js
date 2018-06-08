
    //socket.io stuff
let socket = io.connect('http://port-4242.freefreeciv-server-olivierworkk493832.codeanyapp.com');
log("connection to server....")

socket.on('connected', function (data) {
    log("socket connection : enabled");

    socket.emit('login');
});

    //init
window.localStorage.clear()

  //login

  $("#scan").on('click', () => {
      cordova.plugins.barcodeScanner.scan(
          function (result) {
              if(!result.cancelled) {

                  window.localStorage.setItem("pseudo", result.text);

                  $("#rooms").show();
              }
          }, function (error) {
              log("Scanning failed: " + error);
          }
     );
  });
