import React, { useState } from "react";
import SubClass1 from "./components/SubClass1";

export const MyContext = React.createContext();

function App() {
  const [val, setVal] = useState(1);
  return (
    <>
      {/* Nếu val thay đổi thì các component sử dụng useContext(MyContext) sẽ bị re-render cho dù component
    đó có dùng React.memo or component App có bị re-render. */}
      <MyContext.Provider value={val}>
        <SubClass1></SubClass1>
      </MyContext.Provider>
      <h1>Giá trị: {val}</h1>
      <button onClick={() => setVal(val + 1)}>Increase</button>
    </>
  );
}

export default App;
