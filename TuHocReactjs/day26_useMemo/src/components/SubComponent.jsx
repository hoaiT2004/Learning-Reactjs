import React, { useState, useMemo, useRef } from "react";

function SubComponent() {
  const [subjects, setSubjects] = useState([
    {
      name: "Sach hay",
      price: 10000,
    },
  ]);

  const focus = useRef(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    console.log("name:", name, "\tprice:", price);
    setSubjects([...subjects, { name, price }]);
    focus.current.focus();
  };

  //   const totalPrice = subjects.reduce((cur, course) => {
  //     console.log("running!");
  //     return cur + course.price;
  //   }, 0);

  const totalPrice = useMemo(() => {
    console.log("running!");
    return subjects.reduce((cur, course) => {
      return cur + course.price;
    }, 0);
  }, [subjects]);

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setPrice(+e.target.value)} />
      <button onClick={handleAdd} ref={focus}>
        Add
      </button>
      <hr></hr>
      <div>
        <p>Total:{totalPrice}</p>
        <p>Danh sach:</p>
        <table>
          <thead>
            <tr>
              <th style={{ width: 100 }}>Ten</th>
              <th style={{ width: 100 }}>Gia</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((sb, index) => {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <td style={{ width: 100 }}>{sb.name}</td>
                    <td style={{ width: 100 }}>{sb.price}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SubComponent;
