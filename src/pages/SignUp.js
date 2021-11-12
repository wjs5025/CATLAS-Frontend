import { useState } from "react";
import "./css/SignUp.css";
import axios from "axios";

const SignUp = () => {
  const [InputID, setInputID] = useState("");
  const [InputPW, setInputPW] = useState("");
  const [InputEmail, setInputEmail] = useState("");
  const [InputName, setInputName] = useState("");
  const [InputPhnum, setInputPhnum] = useState("");

  const SignUp = () => {
    alert(InputID);

    axios
      .post("http://172.18.3.25:3001/SignUp", {
        params: {
          userid: InputID,
          password: InputPW,
          email: InputEmail,
          name: InputName,
          phonenumber: InputPhnum,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <>
      <div className="SignUp_container noDrag">
        <div className="SignUp_inner">
          <div style={{ margin: "50px" }}>
            <h1
              style={{
                fontFamily: "SCDream7",
              }}
            >
              환영합니다 !
            </h1>
            <h4>지금 바로 CATLAS 와 함께하세요</h4>
          </div>

          <div className="inputBox_div">
            <label>아이디 / id</label>
            <input
              className="inputBox"
              type="text"
              value={InputID}
              onChange={(e) => setInputID(e.target.value)}
            />
          </div>
          <div className="inputBox_div">
            <label>비밀번호 / password</label>
            <input
              className="inputBox"
              type="text"
              value={InputPW}
              onChange={(e) => setInputPW(e.target.value)}
            />
            <p
              style={{
                textAlign: "initial",
                fontSize: "12px",
                color: "gray",
              }}
            >
              * 영문, 숫자, 특수문자 포함 8자 이상
            </p>
          </div>

          <div className="inputBox_div">
            <label>비밀번호 확인 / password check</label>
            <input className="inputBox" type="text" />
          </div>
          <div className="inputBox_div">
            <label>이메일 / e-mail</label>
            <input
              className="inputBox"
              type="text"
              value={InputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </div>
          <div className="inputBox_container">
            <div className="inputBox_div2">
              <label>이름 / name</label>
              <input
                className="inputBox"
                type="text"
                value={InputName}
                onChange={(e) => setInputName(e.target.value)}
              />
            </div>
            <div className="inputBox_div2">
              <label>전화번호 / phone number</label>
              <input
                className="inputBox"
                type="text"
                value={InputPhnum}
                onChange={(e) => setInputPhnum(e.target.value)}
              />
            </div>
          </div>
          <div className="inputBox_div">
            <button className="submitBtn" onClick={SignUp}>
              가입하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
