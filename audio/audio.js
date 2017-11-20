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


