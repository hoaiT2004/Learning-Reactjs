function EventHandle() {
  const ShowMessage = () => {
    console.log("Đã kích hoạt");
    alert("Hello world");
  };

  return (
    <>
      <button onClick={ShowMessage}>Click me</button>
    </>
  );
}

export default EventHandle;
