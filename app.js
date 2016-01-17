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

	function checkFace(faceThing) {
	  	$.ajax({
		  type: "POST",
		  url: "/movement/"+faceThing,
		  success: function(data,status){
		   console.log(data);
		});
	}



	exports.startApp = function() {
		console.log('start app.');

		var access_token = "c.9zmGsiuHL6xx6VIWXZpgzgh78bbj97v9dI1oSwfLJbX1XbUbjoTAYYNXPgJMaojO5OHmzPndT6RjHTEZvNYfhxREU7cJ5SD9MKTXogEMmDZVbjCbJH8gHVgAFy1WvFTBipGmDb778OiQdjji";
		var ref = new Firebase('wss://developer-api.nest.com');
		ref.auth(access_token);
		ref.on('value', function(snapshot) {
			console.log(snapshot.val());
			var jsonThing = snapshot.val().devices.cameras['_piRisli3AVbF249MOnd7TfxFGotw7-JHWErCeEm4vyKybMgyjpLWA'].last_event.animated_image_url;
			$('#mug').html(
				'<img src='+jsonThing+' style="width:550px;height:350px;">'
			)
			var faceThing = snapshot.val().devices.cameras['_piRisli3AVbF249MOnd7TfxFGotw7-JHWErCeEm4vyKybMgyjpLWA'].last_event.image_url;
			if (checkFace(faceThing)) {
				playSong(true);
			} else {
				break;
			}

		});
	}

})(window);
