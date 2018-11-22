const server = require('http').createServer()
const io = require('socket.io')(server)

io.on('connection', client => {
  client.on('disconnect', () => { 
    console.log('disconnected')
  })

  client.on('test', data => {
    console.log(data)
    client.send('msg received')
  })
})

server.listen(17909, function() {
  console.log(new Date() + ' Server is listening on port ' + 17909)
})
