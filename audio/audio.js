'use strict';
/*
// Import the interface to Tessel hardware
const tessel = require('tessel');

// Turn one of the LEDs on to start.
tessel.led[2].on();

// Blink!
setInterval(() => {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}, 100);

console.log("Tessel Working / I'm blinking! (Press CTRL + C to stop)");
*/

// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
- Play audio from an amusing scene between Luke Skywalker, R2-D2 and Yoda
- When the audio reaches the end, play it again from the beginning.
*********************************************/

var path = require('path');
var av = require('tessel-av');
var mp3 = path.join(__dirname, 'jQuery-song.mp3');
var sound = new av.Player(mp3);

sound.play();

// Party Time:  plays song continuously
sound.on('ended', function(seconds) {
  sound.play();
});


// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This servo module demo turns the servo around
1/10 of its full rotation  every 500ms, then
resets it after 10 turns, reading out position
to the console at each movement.
*********************************************/

var tessel = require('tessel');
var servolib = require('servo-pca9685');

var servo = servolib.use(tessel.port['A']);

var servo1 = 1; // We have a servo plugged in at position 1

servo.on('ready', function () {
  var position = 0;  //  Target position of the servo between 0 (min) and 1 (max).

  //  Set the minimum and maximum duty cycle for servo 1.
  //  If the servo doesn't move to its full extent or stalls out
  //  and gets hot, try tuning these values (0.05 and 0.12).
  //  Moving them towards each other = less movement range
  //  Moving them apart = more range, more likely to stall and burn out
  servo.configure(servo1, 0.05, 0.12, function () {
    setInterval(function () {
      console.log('Position (in range 0-1):', position);
      //  Set servo #1 to position pos.
      servo.move(servo1, position);

      // Increment by 10% (~18 deg for a normal servo)
      position += 0.1;
      if (position > 1) {
        position = 0; // Reset servo position
      }
    }, 500); // Every 500 milliseconds
  });
});

/////


// $(document).ready(function() {
//   var timer;
// document.getElementById('timer').innerHTML =
// 25 + ":" + 00;
// startTimer();

// function startTimer() {

//   var presentTime = document.getElementById('timer').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if(s==59){m=m-1}
//   //if(m<0){alert('timer completed')}

//   document.getElementById('timer').innerHTML =
//   m + ":" + s;
//   timer = setTimeout(startTimer, 1000);
// }

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
//   if (sec < 0) {sec = "59"};
//   return sec;
// }

// $("#party_time").on('click', function(){
//   console.log("The party button was clicked.");

// sound.play();

// // Party Time:  plays song continuously
// sound.on('ended', function(seconds) {
//   sound.play();
// });

// servo.on('ready', function () {
//   var position = 0;  //  Target position of the servo between 0 (min) and 1 (max).

//   //  Set the minimum and maximum duty cycle for servo 1.
//   //  If the servo doesn't move to its full extent or stalls out
//   //  and gets hot, try tuning these values (0.05 and 0.12).
//   //  Moving them towards each other = less movement range
//   //  Moving them apart = more range, more likely to stall and burn out
//   servo.configure(servo1, 0.05, 0.12, function () {
//     setInterval(function () {
//       console.log('Position (in range 0-1):', position);
//       //  Set servo #1 to position pos.
//       servo.move(servo1, position);

//       // Increment by 10% (~18 deg for a normal servo)
//       position += 0.1;
//       if (position > 1) {
//         position = 0; // Reset servo position
//       }
//     }, 500); // Every 500 milliseconds
//   });
// });

// });
// $("#stop").on('click', function(){
//   console.log("The stop button was clicked.");
//   clearTimeout(timer);
// });

// $("#reset").on('click', function(){
//   console.log("The reset button was clicked.");
//   window.location.reload();
// });

// });

