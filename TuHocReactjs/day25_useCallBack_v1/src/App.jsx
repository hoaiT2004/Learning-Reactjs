import { useCallback, useState } from "react";
import SubClass from "./components/SubClass";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("class");

  return (
    <>
      <button onClick={handleClick}>count is {count}</button>
      <SubClass func={handleClick}></SubClass>
    </>
  );
}

export default App;
