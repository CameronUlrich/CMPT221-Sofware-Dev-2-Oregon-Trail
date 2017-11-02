const express = require('express')
const app = express()
app.use(express.static('public'))
app.get('/', function (req, res) {
res.sendFile('views/index.html', {root: __dirname })
})
app.get('/mainmenu', function (req, res) {
res.sendFile('views/mainmenu.html', {root: __dirname })
})
app.get('/game', function (req, res) {
res.sendFile('views/game.html', {root: __dirname })
})
app.get('/topten', function (req, res) {
res.sendFile('views/topten.html', {root: __dirname })
})


// require our gameController (so we can access the data in it)
var game = require('./controllers/gameController');
// create an API route so we can request a screen by sending the id (array index)
app.get('/game/getNewGameScreen/:screenId', function(req, res) {
// get the screen
var gameScreen = game.startGameScreens[req.params.screenId];
//console.log("\n this is the main node file! \n" + gameScreen)
// return the html
res.setHeader('Content-Type', 'text/html');
res.send(gameScreen);
})





app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})