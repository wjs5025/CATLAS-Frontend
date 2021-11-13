import {
  Switch,
  NavLink,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import QuestionForm from "./SubPages/QuestionForm";

function Contact_us() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="left">
            <div className="Header">
              <h1 className="Title noDrag">CONTACT</h1>
            </div>
            <div className="menu_Nav noDrag">
              <ul>
                <li>
                  <NavLink
                    to={"/Contact/문의하기"}
                    activeClassName="SideBarActive"
                  >
                    문의하기
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route path="/Contact/문의하기" component={QuestionForm} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Contact_us;
