(function(exports) {

	function playSong(intruderStatus) {
		if (intruderStatus) {
			$('#play').html(
				'<audio controls autoplay>' +
  					'<source src="mp3/cops.mp3" type="audio/mpeg">' +
				'</audio>'
			);
		}
	}

	function checkFace(faceThing1, faceThing2) {
	  	$.ajax({
		  type: "POST",
		  url: "/movement/"+faceThing1+"/"+faceThing2,
		  success: function(data,status){
		   console.log(data);
		   return data;
		  }});
	}



	exports.startApp = function() {
		console.log('start app.');

		var access_token = "c.9zmGsiuHL6xx6VIWXZpgzgh78bbj97v9dI1oSwfLJbX1XbUbjoTAYYNXPgJMaojO5OHmzPndT6RjHTEZvNYfhxREU7cJ5SD9MKTXogEMmDZVbjCbJH8gHVgAFy1WvFTBipGmDb778OiQdjji";
		var ref = new Firebase('wss://developer-api.nest.com');
		ref.auth(access_token);
		ref.on('value', function(snapshot) {
			var jsonThing = snapshot.val().devices.cameras['_piRisli3AVbF249MOnd7TfxFGotw7-JHWErCeEm4vyKybMgyjpLWA'].last_event.animated_image_url;
			$('#mug').html(
				'<img src='+jsonThing+' style="width:550px;height:350px;">'
			)
			var faceThing = snapshot.val().devices.cameras['_piRisli3AVbF249MOnd7TfxFGotw7-JHWErCeEm4vyKybMgyjpLWA'].last_event.image_url;
			
			var splitted = faceThing.split('/');
			console.log(splitted);
			console.log(faceThing);
			if ("False" == checkFace("http://i4.mirror.co.uk/incoming/article5744325.ece/ALTERNATES/s615/MAIN-Kanye-West.jpg", "http://media.gq.com/photos/5592fee87cc23bc8642421f0/master/w_840/rotators-2014-07-kanye-west-sidebar-2014-200.jpg")) {
				playSong(true);
			} 
		});
	}

})(window);
