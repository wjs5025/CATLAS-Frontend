import "../css/Main_Component.css";
import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import { paginate } from "../../components/utils/paginate";
import "bootstrap/dist/css/bootstrap.css";

const getDumys = () => {
  const dumys = [
    {
      id: 1,
      title: "저니녁짱",
      writer: "저니녁",
      date: "2021-03-08",
      views: 15,
    },
    {
      id: 2,
      title: "저니녁짱2",
      writer: "저니녁2",
      date: "2021-03-08",
      views: 16,
    },
    {
      id: 3,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
    },
    {
      id: 4,
      title: "저니녁짱",
      writer: "저니녁",
      date: "2021-03-08",
      views: 15,
    },
    {
      id: 5,
      title: "저니녁짱2",
      writer: "저니녁2",
      date: "2021-03-08",
      views: 16,
    },
    {
      id: 6,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
    },
    {
      id: 7,
      title: "저니녁짱",
      writer: "저니녁",
      date: "2021-03-08",
      views: 15,
    },
    {
      id: 8,
      title: "저니녁짱2",
      writer: "저니녁2",
      date: "2021-03-08",
      views: 16,
    },
    {
      id: 9,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
    },
    {
      id: 10,
      title: "저니녁짱",
      writer: "저니녁",
      date: "2021-03-08",
      views: 15,
    },
    {
      id: 11,
      title: "저니녁짱2",
      writer: "저니녁2",
      date: "2021-03-08",
      views: 16,
    },
    {
      id: 12,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
    },
    {
      id: 13,
      title: "저니녁짱3",
      writer: "저니녁3",
      date: "2021-03-08",
      views: 10,
    },
  ];
  return dumys;
};

const FreeForum = () => {
  const [dumys, setDumy] = useState({
    data: getDumys(),
    pageSize: 10,
    currentPage: 1,
  });

  const handlePageChange = (page) => {
    setDumy({ ...dumys, currentPage: page });
  };

  const { data, pageSize, currentPage } = dumys;
  const pagedDumys = paginate(data, currentPage, pageSize); // 페이지 별로 아이템이 속한 배열을 얻어옴

  const count = dumys.data.length;
  if (count === 0) return <p>게시글이 없습니다.</p>;

  return (
    <>
      <div className="Forum_container">
        <h2 className="test">자유게시판</h2>
        <p>{count} 개의 더미데이터가 있습니다.</p>;
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
            {/* 리스트 출력 */}
            {pagedDumys.map((dumys) => (
              <tr key={dumys.id}>
                <td>{dumys.id}</td>
                <td>{dumys.title}</td>
                <td>{dumys.date}</td>
                <td>{dumys.writer}</td>
                <td>{dumys.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          pageSize={dumys.pageSize}
          itemsCount={count}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default FreeForum;
