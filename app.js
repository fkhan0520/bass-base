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


	exports.startApp = function() {
		console.log('start app.');

		playSong(true);
	}

})(window);
