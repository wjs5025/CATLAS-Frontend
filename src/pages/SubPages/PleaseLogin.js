import Warning from "../../assets/Images/warning.png";

const PleaseLogin = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ height: "20vh" }}> </div>

      <img className="noDrag" src={Warning} width={130} />
      <div style={{ height: "10vh" }}> </div>
      <h1 className="noDrag" style={{ fontFamily: "SCDream5" }}>
        로그인 후 이용해주세요
      </h1>
      <a className="a_tag goHome" href="/SignIn">
        로그인 하러가기
      </a>
    </div>
  );
};

export default PleaseLogin;
