
    //socket.io stuff
let socket = io.connect('http://port-4242.freefreeciv-server-olivierworkk493832.codeanyapp.com');
log("connection to server....")

socket.on('connected', function (data) {
    log("socket connection : enabled");

    socket.emit('login');
});

    //init
window.localStorage.clear()

    //Interface
function revealpass(fieldId) {
   var field = document.getElementById(fieldId);
   field.type = (field.type == "password") ? "text" : "password";
   field.focus();
   field.setSelectionRange(field.value.length, field.value.length);
}

  //login

  $("#scan").on('click', () => {
      cordova.plugins.barcodeScanner.scan(
          function (result) {
              if(!result.cancelled) {
                if (result.text == "success") { //XXX
                  log("login success")
                  $("#rooms").show();
                }
              }
          }, function (error) {
              log("Scanning failed: " + error);
          }
     );
  });
