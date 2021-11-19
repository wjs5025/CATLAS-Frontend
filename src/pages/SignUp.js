import { useState } from "react";
import "./css/SignUp.css";
import axios from "axios";
import { useHistory } from "react-router";
import { useEffect } from "react";

const SignUp = () => {
  const history = useHistory();
  const [InputID, setInputID] = useState("");
  const [InputPW, setInputPW] = useState("");
  const [InputPwCheck, setInputPwCheck] = useState("");
  const [InputEmail, setInputEmail] = useState("");
  const [InputName, setInputName] = useState("");
  const [InputPhnum, setInputPhnum] = useState("");

  // 비밀번호 검사 관련 변수 선언 (문구 = pwCheck, 클래스명 = check)
  const [pwClass, setpwClass] = useState("pwInit");
  const [pwCheck, setpwCheck] = useState("비밀번호가 일치하지 않습니다");
  const [pwCheckClass, setpwCheckClass] = useState("checkInit");
  const [pwAllow, setpwAllow] = useState(false);

  useEffect(() => {
    if (InputPhnum.length === 10) {
      setInputPhnum(InputPhnum.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }

    if (InputPhnum.length === 13) {
      setInputPhnum(
        InputPhnum.replace(/-/g, "").replace(
          /(\d{3})(\d{4})(\d{4})/,
          "$1-$2-$3"
        )
      );
    }
  }, [InputPhnum]);
  // 비밀번호와 비밀번호 확인이 일치하는지 검사 checkPW()
  const checkPW = () => {
    if (InputPwCheck === "") {
      setpwCheck("* 비밀번호를 입력해주세요.");
      setpwCheckClass("checkInit");
      setpwAllow(false);
    } else if (InputPW === InputPwCheck) {
      setpwCheck("* 비밀번호가 일치합니다");
      setpwCheckClass("checkTrue");
      setpwAllow(true);
    } else {
      setpwCheck("* 비밀번호가 일치하지 않습니다");
      setpwCheckClass("checkInit");
      setpwAllow(false);
    }

    let pwExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=_]).*$/;

    if (pwExp.test(InputPW)) {
      setpwClass("pwTrue");
    } else {
      setpwClass("pwInit");
    }
  };
  useEffect(checkPW, [InputPW, InputPwCheck]);

  // 가입하기 버튼 클릭 SignUpBtn()
  const SignUpBtn = () => {
    let pwExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=_]).*$/;
    var emailExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var phExp = /^\d{3}-\d{3,4}-\d{4}$/;

    if (!pwExp.test(InputPW)) {
      alert("비밀번호를 올바른 형식으로 입력하세요");
    } else if (!pwAllow) {
      alert("두 비밀번호가 일치하지 않습니다");
    } else if (!emailExp.test(InputEmail)) {
      alert("이메일을 올바른 형식으로 입력하세요");
    } else if (!phExp.test(InputPhnum)) {
      alert("전화번호를 올바른 형식으로 입력하세요");
    } else {
      axios
        .post(
          "http://172.18.3.25:3001/SignUp",
          {
            params: {
              userid: InputID,
              password: InputPW,
              email: InputEmail,
              name: InputName,
              phonenumber: InputPhnum,
            },
          },
          { withCredentials: true }
        )
        .then((res) => {
          alert("회원가입 완료 !");
          history.push("/");
        });
    }
  };

  return (
    <>
      <div className="SignUp_container noDrag">
        <div className="SignUp_inner">
          <div style={{ margin: "50px" }}>
            <h1
              style={{
                fontFamily: "SCDream7",
                textDecoration: "underline #f6330a",
              }}
            >
              환영합니다 !
            </h1>
            <h4>지금 바로 CATLAS 와 함께하세요</h4>
          </div>

          <div className="inputBox_div">
            <label>아이디 / id</label>
            <input
              maxLength="15"
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
              type="password"
              value={InputPW.trim()}
              onChange={(e) => setInputPW(e.target.value)}
            />
            <p className={pwClass}>* 영문, 숫자, 특수문자 포함 8자 이상</p>
          </div>

          <div className="inputBox_div">
            <label>비밀번호 확인 / password check</label>
            <input
              className="inputBox"
              type="password"
              value={InputPwCheck.trim()}
              onChange={(e) => {
                setInputPwCheck(e.target.value);
              }}
            />
            <p className={pwCheckClass}>{pwCheck}</p>
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
            <button className="submitBtn" onClick={SignUpBtn}>
              가입하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
