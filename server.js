var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  io.emit('data',{hello:'asd'});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://new.vk.com/audios80990642";

/*request(url, function (error, response, body) {

});*/
