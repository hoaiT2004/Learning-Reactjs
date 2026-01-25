import { memo } from "react";

function MemberClass(props) {
  console.log("re-rendering subclass");
  return <div>Count of member class is {props.count}</div>;
}

export default memo(MemberClass);
