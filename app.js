(function(exports) {

	function playSong(intruderStatus) {
		if (intruderStatus) {
			$('#play').html(
				'<audio controls autoplay>' +
  					'<source src="cops.mp3" type="audio/mpeg">' +
				'</audio>'
			);
		}
	}

	// function checkFace() {
	//   	$.ajax({
	// 	  type: "POST",
	// 	  script: "main.py",
	// 	  success: function(data,status){
	// 	   // do something in js
	// 	});
	// }

	exports.startApp = function() {
		console.log('start app.');

		var access_token = "c.9zmGsiuHL6xx6VIWXZpgzgh78bbj97v9dI1oSwfLJbX1XbUbjoTAYYNXPgJMaojO5OHmzPndT6RjHTEZvNYfhxREU7cJ5SD9MKTXogEMmDZVbjCbJH8gHVgAFy1WvFTBipGmDb778OiQdjji";
		var ref = new Firebase('wss://developer-api.nest.com');
		ref.auth(access_token);
		ref.on('value', function(snapshot) {
		console.log(snapshot.val());
		});

		playSong(true);
	}

})(window);
