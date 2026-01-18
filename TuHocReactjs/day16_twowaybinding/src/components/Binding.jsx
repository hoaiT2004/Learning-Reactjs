import React, { useState } from "react";

function Binding() {
  const students = [
    {
      id: 1,
      name: "hoa",
    },
    {
      id: 2,
      name: "hoa2",
    },
    {
      id: 3,
      name: "hoa3",
    },
    {
      id: 4,
      name: "hoa4",
    },
    {
      id: 5,
      name: "hoa5",
    },
    {
      id: 6,
      name: "hoa6",
    },
  ];
  const [selectedStudent, setSelectStudent] = useState([]);

  const handleClick = (id) => {
    const isExisted = selectedStudent.some((item) => item.id === id);
    if (!isExisted) {
      const idx = id;
      const clickedStudent = students.find(({ id }) => id == idx);
      setSelectStudent([...selectedStudent, clickedStudent]);
    } else {
      alert(id + " đã tồn tại");
    }
  };

  const checkClick = (id) => {
    return !!selectedStudent.find((item) => item.id === id);
  };

  const handleDeleteButton = (id) => {
    const newSelectedStudent = selectedStudent.filter((item) => item.id !== id);
    setSelectStudent(newSelectedStudent);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((obj, index) => {
            return (
              <React.Fragment key={index}>
                <tr>
                  <td>{obj.id}</td>
                  <td>{obj.name}</td>
                  <td>
                    <input
                      style={{ height: 30, width: 30 }}
                      type="checkbox"
                      value={index}
                      checked={checkClick(obj.id)}
                      onChange={() => handleClick(obj.id)}
                    ></input>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <hr></hr>
      Danh sách dữ liệu chọn
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedStudent.length > 0 ? (
            selectedStudent.map((obj, index) => {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <td>{obj.id}</td>
                    <td>{obj.name}</td>
                    <td>
                      <button
                        name="fake_button"
                        style={{ height: 30, width: 50, margin_top: 10 }}
                        type="radio"
                        onClick={() => handleDeleteButton(obj.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })
          ) : (
            <tr>
              <td>Không có data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Binding;
