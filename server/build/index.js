"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// var WebSocketServer = require("ws").Server;
// var wss = new WebSocketServer({ port: 8080 });
// wss.on('connection', function() {
//     wss.send('Welcome to cyber chat');
// })
var app = express();
app.get('/', function (req, res) {
    res.send('Express with Typescript Server');
});
var PORT = 8080;
app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});
