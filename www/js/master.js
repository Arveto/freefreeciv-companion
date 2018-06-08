
var app = {
	// Application Constructor
	initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	},

	// deviceready Event Handler
	//
	// Bind any cordova events here. Common events are:
	// 'pause', 'resume', etc.
	onDeviceReady: function() {
		this.receivedEvent('deviceready');
	},

	// Update DOM on a Received Event
	receivedEvent: function(id) {
	}
};

app.initialize();

document.addEventListener('deviceready', function () {
	socket.on('connect', function () {
        socket.on('alert', function (data) {
            alert(data);
        })
    })
});


// UTILS

window.onerror = function(e, url, line){
	log('onerror: ' + e + ' URL: ' + url + ' Line:' + line);
}

function log(mesg) {
	$("<p>").html(mesg).appendTo("#logs");
}

log("[code by TERRUSS]");


$("#toggleLogs").on("click", () => {
	$("#logs").toggle();
	console.log("toggle logs");
});
