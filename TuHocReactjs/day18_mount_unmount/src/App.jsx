import { ShowContent } from "./components/Content";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
      {show ? <ShowContent></ShowContent> : ""}
    </div>
  );
}

export default App;
