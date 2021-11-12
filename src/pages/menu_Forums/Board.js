import "../css/Board.css";
import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { paginate } from "../../components/utils/paginate";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

let dataset = [];

//더미데이터 함수들(getDumys)

//게시판
const FreeForum = ({ history, match }) => {
  //게시글 경로 확인
  const pathArray = history.location.pathname.split("/");
  const BoardPath = pathArray[2];

  const [posts, setPosts] = useState({
    data: dataset,
    pageSize: 10,
    currentPage: 1,
  });

  const getGongji = () => {
    axios
      .get("http://172.18.3.25:3001/Board", {
        params: {
          BoardPath,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPosts({ ...posts, data: res.data });
      });
  };

  useEffect(getGongji, [history.location.pathname]);

  // 페이징 설정
  const handlePageChange = (page) => {
    setPosts({ ...posts, currentPage: page });
  };

  const { data, pageSize, currentPage } = posts;

  // 페이지 별로 아이템이 속한 배열을 얻어옴
  const pagedDumys = paginate(data, currentPage, pageSize);

  // 게시글 count
  const count = posts.data.length;
  if (count === 0) return <p>게시글이 없습니다.</p>; //게시글이 없을 때 리턴

  console.log("매치", match.url);
  //게시글이 있을 때 리턴
  return (
    <>
      <Router>
        <div className="Forum_container">
          {/* 게시글 헤더 */}
          <div className="Board_Info">
            <h5 className="Board_header">{history.location.pathname}</h5>
            <p style={{ fontFamily: "SCDream5" }}>
              {count} 개의 게시글이 있습니다
            </p>
          </div>
          <div className="Board">
            <table className="table table-hover">
              <thead>
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
                  <tr key={nowPost.idx}>
                    <td>{nowPost.idx}</td>
                    <td>
                      <div
                        style={{ textAlign: "start" }}
                        onClick={() =>
                          history.push({
                            pathname: match.url + "/" + nowPost.idx,
                            data: {
                              id: nowPost.idx,
                            },
                          })
                        }
                      >
                        {nowPost.title}
                      </div>
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
          <div className="Board_paging">
            <Pagination
              pageSize={posts.pageSize}
              itemsCount={count}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            <div onClick={() => history.push(match.url + "/" + "글쓰기")}>
              글쓰기
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default FreeForum;
