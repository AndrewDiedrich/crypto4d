import express = require('express');
const router = express.Router();


router.get('/d3', (req, res) => {
    res.send('Websocket Route Works!')
    //res.sendFile(__dirname + '/index.html');

});

module.exports = router;
