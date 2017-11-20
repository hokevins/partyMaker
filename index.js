var tessel = require('tessel');
var http = require('http');
var express = require('express');
var router = express.Router();
var views = require('./views');
var audio = require('../audio/audio.js');

//audio.on => music on
//audio.off => music off
//audio.partyBreak => music for 5 min

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello from Tessel!\n");
})
    

server.listen(8080);
console.log("Server running http://192.168.1.101");

router.get('/', (req, res, next) => {
    //listen for the end of the timer
})

router.get('/party', (req, res, next) => {
    //set timeout 
    //run song for 5 min
})

//event handlers ('on click')
//party time
    //set timeout - 5min
    //stop countdown
        //countdown = 0
    //start music

//stop 
    //stops music

//reset
    //resume countdown

