

document.addEventListener("deviceready", function(e){
        document.addEventListener("offline", function(e){
                            alert("NO_NETWORK");
                            log("socket connection : [disabled]");
                            log("No connection : the server must be down...");
        }, false);
}, false);

    //socket.io stuff
  let socket = io.connect('http://port-4242.freefreeciv-server-olivierworkk493832.codeanyapp.com');
  log("connection to server....");


  socket.on('connected', function (data) {
      log("socket connection : [enabled]");

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
