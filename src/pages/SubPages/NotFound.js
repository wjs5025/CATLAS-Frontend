import Error from "../../assets/Images/error.png";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ height: "20vh" }}> </div>

      <img className="noDrag" src={Error} width={130} alt="" />
      <div style={{ height: "10vh" }}> </div>
      <h1 className="noDrag" style={{ fontFamily: "SCDream5" }}>
        잘못된 접근입니다
      </h1>
      <a className="a_tag goHome" href="/">
        홈으로 돌아가기
      </a>
    </div>
  );
};

export default NotFound;
