import React, { memo } from "react";

function SubClass({ func }) {
  return console.log("subclass:", func);
}

export default memo(SubClass);
