import React, { useState, useEffect } from "react";
import axios from "axios";

const SignIn = () => {
  const [inputId, setInputId] = useState("");
  const [inputEm, setInputEm] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputEm = (e) => {
    setInputEm(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
    console.log("ID : ", inputId);
    console.log("PW : ", inputEm);
    axios
      .post("/SignIn", {
        params: {
          name: inputId,
          email: inputEm,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === "/") {
          alert("Login Success");
          sessionStorage.setItem("user_id", inputId);
        } else {
          alert("Login Error");
        }
        // 작업 완료 되면 페이지 이동(새로고침)
        document.location.href = "/";
      })
      .catch();
  };

  const onClickLogout = () => {
    sessionStorage.removeItem("user_id");
    axios.post("/Signout").then((res) => {
      alert("logout!");
    });
    document.location.href = "/";
  };

  useEffect(() => {
    axios
      .get("")
      .then((res) => console.log(res))
      .catch();
  }, []);
  console.log(sessionStorage.getItem("user_id") + "님이 로그인 중");
  return (
    <div>
      <>
        <div className="SignUp_container noDrag">
          <div className="SignUp_inner">
            <div style={{ margin: "50px" }}>
              <h1 style={{ fontFamily: "SCDream7" }}>로그인</h1>
            </div>

            <div className="inputBox_div">
              <label>아이디 / id</label>
              <input
                className="inputBox"
                type="text"
                name="id"
                value={inputId}
                onChange={handleInputId}
              />
            </div>
            <div className="inputBox_div">
              <label>비밀번호 / password</label>
              <input className="inputBox" type="text" name="pw" />
              <p style={{ textAlign: "initial" }}></p>
            </div>
            {/*
            <div className="inputBox_div">
              <label>이메일 / e-mail</label>
              <input
                className="inputBox"
                type="text"
                name="email"
                value={inputEm}
                onChange={handleInputEm}
              />
            </div>
            */}
            <div className="inputBox_div">
              <button className="submitBtn" onClick={onClickLogin}>
                LOGIN
              </button>
            </div>
            <a href="http://naver.com" target="_blank">
              Forgot your ID/PW ?
            </a>
            {/*
            <button type="button" onClick={onClickLogout}>
              Logout
            </button>
            */}
          </div>
        </div>
      </>
    </div>
  );
};
export default SignIn;

/*

  /*  const callApi = async () => {
      console.log("SI");
      axios.get("/api").then((res) => console.log(res.data));
  };
  
  useEffect(() => {
  callApi();
  },[]);
  

  
  return <div>test</div>;
  */
