import React, { useState,useContext } from "react";
import axios from "axios";
import "./css/SignIn.css";
import { useHistory } from "react-router";
import { NewContext } from "../App";

const SignIn = () => {
  const serverURL = useContext(NewContext).serverURL;
  const history = useHistory();
  const [InputID, setInputID] = useState("");
  const [InputPW, setInputPW] = useState("");

  // 로그인 버튼 클릭시
  const Login = () => {
    if (InputID.trim() === "") {
      alert("아이디를 입력해주세요");
    } else if (InputPW.trim() === "") {
      alert("비밀번호를 입력해주세요");
    } else
      axios
        .post(
          serverURL+ "/SignIn",
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      Login();
                    }
                  }}
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      Login();
                    }
                  }}
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
              <button className="submitBtn" onClick={() => Login()}>
                LOGIN
              </button>
              <div style={{ display: "flex" }}>
                <div className="FindBtn">
                  <div
                    onClick={() => {
                      history.push("/Contact/문의하기");
                    }}
                  >
                    Forgot your ID/PW ?
                  </div>
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
