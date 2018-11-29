import React, { useState, useEffect } from 'react'

export default function ({title}) {
  const [ count, setCount ] = useState(0)
  
  useEffect(() => {
    document.title = count
  })

  // useEffect(() => {
  //   document.title = count
  // }, [title])

  return (
    <div>
      <h3>You clicked: {count} time</h3>
      <button onClick={add}>+</button>
    </div>
  )

  function add() {
    setCount(count + 1)
  }
}

