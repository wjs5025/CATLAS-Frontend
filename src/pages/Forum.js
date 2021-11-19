import {
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./css/SideBar.css";
import Board from "./SubPages/Board";
import Detail from "./SubPages/Detail";
import NotFound from "./SubPages/NotFound";
import Posting from "./SubPages/Posting";
import PleaseLogin from "./SubPages/PleaseLogin";

const Forum = () => {
  const CanPosting = () => {
    if (sessionStorage.id === undefined) {
      return <PleaseLogin />;
    } else {
      return <Posting />;
    }
  };

  const CanDetail = () => {
    if (sessionStorage.id === undefined) {
      return <PleaseLogin />;
    } else {
      return <Detail />;
    }
  };

  return (
    <>
      <Router>
        <div className="container">
          <div className="left">
            <div className="Header">
              <h1 className="Title noDrag">FORUM</h1>
            </div>
            <div className="menu_Nav noDrag ">
              <ul>
                <li>
                  <NavLink
                    to={"/Forum/자유게시판"}
                    activeClassName="SideBarActive"
                  >
                    자유게시판
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Forum/질문게시판"}
                    activeClassName="SideBarActive"
                  >
                    질문게시판
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Forum/홍보게시판"}
                    activeClassName="SideBarActive"
                  >
                    홍보게시판
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Forum/동아리게시판"}
                    activeClassName="SideBarActive"
                  >
                    동아리게시판
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Forum/IT게시판"}
                    activeClassName="SideBarActive"
                  >
                    IT게시판
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/Forum/자료실"} activeClassName="SideBarActive">
                    자료실
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route exact path="/Forum/자유게시판" component={Board} />
                <Route exact path="/Forum/질문게시판" component={Board} />
                <Route exact path="/Forum/홍보게시판" component={Board} />
                <Route exact path="/Forum/동아리게시판" component={Board} />
                <Route exact path="/Forum/IT게시판" component={Board} />
                <Route exact path="/Forum/자료실" component={Board} />

                <Route
                  exact
                  path="/Forum/자유게시판/글쓰기"
                  component={CanPosting}
                />
                <Route
                  exact
                  path="/Forum/질문게시판/글쓰기"
                  component={CanPosting}
                />
                <Route
                  exact
                  path="/Forum/홍보게시판/글쓰기"
                  component={CanPosting}
                />
                <Route
                  exact
                  path="/Forum/동아리게시판/글쓰기"
                  component={CanPosting}
                />
                <Route
                  exact
                  path="/Forum/IT게시판/글쓰기"
                  component={CanPosting}
                />
                <Route
                  exact
                  path="/Forum/자료실/글쓰기"
                  component={CanPosting}
                />

                <Route path="/Forum/자유게시판/:id" component={CanDetail} />
                <Route path="/Forum/질문게시판/:id" component={CanDetail} />
                <Route path="/Forum/홍보게시판/:id" component={CanDetail} />
                <Route path="/Forum/동아리게시판/:id" component={CanDetail} />
                <Route path="/Forum/IT게시판/:id" component={CanDetail} />
                <Route path="/Forum/자료실/:id" component={CanDetail} />
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
