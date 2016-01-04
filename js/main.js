//video capture
'use strict';

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {
  audio: false,
  video: true
};
var video = document.querySelector('video');

function successCallback(stream) {
  window.stream = stream; // stream available to console
  if (window.URL) {
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);


//take photo
var canvas = document.querySelector('canvas');

$('button#take_picture').on('click', function(){
  var c_height = video.videoHeight;
  var c_width = video.videoWidth;
  canvas.width = c_width;
  canvas.height = c_height;
  var context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, c_width, c_height);
  //var dataUrl = canvas.toDataURL("image/jpeg", 0.85);
  // $.ajax({
  //   type: "POST",
  //   script: "/main.py",
  //   data: {imgBase64: dataUrl},
  //   success: function(data, status) {
  //     console.log(data);
  //   }

  // });
});