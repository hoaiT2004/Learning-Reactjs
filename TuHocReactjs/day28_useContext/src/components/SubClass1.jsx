import React, { useContext } from "react";
import { MyContext } from "../App";
import SubClass2 from "./SubClass2";

function SubClass1() {
  const contextVal = useContext(MyContext); //Nếu MyContext thay đổi thì component sẽ re-render
  console.log("subclass1");
  return (
    <div>
      <h1>Đây là giá trị của context: {contextVal}</h1>
      <SubClass2></SubClass2>
    </div>
  );
}

export default React.memo(SubClass1);
