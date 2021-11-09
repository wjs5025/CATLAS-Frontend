import "../css/Board.css";
import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import { paginate } from "../../components/utils/paginate";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

const getData = async () => {
  try {
    await axios.get("http://172.18.3.23:8000/v1/conner/gets").then((res) => {
      console.log(res.result);
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};

const getDumys = () => {
  const posts = [
    {
      id: 1,
      title: "저니녁짱 1번",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 2,
      title: "저니녁짱2 2번",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 3,
      title: "저니녁짱2 3번",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 4,
      title: "저니녁짱2 4번",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 5,
      title: "저니녁짱2 5번",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 6,
      title: "저니녁짱3 6번",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 7,
      title: "저니녁짱 7번",
      writer: "저니녁",
      date: "2021/03/08",
      views: 15,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 8,
      title: "저니녁짱2 8번 ",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 9,
      title: "저니녁짱3 9번",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 10,
      title: "저니녁짱 10번",
      writer: "저니녁",
      date: "2021/03/08",
      views: 15,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 11,
      title: "저니녁짱2 11번",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 12,
      title: "저니녁짱3 12번",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 13,
      title: "저니녁짱3 13",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 14,
      title: "저니녁짱3 14번",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 15,
      title: "저니녁짱3 15번 ",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 16,
      title: "저니녁짱3 16번",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 17,
      title: "저니녁짱3 17번",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 18,
      title: "저니녁짱3 18",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 19,
      title:
        "『2021년 하반기 진주시 대학생 학자금 대출이자 지원』사업 안내 19번",
      writer: "컴퓨터과학과",
      date: "2021/10/14",
      views: 62,
      contents: `1. 관련: 진주시 평생학습과-10356(2021.10.12.)

      2. 진주시에서는 지역 대학생에게 학자금 대출이자를 지원 하여 경제적 부담을 덜어주고 학업에 전념할 수 있도록
      
      『2021년 하반기 진주시 대학생 학자금 대출이자 지원』사업을 아래와 같이 시행한다 하오니, 해당 학생들이 신청할 수 있도록 안내하여 주시기 바랍니다.
      
       가. 사 업 명: 2021년 하반기 진주시 대학생 학자금 대출이자 지원
      
       나. 신청기간: 2021. 10. 12.(화) ~ 11. 12.(금)
      
       다. 지원대상: 공고일 기준 현재 본인이 진주시에 주민등록이 되어 있는 경우나 부모(부모가 없는 경우 직계존속)가 공고일 기준으로 1년이상 진주시에 주민등록이 되어 있으면서 한국장학재단의 취업후상환 학자금 대출, 일반상환 학자금대출을 받은 대학생(휴학생, 대학원생 포함)
      
       라. 지원내용: 대출시점 ’16년 1학기부터 한국장학재단에서 받은 학자금 대출의 ’21. 7. 1.~ 12. 31.까지 발생한 이자 지원
      
       마. 지원방법: 한국장학재단 학자금 대출 통장으로 자동 상환
      
       바. 신청방법: 온라인 신청(진주시청 홈페이지 http://www.jinju.go.kr)
      
           (홈페이지 → 분야별정보 → 교육정보 → 학자금대출이자 지원 클릭)
      
       사. 문 의 처: 진주시 평생학습과 학교지원팀 (☎055-749-8324)1. 관련: 진주시 평생학습과-10356(2021.10.12.)

       2. 진주시에서는 지역 대학생에게 학자금 대출이자를 지원 하여 경제적 부담을 덜어주고 학업에 전념할 수 있도록
       
       『2021년 하반기 진주시 대학생 학자금 대출이자 지원』사업을 아래와 같이 시행한다 하오니, 해당 학생들이 신청할 수 있도록 안내하여 주시기 바랍니다.
       
        가. 사 업 명: 2021년 하반기 진주시 대학생 학자금 대출이자 지원
       
        나. 신청기간: 2021. 10. 12.(화) ~ 11. 12.(금)
       
        다. 지원대상: 공고일 기준 현재 본인이 진주시에 주민등록이 되어 있는 경우나 부모(부모가 없는 경우 직계존속)가 공고일 기준으로 1년이상 진주시에 주민등록이 되어 있으면서 한국장학재단의 취업후상환 학자금 대출, 일반상환 학자금대출을 받은 대학생(휴학생, 대학원생 포함)
       
        라. 지원내용: 대출시점 ’16년 1학기부터 한국장학재단에서 받은 학자금 대출의 ’21. 7. 1.~ 12. 31.까지 발생한 이자 지원
       
        마. 지원방법: 한국장학재단 학자금 대출 통장으로 자동 상환
       
        바. 신청방법: 온라인 신청(진주시청 홈페이지 http://www.jinju.go.kr)
       
            (홈페이지 → 분야별정보 → 교육정보 → 학자금대출이자 지원 클릭)
       
        사. 문 의 처: 진주시 평생학습과 학교지원팀 (☎055-749-8324)1. 관련: 진주시 평생학습과-10356(2021.10.12.)

        2. 진주시에서는 지역 대학생에게 학자금 대출이자를 지원 하여 경제적 부담을 덜어주고 학업에 전념할 수 있도록
        
        『2021년 하반기 진주시 대학생 학자금 대출이자 지원』사업을 아래와 같이 시행한다 하오니, 해당 학생들이 신청할 수 있도록 안내하여 주시기 바랍니다.
        
         가. 사 업 명: 2021년 하반기 진주시 대학생 학자금 대출이자 지원
        
         나. 신청기간: 2021. 10. 12.(화) ~ 11. 12.(금)
        
         다. 지원대상: 공고일 기준 현재 본인이 진주시에 주민등록이 되어 있는 경우나 부모(부모가 없는 경우 직계존속)가 공고일 기준으로 1년이상 진주시에 주민등록이 되어 있으면서 한국장학재단의 취업후상환 학자금 대출, 일반상환 학자금대출을 받은 대학생(휴학생, 대학원생 포함)
        
         라. 지원내용: 대출시점 ’16년 1학기부터 한국장학재단에서 받은 학자금 대출의 ’21. 7. 1.~ 12. 31.까지 발생한 이자 지원
        
         마. 지원방법: 한국장학재단 학자금 대출 통장으로 자동 상환
        
         바. 신청방법: 온라인 신청(진주시청 홈페이지 http://www.jinju.go.kr)
        
             (홈페이지 → 분야별정보 → 교육정보 → 학자금대출이자 지원 클릭)
        
         사. 문 의 처: 진주시 평생학습과 학교지원팀 (☎055-749-8324)
         1. 관련: 진주시 평생학습과-10356(2021.10.12.)

      2. 진주시에서는 지역 대학생에게 학자금 대출이자를 지원 하여 경제적 부담을 덜어주고 학업에 전념할 수 있도록
      
      『2021년 하반기 진주시 대학생 학자금 대출이자 지원』사업을 아래와 같이 시행한다 하오니, 해당 학생들이 신청할 수 있도록 안내하여 주시기 바랍니다.
      
       가. 사 업 명: 2021년 하반기 진주시 대학생 학자금 대출이자 지원
      
       나. 신청기간: 2021. 10. 12.(화) ~ 11. 12.(금)
      
       다. 지원대상: 공고일 기준 현재 본인이 진주시에 주민등록이 되어 있는 경우나 부모(부모가 없는 경우 직계존속)가 공고일 기준으로 1년이상 진주시에 주민등록이 되어 있으면서 한국장학재단의 취업후상환 학자금 대출, 일반상환 학자금대출을 받은 대학생(휴학생, 대학원생 포함)
      
       라. 지원내용: 대출시점 ’16년 1학기부터 한국장학재단에서 받은 학자금 대출의 ’21. 7. 1.~ 12. 31.까지 발생한 이자 지원
      
       마. 지원방법: 한국장학재단 학자금 대출 통장으로 자동 상환
      
       바. 신청방법: 온라인 신청(진주시청 홈페이지 http://www.jinju.go.kr)
      
           (홈페이지 → 분야별정보 → 교육정보 → 학자금대출이자 지원 클릭)
      
       사. 문 의 처: 진주시 평생학습과 학교지원팀 (☎055-749-8324)1. 관련: 진주시 평생학습과-10356(2021.10.12.)

       2. 진주시에서는 지역 대학생에게 학자금 대출이자를 지원 하여 경제적 부담을 덜어주고 학업에 전념할 수 있도록
       
       『2021년 하반기 진주시 대학생 학자금 대출이자 지원』사업을 아래와 같이 시행한다 하오니, 해당 학생들이 신청할 수 있도록 안내하여 주시기 바랍니다.
       
        가. 사 업 명: 2021년 하반기 진주시 대학생 학자금 대출이자 지원
       
        나. 신청기간: 2021. 10. 12.(화) ~ 11. 12.(금)
       
        다. 지원대상: 공고일 기준 현재 본인이 진주시에 주민등록이 되어 있는 경우나 부모(부모가 없는 경우 직계존속)가 공고일 기준으로 1년이상 진주시에 주민등록이 되어 있으면서 한국장학재단의 취업후상환 학자금 대출, 일반상환 학자금대출을 받은 대학생(휴학생, 대학원생 포함)
       
        라. 지원내용: 대출시점 ’16년 1학기부터 한국장학재단에서 받은 학자금 대출의 ’21. 7. 1.~ 12. 31.까지 발생한 이자 지원
       
        마. 지원방법: 한국장학재단 학자금 대출 통장으로 자동 상환
       
        바. 신청방법: 온라인 신청(진주시청 홈페이지 http://www.jinju.go.kr)
       
            (홈페이지 → 분야별정보 → 교육정보 → 학자금대출이자 지원 클릭)
       
        사. 문 의 처: 진주시 평생학습과 학교지원팀 (☎055-749-8324)1. 관련: 진주시 평생학습과-10356(2021.10.12.)

        2. 진주시에서는 지역 대학생에게 학자금 대출이자를 지원 하여 경제적 부담을 덜어주고 학업에 전념할 수 있도록
        
        『2021년 하반기 진주시 대학생 학자금 대출이자 지원』사업을 아래와 같이 시행한다 하오니, 해당 학생들이 신청할 수 있도록 안내하여 주시기 바랍니다.
        
         가. 사 업 명: 2021년 하반기 진주시 대학생 학자금 대출이자 지원
        
         나. 신청기간: 2021. 10. 12.(화) ~ 11. 12.(금)
        
         다. 지원대상: 공고일 기준 현재 본인이 진주시에 주민등록이 되어 있는 경우나 부모(부모가 없는 경우 직계존속)가 공고일 기준으로 1년이상 진주시에 주민등록이 되어 있으면서 한국장학재단의 취업후상환 학자금 대출, 일반상환 학자금대출을 받은 대학생(휴학생, 대학원생 포함)
        
         라. 지원내용: 대출시점 ’16년 1학기부터 한국장학재단에서 받은 학자금 대출의 ’21. 7. 1.~ 12. 31.까지 발생한 이자 지원
        
         마. 지원방법: 한국장학재단 학자금 대출 통장으로 자동 상환
        
         바. 신청방법: 온라인 신청(진주시청 홈페이지 http://www.jinju.go.kr)
        
             (홈페이지 → 분야별정보 → 교육정보 → 학자금대출이자 지원 클릭)
        
         사. 문 의 처: 진주시 평생학습과 학교지원팀 (☎055-749-8324)
       `,
    },
    {
      id: 20,
      title: "20번게시글 전인혁 20번",
      writer: "저니녁",
      date: "2021/10/16",
      views: 10,
      contents:
        "안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱",
    },
  ];
  return posts;
};

const FreeForum = ({ history, match }) => {
  getData();
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
                              dataset: getDumys(),
                              count: count,
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
