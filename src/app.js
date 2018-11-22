import React from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:17909')

socket.on('connect', function(){
  console.log('client connected')
})

socket.on('disconnect', function(){
  console.log('client disconnected')
})

socket.on('message', data => {
  console.log(data)
})

function App() {
  return (<div>
    <button onClick={handleClick}>发送</button>
  </div>)
}

function handleClick() {
  socket.emit('test', 'hello')
}

export default App
