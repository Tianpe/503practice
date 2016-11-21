window.onload = function {
	// implement Hichat object after loaded;
	var hichat = new Hichat();
	hichat.init();
};

//define Hichat Class
var Hichat = function(){
	this.socket = null;
}；

Hichat.prototype = {
	init: function() {
		var that = this;
		this.socket = io.connect();
		this.socket.on('connect', function(){
			document.getElementById('info').textContent = 'get yourself a nickname :)';
			document.getElementById('nickWrapper').style.display = 'block';
			document.getElementById('nicknameInput').focus();
		});
	}
};