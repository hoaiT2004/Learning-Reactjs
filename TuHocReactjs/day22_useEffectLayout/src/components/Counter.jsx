import React, {useState, useEffect, useLayoutEffect} from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  
  useEffect(() => {
    if (count > 5) {
      setCount(0);
    }
  }, [count]);

  useLayoutEffect(() => {
    if (count2 > 5) {
      setCount2(0);
    }
  }, [count2]);

console.log(count2)
    return (
      <>
          <p>Phuong phap useEffect</p>
          <button onClick={() => setCount((count) => count + 1)}>
            Increase
          </button>
          <p>count is {count}</p>
          <hr></hr>
          <p>Phuong phap useLayoutEffect</p>
          <button onClick={() => setCount2((count2) => count2 + 1)}>
            Increase
          </button>
          <p>count is {count2}</p>
          
      </>
    )
}

export default Counter
