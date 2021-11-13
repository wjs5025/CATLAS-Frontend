import {
  Switch,
  NavLink,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Board from "./SubPages/Board";
import Detail from "./SubPages/Detail";
import Posting from "./SubPages/Posting";
import LinkImg from "../assets/Images/linkIcon.png";
function Info() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="left">
            <div className="Header">
              <h1 className="Title noDrag">INFO</h1>
            </div>
            <div className="menu_Nav noDrag">
              <ul>
                <li>
                  <NavLink
                    to={"/Info/공지사항"}
                    activeClassName="SideBarActive"
                  >
                    공지사항
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Info/장학안내"}
                    activeClassName="SideBarActive"
                  >
                    장학안내
                  </NavLink>
                </li>
                <li>
                  <a
                    href="https://newgh.gnu.ac.kr/main/ps/schdul/selectSchdulMainList.do?mi=1084"
                    activeClassName="SideBarActive"
                    target="_blank"
                    rel="noreferrer"
                  >
                    학사일정
                  </a>
                  <img
                    style={{ position: "absolute" }}
                    src={LinkImg}
                    width={18}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route exact path="/Info/공지사항" component={Board} />
                <Route exact path="/Info/장학안내" component={Board} />
                <Route exact path="/Info/공지사항/글쓰기" component={Posting} />
                <Route exact path="/Info/장학안내/글쓰기" component={Posting} />

                <Route path="/Info/공지사항/:id" component={Detail} />
                <Route path="/Info/장학안내/:id" component={Detail} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Info;
