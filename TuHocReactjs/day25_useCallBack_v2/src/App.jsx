import { useState, useEffect, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  useEffect(() => {
    console.log("running:", count);
  }, [handleClick]);

  return (
    <>
      <button onClick={handleClick}>count is {count}</button>
      <button onClick={() => setCount2((count2) => count2 + 1)}>
        count2 is {count2}
      </button>
    </>
  );
}

export default App;
