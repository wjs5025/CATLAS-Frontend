import "../css/Board.css";
import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { paginate } from "../../components/utils/paginate";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import WriteImg from "../../assets/Images/write2.png";

const Board = ({ history, match }) => {
  //게시글 경로 확인을 위한 변수선언 (BoardPath = 현재 게시판명)
  const pathArray = history.location.pathname.split("/");
  const BoardPath = pathArray[2];

  //게시글 데이터 묶음 posts
  const [posts, setPosts] = useState({
    data: [],
    pageSize: 10,
    currentPage: 1,
  });

  //서버로부터 BoardPath에 맞는 "게시글 데이터 객체"를 받아옴
  const getDataset = () => {
    axios
      .get("http://172.18.3.25:3001/Board", {
        params: {
          BoardPath,
        },
      })
      .then((res) => {
        res.data.reverse();

        setPosts({ ...posts, data: res.data });
      });
  };

  // 경로가 바뀔때마다 getDataset 호출
  useEffect(getDataset, [history.location.pathname]);

  // 페이징 설정
  const handlePageChange = (page) => {
    setPosts({ ...posts, currentPage: page });
  };

  const { data, pageSize, currentPage } = posts;

  // 페이지 별로 아이템이 속한 배열을 얻어옴
  const pagedDumys = paginate(data, currentPage, pageSize);

  // 게시글 count
  const count = posts.data.length;

  const [isLogin, SetLogin] = useState(0);

  const IconDisabled = () => {
    if (sessionStorage.id !== undefined) {
      SetLogin(35);
    } else SetLogin(0);
  };

  useEffect(IconDisabled, [sessionStorage.id]);
  return (
    <>
      <Router>
        <div className="Forum_container">
          {/* 게시글 헤더 */}
          <div className="Board_Info noDrag">
            <h5 className="Board_header">{history.location.pathname}</h5>
            <p style={{ fontFamily: "SCDream5" }}>
              {count} 개의 게시글이 있습니다
            </p>
          </div>

          <div className="Board" id="InfoAndForum">
            <table className="table">
              <thead className="noDrag">
                <tr>
                  <th scope="col" className="Board_Num">
                    NO.
                  </th>
                  <th scope="col" className="Board_Title">
                    TITLE
                  </th>
                  <th scope="col" className="Board_Date">
                    DATE
                  </th>
                  <th scope="col" className="Board_Write">
                    WRITER
                  </th>
                  <th scope="col" className="Board_Views">
                    VIEWS
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 게시글 리스트 출력 */}
                {pagedDumys.map((nowPost) => (
                  <tr
                    key={nowPost.idx}
                    onClick={() =>
                      history.push({
                        pathname: match.url + "/" + nowPost.idx,
                        data: {
                          id: nowPost.idx,
                        },
                      })
                    }
                  >
                    <td>{nowPost.idx}</td>
                    <td>
                      <div style={{ textAlign: "start" }}>{nowPost.title}</div>
                    </td>
                    <td>{nowPost.date.substr(0, 10)}</td>
                    <td>{nowPost.writer}</td>
                    <td>{nowPost.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* 페이지 표시 */}
        </div>
        <div style={{ position: "relative" }}>
          <img
            className="PostingBtn"
            onClick={() => history.push(match.url + "/" + "글쓰기")}
            style={{
              position: "absolute",
              paddingTop: "11px",
            }}
            src={WriteImg}
            width={isLogin}
            alt=""
          />
        </div>
        <div className="Board_paging">
          <Pagination
            pageSize={posts.pageSize}
            itemsCount={count}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </Router>
    </>
  );
};

export default Board;
