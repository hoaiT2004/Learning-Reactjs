import React, { useContext } from "react";
import { MyContext } from "../App";

function SubClass2() {
  const contextVal = useContext(MyContext);
  console.log("subclass2");
  return (
    <div>
      <h1>component 2: {contextVal}</h1>
    </div>
  );
}

export default React.memo(SubClass2);
