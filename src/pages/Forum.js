import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import "./css/SideBar.css";
import FreeForum from "./menu_Forums/Board";
import Detail from "./menu_Forums/Detail";
import NotFound from "../pages/NotFound";
import { useState } from "react";

const getDumys2 = () => {
  const posts = [
    {
      id: 1,
      title: "저니녁22432짱2",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 2,
      title: "저니녁24324짱2",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 3,
      title: "저니녁23424짱2",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 4,
      title: "저니녁242짱2",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 5,
      title: "저니녁2342짱2",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 6,
      title: "저니녁234짱3",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 7,
      title: "저니24234녁짱",
      writer: "저니녁",
      date: "2021/03/08",
      views: 15,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 8,
      title: "저니녁짱24232",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 9,
      title: "저니녁짱24243",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 10,
      title: "저니2342342녁짱",
      writer: "저니녁",
      date: "2021/03/08",
      views: 15,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 11,
      title: "저니4535녁짱2",
      writer: "저니녁2",
      date: "2021/03/08",
      views: 16,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 12,
      title: "저니녁345435짱3",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 13,
      title: "저니35435녁짱3",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 14,
      title: "저니3543543녁짱3",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 15,
      title: "저니녁짱243243",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 16,
      title: "저니녁543535짱3",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 17,
      title: "저니녁2534543짱3",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 18,
      title: "저니녁짱242423",
      writer: "저니녁3",
      date: "2021/03/08",
      views: 10,
      contents: "안녕 나는 인혁2",
    },
    {
      id: 19,
      title:
        "『202134324년 하반기 진주시 대학생 학자금 대출이자 지원』사업 안내",
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
       `,
    },
    {
      id: 20,
      title: "20번게시글 234324전인혁",
      writer: "저니녁",
      date: "2021/10/16",
      views: 10,
      contents:
        "안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱안녕 나는 인혁이야 메롱",
    },
  ];
  return posts;
};

const Forum = (history) => {
  const [cate, setCate] = useState("자유게시판");
  let nowIn;

  switch (history.location.pathname) {
    case "/Forum/자유게시판":
      nowIn = "자유게시판";
    case "/Forum/질문게시판":
      nowIn = "질문게시판";
    case "/Forum/홍보게시판":
      nowIn = "홍보게시판";
    case "/Forum/동아리게시판":
      nowIn = "동아리게시판";
    case "/Forum/IT게시판":
      nowIn = "IT게시판";
    case "/Forum/자료실":
      nowIn = "자료실";
  }

  return (
    <>
      <Router>
        <div className="container">
          <div className="left">
            <div className="Header">
              <h1 className="Title noDrag">FORUM</h1>
            </div>
            <div className="menu_Nav noDrag">
              <ul>
                <li>
                  <Link to={"/Forum/자유게시판"}>자유게시판</Link>
                </li>
                <li>
                  <Link to={"/Forum/질문게시판"}>질문게시판</Link>
                </li>
                <li>
                  <Link to={"/Forum/홍보게시판"}>홍보게시판</Link>
                </li>
                <li>
                  <Link to={"/Forum/동아리게시판"}>동아리게시판</Link>
                </li>
                <li>
                  <Link to={"/Forum/IT게시판"}>IT게시판</Link>
                </li>
                <li>
                  <Link to={"/Forum/자료실"}>자료실</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route exact path="/Forum/자유게시판" component={FreeForum} />
                <Route exact path="/Forum/질문게시판" component={FreeForum} />
                <Route exact path="/Forum/홍보게시판" component={FreeForum} />
                <Route exact path="/Forum/동아리게시판" component={FreeForum} />
                <Route exact path="/Forum/IT게시판" component={FreeForum} />
                <Route exact path="/Forum/자료실" component={FreeForum} />

                <Route path="/Forum/자유게시판/:id" component={Detail} />
                <Route path="/Forum/질문게시판/:id" component={Detail} />
                <Route path="/Forum/홍보게시판/:id" component={Detail} />
                <Route path="/Forum/동아리게시판/:id" component={Detail} />
                <Route path="/Forum/IT게시판/:id" component={Detail} />
                <Route path="/Forum/자료실/:id" component={Detail} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Forum;
