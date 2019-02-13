import React, { useState, useEffect, useCallback } from 'react'
import firebase from "firebase"

const config = require('../firebase')
firebase.initializeApp(config)
const db = firebase.database()
const chatRoom = db.ref().child('posts')

function useCounter(initialCount) {
  const [ count, setCount ] = useState(initialCount)
  const add = () => {
    setCount(count + 1)
  }
  return [count, add]
}

function useTitle(title) {
  useEffect(() => {
    document.title = title
  },[title])
}

export default function ({title}) {
  const [ count, add ] = useCounter(0)
  const [ message, leaveMsg ] = useState('')

  const handleInput = useCallback(e => leaveMsg(e.target.value))
  const handleSubmit = () => {
    const postKey = db.ref().child('posts').push({
      user_id:'xjsjsks',
      message
    })
    console.log(postKey)
  }
  
  useTitle(count)

  useEffect(() => {
    const handleNewMessages = snap => {
      console.log(snap.val())
      if (snap.val()) leaveMsg(snap.val())
    }
    chatRoom.on('value', handleNewMessages)
    return () => {
      chatRoom.off('value', handleNewMessages)
    };
  },[]);

  return (
    <div>
      <h3>You clicked: {count} times</h3>
      <button onClick={add}>+</button>
      <div>
        <input type="text" value={message} onChange={handleInput}/>
        <button onClick={handleSubmit}>send</button>
      </div>
    </div>
  )

}

