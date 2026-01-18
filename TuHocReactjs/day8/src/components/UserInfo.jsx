function GetList({ data }) {
  console.log(data);
  return data ? (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>height</th>
          </tr>
        </thead>
        <tbody>
          {console.log("id=", data.id)}
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td style={{ textAlign: "center" }}>{data.height}</td>
          </tr>
        </tbody>
      </table>
    </>
  ) : (
    "Khong co data"
  );
}

export default GetList;
//const original = [1, 2, 3];
//const copy = [...original];
