import "../css/Contact.css";
import { useState } from "react";
const QuestionForm = ({ history }) => {
  const [reply_to, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  let SendParams = {
    from_name: sessionStorage.id,
    reply_to: reply_to,
    message: question,
  };

  const sendEmail = (e) => {
    if (reply_to === "") {
      alert("답변 받을 이메일을 입력해주세요");
    } else if (question === "") {
      alert("문의사항을 입력해주세요");
    } else {
      e.preventDefault();

      window.emailjs
        .send("service_vt46dwn", "template_u9xe7sh", SendParams)
        .then(
          (result) => {
            console.log(result.text);
            alert("문의사항이 정상적으로 전송되었습니다");
          },
          (error) => {
            console.log(error.text);
            alert("문의사항 전송에 실패했습니다");
          }
        );
    }
  };

  return (
    <>
      <div className="Contact_container">
        <div className="Board_Info noDrag">
          <h5 className="Board_header">{history.location.pathname}</h5>
        </div>
        <div className="Contact_Email">
          <h3 className="Contact_subTitle noDrag">이메일로 문의하기</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="Contact_inputBox">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0 5% 0 10%",
                }}
              >
                <label
                  className="noDrag"
                  style={{ width: "100%", fontFamily: "SCDream5" }}
                >
                  보내는 사람 / name
                </label>
                <input
                  className="QuestionInput"
                  style={{ width: "100%", height: "4vh" }}
                  type="text"
                  placeholder={sessionStorage.id}
                  value={sessionStorage.id}
                />
              </div>
            </div>

            <div className="Contact_inputBox">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0 10% 0 5%",
                }}
              >
                <label
                  className="noDrag"
                  style={{ width: "100%", fontFamily: "SCDream5" }}
                >
                  답변 받을 이메일 / e-mail
                </label>
                <input
                  className="QuestionInput"
                  style={{ width: "100%", height: "4vh" }}
                  type="text"
                  value={reply_to}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <label
                className="noDrag"
                style={{
                  width: "90%",
                  marginTop: "10px",
                  fontFamily: "SCDream5",
                }}
              >
                문의 내용 / question
              </label>
              <textarea
                className="QuestionInput"
                style={{ width: "90%", height: "30vh", resize: "none" }}
                type="text"
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "90%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div className="EmailSubmit" onClick={sendEmail}>
                SUBMIT
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="Contact_subTitle noDrag">연락처로 문의하기</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginLeft: "5%",
          }}
        >
          <h4
            style={{
              display: "flex",
              fontFamily: "SCDream4",
              width: "90%",
            }}
          >
            경상남도 진주시 진주대로 501, 경상국립대학교 30동 3층 313호
            전산개발연구실
          </h4>
          <h5
            style={{
              display: "flex",
              fontFamily: "SCDream4",
              width: "90%",
              marginLeft: "5%",
            }}
          >
            실 원 / 전 인 혁 📞 010-7589-5025
          </h5>
          <h5
            style={{
              display: "flex",
              fontFamily: "SCDream4",
              width: "90%",
              marginLeft: "5%",
            }}
          >
            실 원 / 김 우 석 📞 010-2811-5162
          </h5>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
