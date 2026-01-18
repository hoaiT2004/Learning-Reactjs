import { useState } from "react";

export function Caculate() {
  const [count, setCount] = useState(0);

  const increase = () => {
    console.log("So truoc khi tang:", count);
    setCount(count + 1);
  };

  const decrease = () => {
    console.log("So truoc khi giam:", count);
    setCount(count - 1);
  };

  return (
    <>
      <h1>Số hiện tại_2: {count}</h1>
      <button onClick={increase}>Cộng thêm 1</button>
      <button onClick={decrease}>Trừ đi 1</button>
    </>
  );
}

export const PI = 3.14;

export default function Caculate_2() {
  const [count, setCount] = useState(0);

  const increase = () => {
    console.log("So truoc khi tang:", count);
    setCount(count + 1);
  };

  const decrease = () => {
    console.log("So truoc khi giam:", count);
    setCount(count - 1);
  };

  return (
    <>
      <h1>Số hiện tại: {count}</h1>
      <button onClick={increase}>Cộng thêm 1</button>
      <button onClick={decrease}>Trừ đi 1</button>
    </>
  );
}
