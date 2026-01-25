import { useState } from "react";
import MemberClass from "./components/MemberClass";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("re-rendering class");

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={() => setCount2((count2) => count2 + 1)}>
        count2 is {count2}
      </button>
      <MemberClass param={count}></MemberClass>
    </>
  );
}

export default App;
