import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { paginate } from "../../components/utils/paginate";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

const GalleryBoard = ({ history, match }) => {
  //게시글 경로 확인을 위한 변수선언 (BoardPath = 현재 게시판명)
  const pathArray = history.location.pathname.split("/");
  const BoardPath = pathArray[2];

  //게시글 데이터 묶음 posts
  const [posts, setPosts] = useState({
    data: [],
    pageSize: 10,
    currentPage: 1,
  });

  //서버로부터 "게시글 데이터 객체"를 받아옴
  const getDataset = () => {
    axios
      .get("http://172.18.3.25:3001/Board", {
        params: {
          BoardPath,
        },
      })
      .then((res) => {
        setPosts({ ...posts, data: res.data });
      });
  };

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

  const naming = (nowPost) => {
    return (
      "http://172.18.3.25:3001/ImageLinking?Path=" +
      nowPost.path +
      "&Filename=" +
      nowPost.filename
    );
  };
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
            <table className="table">
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
                    <img
                      src={naming(nowPost)}
                      alt=""
                      style={{ width: "15vh" }}
                    />
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
            <div
              className="PostingBtn"
              onClick={() => history.push(match.url, "/", "글쓰기")}
            >
              글쓰기
            </div>
          </div>
        </div>
      </Router>
    </>
    // <>
    //   <div>갤러리테스트</div>
    //   <img src={imagePath} />
    // </>
  );
};

export default GalleryBoard;
