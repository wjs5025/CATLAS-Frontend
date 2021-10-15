import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import "./css/SideBar.css";
import FreeForum from "./menu_Forums/Board";
import Detail from "./menu_Forums/Detail";
import NotFound from "../pages/NotFound";
const Forum = () => {
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
