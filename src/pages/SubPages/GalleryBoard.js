import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { paginate } from "../../components/utils/paginate";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "../css/GalleryBoard.css";
import WriteImg from "../../assets/Images/write2.png";

const GalleryBoard = ({ history, match }) => {
  //게시글 경로 확인을 위한 변수선언 (BoardPath = 현재 게시판명)
  const pathArray = history.location.pathname.split("/");
  const BoardPath = pathArray[2];

  //게시글 데이터 묶음 posts
  const [posts, setPosts] = useState({
    data: [],
    pageSize: 8,
    currentPage: 1,
  });

  //서버로부터 "게시글 데이터 객체"를 받아옴
  const getDataset = () => {
    axios
      .get(
        "http://172.18.3.25:3001/Board",
        {
          params: {
            BoardPath,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("갤러리보드", res.data);
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
          <div className="Board_Info">
            <h5 className="Board_header">{history.location.pathname}</h5>
            <p style={{ fontFamily: "SCDream5" }}>
              {count} 개의 게시글이 있습니다
            </p>
          </div>

          <div className="Board">
            <table className="gallery_table">
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
                    <td>
                      <img
                        className="Gallery_post"
                        src={
                          "http://172.18.3.25:3001/ImageLinking?path=" +
                          nowPost.path +
                          "&filename=" +
                          nowPost.filename
                        }
                        alt=""
                      />
                    </td>
                    <td>{nowPost.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* 페이지 표시 */}
          <div style={{ position: "relative" }}>
            <img
              className="PostingBtn"
              onClick={() => history.push(match.url + "/글쓰기")}
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
        </div>
      </Router>
    </>
  );
};

export default GalleryBoard;
