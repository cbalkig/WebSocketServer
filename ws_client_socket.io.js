var socket = require('socket.io-client')('http://localhost:9001');
socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});