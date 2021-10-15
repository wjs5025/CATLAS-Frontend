const Detail = (history) => {
  console.log(history.location);
  const test = history.location.data;
  console.log(test);
  return (
    <>
      <p>메롱</p>
      <p>{test.id}</p>
      <p>{test.title}</p>
      <p>{test.views}</p>
      <p>{test.date}</p>
      <p>{test.writer}</p>
    </>
  );
};
export default Detail;
