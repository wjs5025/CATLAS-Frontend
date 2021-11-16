import React, { useState } from "react";
import axios from "axios";
import "./css/SignIn.css";
import { useHistory } from "react-router";

const SignIn = () => {
  const history = useHistory();
  const [InputID, setInputID] = useState("");
  const [InputPW, setInputPW] = useState("");

  // 로그인 버튼 클릭시
  const Login = () => {
    axios
      .post(
        "http://172.18.3.25:3001/SignIn",
        {
          params: {
            userid: InputID,
            password: InputPW,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data !== "error") {
          sessionStorage.setItem("id", InputID);
          sessionStorage.setItem("Sid", res.data);
          document.location.href = "/";
        } else {
          alert("로그인 정보가 일치하지 않습니다");
        }
      })
      .catch();
  };

  return (
    <div>
      <>
        <div className="SignIn_container noDrag">
          <div className="SignIn_inner">
            <div style={{ margin: "50px" }}>
              <h1
                style={{
                  fontFamily: "SCDream7",
                  textDecoration: "underline",
                  textDecorationColor: "#f6330a",
                }}
              >
                로그인
              </h1>
            </div>
            <div className="input_Area">
              <div className="inputBox_div">
                <label>아이디 / id</label>
                <input
                  className="inputBox"
                  type="text"
                  name="id"
                  value={InputID}
                  onChange={(e) => setInputID(e.target.value)}
                />
              </div>
              <div className="inputBox_div">
                <label>비밀번호 / password</label>
                <input
                  className="inputBox"
                  type="password"
                  name="pw"
                  value={InputPW}
                  onChange={(e) => setInputPW(e.target.value)}
                />
                <p style={{ textAlign: "initial" }}></p>
              </div>
            </div>
            <div className="inputBox_div">
              <button
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    this.handleClick();
                  }
                }}
                className="submitBtn"
                onClick={() => Login()}
              >
                LOGIN
              </button>
              <div style={{ display: "flex" }}>
                <div
                  className="FindBtn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div href="https://www.naver.com/">Forgot your ID/PW ?</div>
                </div>
                <div className="SignUpBtn">
                  <div
                    onClick={() => {
                      history.push("/SignUp");
                    }}
                  >
                    SIGN UP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
export default SignIn;
