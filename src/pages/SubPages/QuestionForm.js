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
          <h3 className="Contact_subTitle">이메일로 문의하기</h3>
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
          <h3 className="Contact_subTitle">연락처로 문의하기</h3>
          <h4 style={{ fontFamily: "SCDream6" }}>
            경상국립대학교 컴퓨터과학과 전산개발연구실 <br /> 경상남도 진주시
            진주대로 501, 경상국립대학교 30동 313호
          </h4>
          <h4></h4>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
