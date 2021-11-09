import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import QuestionForm from "./menu_Contact/QuestionForm";

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
                  <Link to={"/Contact_us/문의하기"}>문의하기</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route path="/Contact_us/문의하기" component={QuestionForm} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Contact_us;
