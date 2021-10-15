import "../css/Board.css";
import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import { paginate } from "../../components/utils/paginate";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";

const getDumys = () => {
  const posts = [
    {
      id: 1,
      title: "저니녁짱",
      writer: "저니녁",
      date: "2021-03-08",
      views: 15,
      contents: "안녕 나는 인혁",
    },
    {
      id: 2,
      title: "저니녁짱2",
      writer: "저니녁2",
      date: "2021-03-08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 3,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 4,
      title: "저니녁짱",
      writer: "저니녁",
      date: "2021-03-08",
      views: 15,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 5,
      title: "저니녁짱2",
      writer: "저니녁2",
      date: "2021-03-08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 6,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 7,
      title: "저니녁짱",
      writer: "저니녁",
      date: "2021-03-08",
      views: 15,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 8,
      title: "저니녁짱2",
      writer: "저니녁2",
      date: "2021-03-08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 9,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 10,
      title: "저니녁짱",
      writer: "저니녁",
      date: "2021-03-08",
      views: 15,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 11,
      title: "저니녁짱2",
      writer: "저니녁2",
      date: "2021-03-08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 12,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 13,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 14,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 15,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 16,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 17,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 18,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 19,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 20,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
  ];
  return posts;
};

const FreeForum = ({ history, match }) => {
  const [posts, setDumy] = useState({
    data: getDumys(),
    pageSize: 10,
    currentPage: 1,
  });

  const handlePageChange = (page) => {
    setDumy({ ...posts, currentPage: page });
  };

  const { data, pageSize, currentPage } = posts;
  const pagedDumys = paginate(data, currentPage, pageSize); // 페이지 별로 아이템이 속한 배열을 얻어옴
  const count = posts.data.length;
  if (count === 0) return <p>게시글이 없습니다.</p>;

  return (
    <>
      <Router>
        <div className="Forum_container">
          {/* 게시글 헤더 */}
          <div className="Board_Info">
            <h5 className="Board_header">{history.location.pathname}</h5>
            <p>{count} 개의 게시글이 있습니다</p>
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
                {pagedDumys.map((posts) => (
                  <tr key={posts.id}>
                    <td>{posts.id}</td>
                    <td>
                      <div
                        style={{ textAlign: "start" }}
                        onClick={() =>
                          history.push({
                            pathname: match.url + "/" + posts.id,
                            data: {
                              id: posts.id,
                              title: posts.title,
                              writer: posts.writer,
                              date: posts.date,
                              views: posts.views,
                              contents: posts.contents,
                            },
                          })
                        }
                      >
                        {posts.title}
                      </div>
                    </td>
                    <td>{posts.date}</td>
                    <td>{posts.writer}</td>
                    <td>{posts.views}</td>
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
          </div>
        </div>
      </Router>
    </>
  );
};

export default FreeForum;
