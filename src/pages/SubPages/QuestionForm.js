import "../css/Contact.css";
import { useState } from "react";

const QuestionForm = ({ history, match }) => {
  const [isLogin, SetLogin] = useState(0);

  return (
    <>
      <div className="Contact_container">
        <div className="Board_Info noDrag">
          <h5 className="Board_header">{history.location.pathname}</h5>
          <p style={{ fontFamily: "SCDream5" }}>문의사항이 있다면 문의하세요</p>
        </div>
        <div className="Contact_Email">
          <h3>이메일로 문의하기</h3>
          <div>
            <div className="Contact_inputBox">
              <label>보내는 사람 / name</label>
              <input type="text" placeholder={sessionStorage.id} />
            </div>
            <div className="Contact_inputBox">
              <label>회신 받을 이메일 / e-mail</label>
              <input type="text" />
            </div>
          </div>

          <div>
            <label>문의 내용 / e-mail</label>
            <input type="text" />
          </div>

          <div>
            <button>제출하기</button>
          </div>
        </div>
        <div>
          <h2>연락처로 문의하기</h2>
          <h3>컴퓨터과학과 전산개발실 구석방 010-7589-5025</h3>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
