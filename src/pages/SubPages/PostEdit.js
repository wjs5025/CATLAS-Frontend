import "../css/Posting.css";
import { useHistory } from "react-router";
import Check from "../../assets/Images/Check.png";
import Back from "../../assets/Images/Back.png";
import axios from "axios";
import { useEffect, useState } from "react";
//게시판

const PostEdit = () => {
  const history = useHistory();
  const pathArray = history.location.pathname.split("/");

  const BoardPath = pathArray[2];
  const PostNum = Number(pathArray[3]);

  const [InputTitle, setTitle] = useState("");
  const [InputContents, setContents] = useState("");

  const Init = () => {
    setTitle(history.location.state.title);
    setContents(history.location.state.contents);
  };

  const Done = () => {
    if (InputTitle.trim() === "") {
      alert("제목을 입력하세요");
    } else if (InputContents.trim() === "") {
      alert("내용을 입력하세요");
    } else {
      axios
        .get(
          "http://172.18.3.25:3001/Post_Modify",
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
          console.log("게시글수정 res", res);
        });
      alert("게시글 수정 완료");
      history.goBack();
    }
  };

  useEffect(Init, []);
  return (
    <>
      <div className="Forum_container">
        {/* 게시글 헤더 */}
        <div className="Detail_info noDrag">
          <h5 className="Board_header">{history.location.pathname}</h5>
        </div>
        <div className="title noBorderBottom">
          <input
            maxLength="45"
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
          <div style={{ flexBasis: "15%" }}>
            {history.location.state.date.substr(0, 10)}
          </div>
          <div style={{ flexBasis: "15%" }}>{sessionStorage.id}</div>
        </div>
        <textarea
          value={InputContents}
          onChange={(e) => setContents(e.target.value)}
          className="Detail_contents borderGray posting"
        ></textarea>
        <div className="Detail_bottom">
          <img
            className="FloatingBtn marginRight2"
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
            className="FloatingBtn marginRight3"
            onClick={() => {
              if (
                window.confirm(
                  "주의 : 이 페이지를 벗어나면 수정 사항은 저장되지 않습니다"
                )
              ) {
                history.goBack();
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

export default PostEdit;
