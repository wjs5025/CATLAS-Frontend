import "../css/Posting.css";
import { useHistory } from "react-router";
import Check from "../../assets/Images/Check.png";
import Back from "../../assets/Images/Back.png";
import axios from "axios";
import { useState } from "react";
//게시판

const Posting = () => {
  const history = useHistory();
  const pathArray = history.location.pathname.split("/");

  let getDate = new Date();
  let Year = getDate.getFullYear() + "-";
  let month = getDate.getMonth() + 1;
  let day = "-" + getDate.getDate();
  let today = Year + month + day;

  const BoardPath = pathArray[2];
  const PostNum = Number(pathArray[3]);

  const [InputTitle, setTitle] = useState("");
  const [InputContents, setContents] = useState("");

  const Done = () => {
    if (InputTitle.trim() === "") {
      alert("제목을 입력하세요");
    } else if (InputContents.trim() === "") {
      alert("내용을 입력하세요");
    } else {
      axios
        .get(
          "http://172.18.3.25:3001/Posting",
          {
            params: {
              BoardPath,
              PostNum,
              userid: sessionStorage.id,
              title: InputTitle,
              contents: InputContents,
            },
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("게시글작성 res", res.data);
        });
      alert("게시글 작성 완료");
      history.push("/" + pathArray[1] + "/" + pathArray[2]);
    }
  };

  return (
    <>
      <div className="Forum_container">
        {/* 게시글 헤더 */}
        <div className="Detail_info noDrag">
          <h5 className="Board_header">{history.location.pathname}</h5>
        </div>
        <div className="title noBorderBottom">
          <input
            className="borderGray"
            type="text"
            placeholder="제목을 입력하세요"
            style={{
              height: "40px",
              flexBasis: "60%",
              textAlign: "start",
              paddingLeft: "20px",
            }}
            value={InputTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div style={{ flexBasis: "15%" }}></div>
          <div style={{ flexBasis: "15%" }}>{today}</div>
          <div style={{ flexBasis: "15%" }}>{sessionStorage.id}</div>
        </div>
        <textarea
          value={InputContents}
          onChange={(e) => setContents(e.target.value)}
          className="Detail_contents borderGray posting"
        ></textarea>
        <div className="Detail_bottom">
          <img
            className="FloatingBtn"
            onClick={() => {
              if (window.confirm("게시글을 작성하시겠습니까?")) {
                Done();
              } else {
              }
            }}
            src={Check}
            width={35}
            alt=""
          />
          <img
            className="FloatingBtn marginRight"
            onClick={() => {
              if (
                window.confirm(
                  "주의 : 이 페이지를 벗어나면 작성된 내용은 저장되지 않습니다"
                )
              ) {
                history.push("/" + pathArray[1] + "/" + pathArray[2]);
              } else {
              }
            }}
            src={Back}
            width={35}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Posting;
