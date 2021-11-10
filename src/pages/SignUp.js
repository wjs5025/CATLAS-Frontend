import "./css/SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="SignUp_container noDrag">
        <div className="SignUp_inner">
          <div style={{ margin: "50px" }}>
            <h1 style={{ fontFamily: "SCDream7" }}>환영합니다 !</h1>
            <h4>지금 바로 CATLAS 와 함께하세요</h4>
          </div>

          <div className="inputBox_div">
            <label>이메일 / e-mail</label>
            <input className="inputBox" type="text" name="email" />
          </div>
          <div className="inputBox_div">
            <label>비밀번호 / password</label>
            <input className="inputBox" type="text" name="pw" />
            <p style={{ textAlign: "initial" }}>
              * 영문, 숫자, 특수문자 포함 8자 이상
            </p>
          </div>

          <div className="inputBox_div">
            <label>비밀번호 확인 / password check</label>
            <input className="inputBox" type="text" name="pwCheck" />
          </div>
          <div className="inputBox_div">
            <label>이메일 / e-mail</label>
            <input className="inputBox" type="text" name="email" />
          </div>
          <div className="inputBox_container">
            <div className="inputBox_div2">
              <label>이름 / name</label>
              <input className="inputBox" type="text" name="pwCheck" />
            </div>
            <div className="inputBox_div2">
              <label>전화번호 / phone number</label>
              <input className="inputBox" type="text" name="pwCheck" />
            </div>
          </div>
          <div className="inputBox_div">
            <input
              value="가입하기"
              className="submitBtn"
              type="submit"
              name="submit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
