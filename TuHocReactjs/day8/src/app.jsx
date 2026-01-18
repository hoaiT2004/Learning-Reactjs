import { useState } from "preact/hooks";
import UserInfo from "./components/UserInfo";

const obj = [
  {
    id: 1,
    name: "Hoa",
    age: 18,
    height: 150,
  },
  {
    id: 2,
    name: "Hoang",
    age: 19,
    height: 100,
  },
  {
    id: 3,
    name: "Nam",
    age: 28,
    height: 200,
  },
];

export function App() {
  return obj.map((x) => {
    return <UserInfo data={x}></UserInfo>;
  });
}

export default App;
