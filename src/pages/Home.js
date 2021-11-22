import { BrowserRouter as Router } from "react-router-dom";
import LogoON from "../assets/Images/CATLAS LOCO/CATLAS Logo on.png";
import GNU from "../assets/Images/GNU Logo.png";
import USG from "../assets/Images/usg.png";
import CS from "../assets/Images/csLogo.png";
import "./css/Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { NewContext } from "../App";
import { useContext } from "react";

const Home = () => {
  const serverURL = useContext(NewContext).serverURL;
  const [dataSet, setDataSet] = useState([
    [
      { title: "", contents: "", idx: 0, date: "" },
      { title: "", contents: "", idx: 0, date: "" },
      { title: "", contents: "", idx: 0, date: "" },
    ],
    [
      { title: "", contents: "", idx: 0, date: "" },
      { title: "", contents: "", idx: 0, date: "" },
      { title: "", contents: "", idx: 0, date: "" },
    ],
    [
      { title: "", contents: "", idx: 0, date: "" },
      { title: "", contents: "", idx: 0, date: "" },
      { title: "", contents: "", idx: 0, date: "" },
    ],
    [
      { title: "", contents: "", idx: 0, date: "" },
      { title: "", contents: "", idx: 0, date: "" },
      { title: "", contents: "", idx: 0, date: "" },
    ],
    [
      { title: "", contents: "", idx: 0, date: "" },
      { title: "", contents: "", idx: 0, date: "" },
      { title: "", contents: "", idx: 0, date: "" },
    ],
  ]);
  const getDataset = () => {
    axios.get(serverURL+ "/Home", { withCredentials: true }).then((res) => {
      console.log("Home res", res.data);
      setDataSet(res.data);
    });
  };

  useEffect(getDataset, []);
  return (
    <>
      <Router>
        <div className="home">
          <div className="home_firstLine">
            {/*타이틀 영역(좌측상단)*/}
            <div className="home_Header">
              <h1 className="home_Title noDrag">CATLAS HOME</h1>
              <p className="home_subTitle noDrag ">
                경상국립대학교 컴퓨터과학과 공식 커뮤니티 CATLAS
              </p>
            </div>
            <div className="home_LogoBadges noDrag">
              <a
                href="https://newgh.gnu.ac.kr/main/main.do"
                rel="noreferrer"
                target="_blank"
              >
                <img className="LogoBadge" src={GNU} height={50} alt="" />
              </a>
              <a href="http://cs.gnu.ac.kr/" target="_blank" rel="noreferrer">
                <img className="LogoBadge" src={CS} height={50} alt="" />
              </a>
              <a
                href="https://catlas.gnu.ac.kr/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="LogoBadge" src={LogoON} height={50} alt="" />
              </a>
              <a href="http://usg.ac.kr/" target="_blank" rel="noreferrer">
                <img className="LogoBadge" src={USG} height={50} alt="" />
              </a>
            </div>
          </div>
          {/*//////////////////////////////////////////////////////////////////////*/}
          <div className="home_SecondLine">
            {/*게시판영역(하단))*/}
            <div className="home_Forum">
              <div className="Forum_Header">
                <h3 className="Forum_Title noDrag">
                  NOTICE
                  {/* <span style={{ fontSize: "0.6em" }}> of INFO</span> */}
                  <a href={"/Info/공지사항"}>
                    <span className="notice_more">more {">"}</span>
                  </a>
                </h3>
                <div className="Forum_posts">
                  <div className="Forum_post borderR">
                    <a
                      className="a_tag"
                      href={"/Info/공지사항/" + dataSet[0][0].idx}
                    >
                      <p className="notice_post_Title">{dataSet[0][0].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[0][0].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[0][0].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>
                  <div className="Forum_post borderR">
                    <a
                      className="a_tag"
                      href={"/Info/공지사항/" + dataSet[0][1].idx}
                    >
                      <p className="notice_post_Title">{dataSet[0][1].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[0][1].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[0][1].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>

                  <div className="Forum_post">
                    <a
                      className="a_tag"
                      href={"/Info/공지사항/" + dataSet[0][2].idx}
                    >
                      <p className="notice_post_Title">{dataSet[0][2].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[0][2].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[0][2].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 갤러리 영역*/}
          <div className="home_SecondLine">
            <div className="home_Forum">
              <div className="Forum_Header">
                <h3 className="Forum_Title noDrag">
                  GALLERY 2021
                  {/* <span style={{ fontSize: "0.6em" }}> of GALLERY</span> */}
                  <a href={"/Gallery/2021"}>
                    <span className="notice_more">more {">"}</span>
                  </a>
                </h3>
                <div className="Forum_posts">
                  <div className="Forum_post borderR">
                    <a
                      className="a_tag HomeGallery "
                      href={"/Gallery/2021/" + dataSet[4][0].idx}
                    >
                      <p className="notice_post_Title alignInit">
                        {dataSet[4][0].title}
                      </p>

                      <img
                        src={
                          "http://172.18.3.25:3001/ImageLinking?path=" +
                          dataSet[4][0].path +
                          "&filename=" +
                          dataSet[4][0].filename
                        }
                        alt=""
                        width="60%"
                        style={{ borderRadius: "5px" }}
                      />
                    </a>
                  </div>
                  <div className="Forum_post borderR">
                    <a
                      className="a_tag HomeGallery"
                      href={"/Gallery/2021/" + dataSet[4][1].idx}
                    >
                      <p className="notice_post_Title alignInit">
                        {dataSet[4][1].title}
                      </p>

                      <img
                        src={
                          "http://172.18.3.25:3001/ImageLinking?path=" +
                          dataSet[4][1].path +
                          "&filename=" +
                          dataSet[4][1].filename
                        }
                        alt=""
                        width="60%"
                        style={{ borderRadius: "5px" }}
                      />
                    </a>
                  </div>

                  <div className="Forum_post borderR">
                    <a
                      className="a_tag HomeGallery "
                      href={"/Gallery/2021/" + dataSet[4][2].idx}
                    >
                      <p className="notice_post_Title alignInit">
                        {dataSet[4][2].title}
                      </p>

                      <img
                        src={
                          "http://172.18.3.24:3001/ImageLinking?path=" +
                          dataSet[4][2].path +
                          "&filename=" +
                          dataSet[4][2].filename
                        }
                        alt=""
                        width="60%"
                        style={{ borderRadius: "5px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//////////////////////////////////////////////////////////////////////*/}
          <div className="home_SecondLine">
            {/*게시판영역(하단))*/}
            <div className="home_Forum">
              <div className="Forum_Header">
                <h3 className="Forum_Title noDrag">
                  FREE FORUM
                  {/* <span style={{ fontSize: "0.6em" }}> of FORUM</span> */}
                  <a href={"/Forum/자유게시판"}>
                    <span className="notice_more">more {">"}</span>
                  </a>
                </h3>
                <div className="Forum_posts">
                  <div className="Forum_post borderR">
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
                    <a
                      className="a_tag"
                      href={"/Forum/자유게시판/" + dataSet[1][1].idx}
                    >
                      <p className="notice_post_Title">{dataSet[1][1].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[1][1].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[1][1].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>

                  <div className="Forum_post">
                    <a
                      className="a_tag"
                      href={"/Forum/자유게시판/" + dataSet[1][2].idx}
                    >
                      <p className="notice_post_Title">{dataSet[1][2].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[1][2].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[1][2].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//////////////////////////////////////////////////////////////////////*/}
          <div className="home_SecondLine">
            {/*게시판영역(하단))*/}
            <div className="home_Forum">
              <div className="Forum_Header">
                <h3 className="Forum_Title noDrag">
                  QUESTION FORUM
                  {/* <span style={{ fontSize: "0.6em" }}> of FORUM</span> */}
                  <a href={"/Forum/질문게시판"}>
                    <span className="notice_more">more {">"}</span>
                  </a>
                </h3>
                <div className="Forum_posts">
                  <div className="Forum_post borderR">
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
                  <div className="Forum_post borderR">
                    <a
                      className="a_tag"
                      href={"/Forum/질문게시판/" + dataSet[2][1].idx}
                    >
                      <p className="notice_post_Title">{dataSet[2][1].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[2][1].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[2][1].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>

                  <div className="Forum_post">
                    <a
                      className="a_tag"
                      href={"/Forum/질문게시판/" + dataSet[2][2].idx}
                    >
                      <p className="notice_post_Title">{dataSet[2][2].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[2][2].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[2][2].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//////////////////////////////////////////////////////////////////////*/}
          <div className="home_SecondLine">
            {/*게시판영역(하단))*/}
            <div className="home_Forum">
              <div className="Forum_Header">
                <h3 className="Forum_Title noDrag">
                  PROMOTION FORUM
                  {/* <span style={{ fontSize: "0.6em" }}> of FORUM</span> */}
                  <a href={"/Forum/홍보게시판"}>
                    <span className="notice_more">more {">"}</span>
                  </a>
                </h3>
                <div className="Forum_posts">
                  <div className="Forum_post borderR">
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
                  <div className="Forum_post borderR">
                    <a
                      className="a_tag"
                      href={"/Forum/홍보게시판/" + dataSet[3][1].idx}
                    >
                      <p className="notice_post_Title">{dataSet[3][1].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[3][1].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[3][1].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>

                  <div className="Forum_post">
                    <a
                      className="a_tag"
                      href={"/Forum/홍보게시판/" + dataSet[3][2].idx}
                    >
                      <p className="notice_post_Title">{dataSet[3][2].title}</p>
                      <p className="notice_post_Inner">
                        {dataSet[3][2].contents}
                      </p>
                      <p className="notice_post_date">
                        {dataSet[3][2].date.substr(0, 10)}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//////////////////////////////////////////////////////////////////////*/}
        </div>
      </Router>
    </>
  );
};

export default Home;
