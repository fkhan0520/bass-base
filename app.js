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

	function checkFace() {
	  	$.ajax({
		  type: "POST",
		  url: "main.py",
		  data: { param: text}
		}).done(function( o ) {
		   // do something
		});
	}

	exports.startApp = function() {
		console.log('start app.');

		playSong(true);
	}

})(window);
