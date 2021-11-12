import "../css/Contact.css";

const QuestionForm = ({ history, match }) => {
  return (
    <>
      <div className="Contact_container">
        <h5 className="Board_header">{history.location.pathname}</h5>
      </div>
      <>
        <div className="noDrag">
          <div style={{ margin: "50px" }}>
            <h1 style={{ fontFamily: "SCDream7" }}>이메일로 문의하기</h1>
          </div>
          <div className="input_Area">
            <div className="inputBox_container">
              <div className="inputBox_div2">
                <label>보내는 사람 / name</label>
                <input className="inputBox" type="text" name="pwCheck" />
              </div>
              <div className="inputBox_div2">
                <label>회신 받을 이메일 / e-mail</label>
                <input className="inputBox" type="text" name="pwCheck" />
              </div>
            </div>
            <div className="inputBox_div">
              <label>문의 내용 / e-mail</label>
              <input
                style={{ width: "100%", height: "15vh" }}
                type="text"
                name="pwCheck"
              />
            </div>
          </div>

          <div className="inputBox_div">
            <button className="submitBtn">LOGIN</button>
          </div>
          <div style={{ margin: "50px" }}>
            <h1 style={{ fontFamily: "SCDream7" }}>연락처로 문의하기</h1>
            <h3 style={{ fontFamily: "SCDream7" }}>
              컴퓨터과학과 전산개발실 구석방 010-7589-5025
            </h3>
          </div>
        </div>
      </>
    </>
  );
};

export default QuestionForm;
