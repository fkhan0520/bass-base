var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var cameraStream;

getUserMedia.call(navigator, {
    video: true,
    audio: false
}, function (stream) {
    /*
    Here's where you handle the stream differently. Chrome needs to convert the stream
    to an object URL, but Firefox's stream already is one.
    */
    if (window.webkitURL) {
        video.src = window.webkitURL.createObjectURL(stream);
    } else {
        video.src = stream;
    }

    //save it for later
    cameraStream = stream;

    video.play();
}, function () {});
