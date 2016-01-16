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

		var access_token = "c.oPExeHq4apmcPVgRHtPYXRLDwESaXw4OjLknx8mbYVBNVrd5mc1QXcZhDcQwMIDsnoZoBiE9nhU4Pquj5PGsyFIVN98IfiJM2ueqqgSTUTpXNvz5xipw3UbOpa4pzEuHKCY2R3ZYK5cbotad";
		var ref = new Firebase('wss://developer-api.nest.com');
		ref.auth(access_token);
		ref.on('value', function(snapshot) {
		console.log(snapshot.val());
		});

		playSong(true);
	}

})(window);
