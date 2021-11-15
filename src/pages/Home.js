import { BrowserRouter as Router } from "react-router-dom";
import LogoON from "../assets/Images/CATLAS LOCO/CATLAS Logo on.png";
import GNU from "../assets/Images/GNU Logo.png";
import USG from "../assets/Images/usg.png";
import CS from "../assets/Images/csLogo.png";
import "./css/Home.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [dataSet, setDataSet] = useState([
    [
      { title: "", contents: "", idx: 0, date: "" },
      { title: "", contents: "", idx: 0, date: "" },
    ],
    [{ title: "", contents: "", idx: 0, date: "" }],
    [{ title: "", contents: "", idx: 0, date: "" }],
    [{ title: "", contents: "", idx: 0, date: "" }],
  ]);

  const getDataset = () => {
    axios.get("http://172.18.3.25:3001/Home").then((res) => {
      console.log(res.data);
      setDataSet(res.data);
    });
  };

  useEffect(getDataset, []);

  console.log("Home Session 로그인 아이디 : ", sessionStorage.id);
  return (
    <>
      <Router>
        <div className="home">
          <div className="home_firstLine">
            {/*타이틀 영역(좌측상단)*/}
            <div className="home_Header">
              <h1 className="home_Title noDrag">CATLAS HOME</h1>
              <p className="home_subTitle noDrag">
                경상국립대학교 컴퓨터과학과 공식 커뮤니티 CATLAS
              </p>

              <div className="home_LogoBadges noDrag">
                <a
                  href="https://newgh.gnu.ac.kr/main/main.do"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img className="LogoBadge" src={GNU} height={80} alt="" />
                </a>
                <a href="http://cs.gnu.ac.kr/" target="_blank" rel="noreferrer">
                  <img className="LogoBadge" src={CS} height={80} alt="" />
                </a>
                <a
                  href="https://catlas.gnu.ac.kr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="LogoBadge" src={LogoON} height={80} alt="" />
                </a>
                <a href="http://usg.ac.kr/" target="_blank" rel="noreferrer">
                  <img className="LogoBadge" src={USG} height={80} alt="" />
                </a>
              </div>
            </div>

            {/*공지영역(우측상단)*/}

            <div className="home_Notice">
              <div className="notice_Header">
                <h3 className="notice_Title noDrag">
                  NOTICE
                  <a href={"/Info/공지사항"}>
                    <span className="notice_more">more {">"}</span>
                  </a>
                </h3>
                <div className="notice_posts">
                  <div className="notice_post borderR">
                    <a
                      className="a_tag"
                      href={"/Info/공지사항/" + dataSet[0][0].idx}
                    >
                      <p className="notice_post_Title">{dataSet[0][0].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[0][0].contents}
                      </p>
                      <p className="notice_post_date">
                        {" "}
                        {dataSet[0][0].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>
                  <div className="notice_post">
                    <a
                      className="a_tag"
                      href={"/Info/공지사항/" + dataSet[0][1].idx}
                    >
                      <p className="notice_post_Title">{dataSet[0][1].title}</p>
                      <p className="notice_post_Inner">
                        {" "}
                        {dataSet[0][1].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[0][1].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home_SecondLine">
            {/*게시판영역(하단))*/}
            <div className="home_Forum">
              <div className="Forum_Header">
                <h3 className="Forum_Title noDrag">FORUM</h3>
                <div className="Forum_posts">
                  <div className="Forum_post borderR">
                    <h4 className="forum_name noDrag">
                      FREE FORUM
                      <a href={"/Forum/자유게시판"}>
                        <span className="notice_more">more {">"}</span>
                      </a>
                    </h4>
                    <a
                      className="a_tag"
                      href={"/Forum/자유게시판/" + dataSet[1][0].idx}
                    >
                      <p className="notice_post_Title">{dataSet[1][0].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[1][0].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[1][0].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>
                  <div className="Forum_post borderR">
                    <h4 className="forum_name noDrag">
                      QUESTION FORUM
                      <a href={"/Forum/질문게시판/"}>
                        <span className="notice_more">more {">"}</span>
                      </a>
                    </h4>
                    <a
                      className="a_tag"
                      href={"/Forum/질문게시판/" + dataSet[2][0].idx}
                    >
                      <p className="notice_post_Title">{dataSet[2][0].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[2][0].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[2][0].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>

                  <div className="Forum_post">
                    <h4 className="forum_name noDrag">
                      ADVERTISING FORUM
                      <a href={"/Forum/홍보게시판"}>
                        <span className="notice_more">more {">"}</span>
                      </a>
                    </h4>
                    <a
                      className="a_tag"
                      href={"/Forum/홍보게시판/" + dataSet[3][0].idx}
                    >
                      <p className="notice_post_Title">{dataSet[3][0].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[3][0].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[3][0].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="home_Forum_circle">
                {/* <div className="circle yellow_circle" /> */}
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Home;
