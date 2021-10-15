import { Link, BrowserRouter as Router } from "react-router-dom";
import LogoON from "../assets/Images/CATLAS LOCO/CATLAS Logo on.png";
import GNU from "../assets/Images/GNU Logo.jpg";
import USG from "../assets/Images/usg.png";
import "./css/Home.css";

const Home = () => {
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
              <div className="circle_area">
                <div className="circle" />
              </div>
              <div className="notice_Header">
                <h3 className="notice_Title noDrag">
                  NOTICE
                  <a href={"/Bachelor/공지사항"}>
                    <span className="notice_more">more..</span>
                  </a>
                </h3>
                <div className="notice_posts">
                  <div className="notice_post borderR">
                    <a className="a_tag" href="http://naver.com">
                      <p className="notice_post_Title">
                        카카오 서비스 약관 변경 안내 카카오 서비스 약관 변경
                        안내
                      </p>
                      <p className="notice_post_Inner">
                        {" "}
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Commodi adipisci accusantium magnam repellat
                        facilis modi quibusdam consectetur ipsa veniam.
                        Molestiae hic dignissimos itaque veritatis minima iusto
                        voluptates veniam? Dignissimos, adipisci. Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Blanditiis
                        necessitatibus inventore repellat voluptatum atque nemo,
                        repellendus saepe illum nobis. Consequatur, aliquam?
                        Quasi nostrum placeat saepe inventore nemo, dicta quas
                        aperiam.
                      </p>
                      <p className="notice_post_date">2021/08/15</p>
                    </a>
                  </div>
                  <div className="notice_post">
                    <a className="a_tag" href="http://naver.com">
                      <p className="notice_post_Title">
                        카카오 서비스 약관 변경 안내 카카오 서비스 약관 변경
                        안내
                      </p>
                      <p className="notice_post_Inner">
                        {" "}
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Commodi adipisci accusantium magnam repellat
                        facilis modi quibusdam consectetur ipsa veniam.
                        Molestiae hic dignissimos itaque veritatis minima iusto
                        voluptates veniam? Dignissimos, adipisci. Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Blanditiis
                        necessitatibus inventore repellat voluptatum atque nemo,
                        repellendus saepe illum nobis. Consequatur, aliquam?
                        Quasi nostrum placeat saepe inventore nemo, dicta quas
                        aperiam.
                      </p>
                      <p className="notice_post_date">2021/08/15</p>
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
                        <span className="notice_more">more..</span>
                      </a>
                    </h4>
                    <a className="a_tag" href="http://naver.com">
                      <p className="notice_post_Title">
                        카카오 서비스 약관 변경 안내 카카오 서비스 약관 변경
                        안내
                      </p>
                      <p className="notice_post_Inner">
                        {" "}
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Commodi adipisci accusantium magnam repellat
                        facilis modi quibusdam consectetur ipsa veniam.
                        Molestiae hic dignissimos itaque veritatis minima iusto
                        voluptates veniam? Dignissimos, adipisci. Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Blanditiis
                        necessitatibus inventore repellat voluptatum atque nemo,
                        repellendus saepe illum nobis. Consequatur, aliquam?
                        Quasi nostrum placeat saepe inventore nemo, dicta quas
                        aperiam.
                      </p>
                      <p className="notice_post_date">2021/08/15</p>
                    </a>
                  </div>
                  <div className="Forum_post borderR">
                    <h4 className="forum_name noDrag">
                      QUESTION FORUM
                      <a href={"/Forum/질문게시판"}>
                        <span className="notice_more">more..</span>
                      </a>
                    </h4>
                    <a className="a_tag" href="http://naver.com">
                      <p className="notice_post_Title">
                        카카오 서비스 약관 변경 안내 카카오 서비스 약관 변경
                        안내
                      </p>
                      <p className="notice_post_Inner">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Commodi adipisci accusantium magnam repellat
                        facilis modi quibusdam consectetur ipsa veniam.
                        Molestiae hic dignissimos itaque veritatis minima iusto
                        voluptates veniam? Dignissimos, adipisci. Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Blanditiis
                        necessitatibus inventore repellat voluptatum atque nemo,
                        repellendus saepe illum nobis. Consequatur, aliquam?
                        Quasi nostrum placeat saepe inventore nemo, dicta quas
                        aperiam.
                      </p>
                      <p className="notice_post_date">2021/08/15</p>
                    </a>
                  </div>

                  <div className="Forum_post">
                    <h4 className="forum_name noDrag">
                      ADVERTISING FORUM
                      <a href={"/Forum/홍보게시판"}>
                        <span className="notice_more">more..</span>
                      </a>
                    </h4>
                    <a className="a_tag" href="http://naver.com">
                      <p className="notice_post_Title">
                        카카오 서비스 약관 변경 안내 카카오 서비스 약관 변경
                        안내
                      </p>
                      <p className="notice_post_Inner">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Commodi adipisci accusantium magnam repellat
                        facilis modi quibusdam consectetur ipsa veniam.
                        Molestiae hic dignissimos itaque veritatis minima iusto
                        voluptates veniam? Dignissimos, adipisci. Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Blanditiis
                        necessitatibus inventore repellat voluptatum atque nemo,
                        repellendus saepe illum nobis. Consequatur, aliquam?
                        Quasi nostrum placeat saepe inventore nemo, dicta quas
                        aperiam.
                      </p>
                      <p className="notice_post_date">2021/08/15</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="home_Forum_circle">
                <div className="circle yellow_circle" />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Home;
