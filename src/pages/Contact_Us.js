import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import FreeForum from "./menu_Forums/Board";

function Contact_us() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="left">
            <div className="Header">
              <h1 className="Title noDrag">CONTACT_US</h1>
            </div>
            <div className="menu_Nav noDrag">
              <ul>
                <li>
                  <Link to={"/Contact_us/기술문제"}>기술문제</Link>
                </li>{" "}
                <li>
                  <Link to={"/Contact_us/계정문의"}>계정문의</Link>
                </li>{" "}
                <li>
                  <Link to={"/Contact_us/유저신고"}>유저신고</Link>
                </li>{" "}
                <li>
                  <Link to={"/Contact_us/FAQ"}>FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route path="/Contact_us/기술문제" component={FreeForum} />
                <Route path="/Contact_us/계정문의" component={FreeForum} />
                <Route path="/Contact_us/유저신고" component={FreeForum} />
                <Route path="/Contact_us/FAQ" component={FreeForum} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Contact_us;
