import "../css/Board.css";
import React from "react";
import { useHistory, BrowserRouter as Router } from "react-router-dom";

//게시판
const Posting = () => {
  const history = useHistory();
  let today = new Date();
  console.log(today);
  const pathArray = history.location.pathname.split("/");
  // const BoardPath = pathArray[2];
  // const PostNum = Number(pathArray[3]);

  return (
    <>
      <Router>
        <div className="Forum_container">
          {/* 게시글 헤더 */}
          <div className="Detail_address">
            <h5 className="Board_header">{history.location.pathname}</h5>
          </div>
          <div className="Detail_info">
            <div className="title PostingTitle">
              <input
                type="text"
                placeholder="제목을 입력하세요"
                style={{
                  border: "none",
                  marginLeft: "20px",
                  flexBasis: "60%",
                  textAlign: "start",
                }}
              ></input>
              <div style={{ flexBasis: "15%" }}>저니녁</div>
              <div style={{ flexBasis: "15%" }}></div>
              <div style={{ flexBasis: "10%" }}>32 VIEWS</div>
            </div>
          </div>
          <div className="Detail_contents">
            <input
              type="text"
              style={{ width: "100%", height: "100%" }}
              placeholder="내용을 입력하세요"
            ></input>
          </div>
          <div className="Detail_bottom">
            <button
              onClick={() => {
                history.push("/" + pathArray[1] + "/" + pathArray[2]);
              }}
              className="Detail_button"
            >
              작성하기
            </button>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Posting;
