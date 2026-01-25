import { Timer } from "./components/Timer";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return <>
  <button onClick={() => setShow(!show)}>Show</button>
  {show ? <Timer></Timer> : ""}
  </>
}

export default App;
