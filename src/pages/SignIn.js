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
      .post("http://172.18.3.25:3001/SignIn", {
        params: {
          userid: InputID,
          password: InputPW,
        },
      })
      .then((res) => {
        if (res.data === "/") {
          alert("Login Success");
          sessionStorage.setItem("id", InputID);
          document.location.href = "/";
        } else {
          alert("Login Error");
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
                  type="text"
                  name="pw"
                  value={InputPW}
                  onChange={(e) => setInputPW(e.target.value)}
                />
                <p style={{ textAlign: "initial" }}></p>
              </div>
            </div>
            <div className="inputBox_div">
              <button className="submitBtn" onClick={() => Login()}>
                LOGIN
              </button>
              <button
                onClick={() => {
                  history.push("/SignUp");
                }}
              >
                회원가입
              </button>
            </div>
            <a
              href="http://naver.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forgot your ID/PW ?
            </a>
          </div>
        </div>
      </>
    </div>
  );
};
export default SignIn;
