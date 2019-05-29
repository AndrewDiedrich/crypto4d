import express = require('express');

// var WebSocketServer = require("ws").Server;
// var wss = new WebSocketServer({ port: 8080 });

// wss.on('connection', function() {
//     wss.send('Welcome to cyber chat');

// })
const app: express.Application = express();
const server = require('http').createServer(app);
var io = require('socket.io')(server);

const d3 = require('./routes/d3');

app.use(express.static(__dirname + '/node_modules'));

//public routes
app.use('/api', d3);

//d3-node???????
//serve up a d3 html file
// app.get('/', function(req, res,next) {
//     res.sendFile(__dirname + '/index.html');
// });

io.on('connection', client => {
    console.log('Client connected...');

    client.on('join', data => {
        console.log(data);
    })
});

const PORT: number = 8081;
server.listen(PORT, () => {
    console.log(`WebSocket live on port ${PORT}`)
})
