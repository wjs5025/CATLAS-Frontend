import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import FreeForum from "./menu_Forums/Board";

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
                  <Link to={"/Info/공지사항"}>공지사항</Link>
                </li>
                <li>
                  <Link to={"/Info/학사일정"}>학사일정</Link>
                </li>
                <li>
                  <Link to={"/Info/장학안내"}>장학안내</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route path="/Info/공지사항" component={FreeForum} />
                <Route path="/Info/학사일정" component={FreeForum} />
                <Route path="/Info/장학안내" component={FreeForum} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Info;
