var io = require('socket.io')();

io.on('connection', function(socket){
  socket.on('click', function(data){
    io.sockets.emit('num', data)
  })
})

// your code here
module.exports = io;
