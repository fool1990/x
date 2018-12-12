import React, { useState, useEffect } from 'react'
import { useTitle } from 'react-use'

function useCounter(initialCount) {
  const [ count, setCount ] = useState(initialCount)
  const add = () => {
    setCount(count + 1)
  }
  return [count, add]
}

// function useTitle(title) {
//   useEffect(() => {
//     document.title = title
//   },[title])
// }

export default function ({title}) {
  const [ count, add ] = useCounter(0)
  useTitle(count)

  return (
    <div>
      <h3>You clicked: {count} times</h3>
      <button onClick={add}>+</button>
    </div>
  )

}

