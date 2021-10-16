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
      .post("api/SignIn", {
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
    axios.post("api//Signout").then((res) => {
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

  return (
    <div>
      {sessionStorage.getItem("user_id")} 님이 로그인 중!
      <p>SignIn</p>
      <div>
        <label htmlFor="input_id">ID : </label>
        <input
          type="text"
          name="name"
          value={inputId}
          onChange={handleInputId}
        />
      </div>
      <div>
        <label htmlFor="input_pw">EMAIL : </label>
        <input
          type="text"
          name="email"
          value={inputEm}
          onChange={handleInputEm}
        />
      </div>
      <div>
        <button type="button" onClick={onClickLogin}>
          Login
        </button>
        <button type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
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
