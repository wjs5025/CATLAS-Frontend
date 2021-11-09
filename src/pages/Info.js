import {
  Switch,
  NavLink,
  Link,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
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
                  <NavLink
                    to={"/Info/공지사항"}
                    activeClassName="SideBarActive"
                  >
                    공지사항
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Info/학사일정"}
                    activeClassName="SideBarActive"
                  >
                    학사일정
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
