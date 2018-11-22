import React, { useState } from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:17909')

socket.on('connect', function(){
  console.log('client connected')
})

socket.on('disconnect', function(){
  console.log('client disconnected')
})

function App() {
  const [ msgList, updateMsgList ] = useState([])

  socket.on('message', data => {
    updateMsgList([...msgList, data])
  })

  return (<div>
    <button onClick={handleClick}>发送</button>
    {msgList ?
      msgList.map((msg, index) => <div key={index}>{msg}</div>) :
      null}
  </div>)
}

function handleClick() {
  socket.emit('sendMsg', 'hello')
}

export default App
