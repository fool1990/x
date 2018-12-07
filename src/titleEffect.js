import React, { useState, useEffect } from 'react'

function useCounter(initialCount) {
  const [ count, setCount ] = useState(initialCount)
  const add = () => {
    setCount(count + 1)
  }
  return [count, add]
}

export default function ({title}) {
  const [ count, add ] = useCounter(0)
  
  useEffect(() => {
    document.title = count
  })

  // useEffect(() => {
  //   document.title = count
  // }, [title])

  return (
    <div>
      <h3>You clicked: {count} times</h3>
      <button onClick={add}>+</button>
    </div>
  )

}

