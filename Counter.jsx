import React, { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0);

    const handleadd = () => {
        const newcount = count +1;
        setcount(newcount)
    }
    
  return (
    <div style={{border:'2px solid yellow'}}>
      <h2>counter is {count}</h2>
      <button onClick={handleadd}>add</button>
    </div>
  )
}

export default Counter
