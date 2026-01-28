import React, { useReducer, useState, useMemo } from "react";

const reducer = (state, action) => {
  if (action.type === "add") {
    console.log("payload add:", action.payload);
    return [...state, action.payload];
  } else if (action.type === "delete") {
    console.log("payload delete:", action.payload);
    const newProductList = state.filter((x) => {
      return x.name !== action.payload.name || x.price !== action.payload.price;
    });
    return newProductList;
  }
};

function MainHandle() {
  const [products, dispatch] = useReducer(reducer, [
    {
      name: "Sach hay",
      price: 10000,
    },
  ]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const newProduct = {
    name,
    price,
  };

  const totalPrice = useMemo(() => {
    return products.reduce((cur, item) => {
      return cur + item.price;
    }, 0);
  }, [products]);

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setPrice(+e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "add", payload: newProduct });
        }}
        ref={focus}
      >
        Add
      </button>
      <hr></hr>
      <div>
        <p>Tổng tiền = {totalPrice}</p>
        <p>Danh sach:</p>
        <table>
          <thead>
            <tr>
              <th style={{ width: 100 }}>Ten</th>
              <th style={{ width: 100 }}>Gia</th>
              <th style={{ width: 100 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((sb, index) => {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <td style={{ width: 100 }}>{sb.name}</td>
                    <td style={{ width: 100 }}>{sb.price}</td>
                    <th style={{ width: 100 }}>
                      <button
                        onClick={() => {
                          dispatch({ type: "delete", payload: sb });
                        }}
                      >
                        Delete
                      </button>
                    </th>
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

export default MainHandle;
