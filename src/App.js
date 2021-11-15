import React from "react";
import {
  useHistory,
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
// Pages Import
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Info from "./pages/Info";
import Forum from "./pages/Forum";
import ContactUs from "./pages/Contact_Us";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/SubPages/NotFound";
import axios from "axios";

// App.css
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const Login = () => {
  const history = useHistory();
  console.log(history.location.pathname);
  if (sessionStorage.id === undefined) {
    return (
      <NavLink className="LoginLink" activeClassName="MenuActive" to="/SignIn">
        <div>SIGN IN</div>
      </NavLink>
    );
  } else {
    return (
      <DropdownButton title="LOGIN MENU">
        <div
          className="noDrag"
          style={{
            fontFamily: "SCDream4",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "1.1em", fontFamily: "SCDream6" }}>
            {sessionStorage.id}
          </span>{" "}
          님 로그인 중
        </div>

        <Dropdown.Item>
          <NavLink
            to="/"
            className="SignOut"
            onClick={() => {
              sessionStorage.removeItem("id");
              axios.post("http://172.18.3.25:3001/SignOut").then(() => {});
              document.location.href = history.location.pathname;
            }}
          >
            <div>SIGN OUT</div>
          </NavLink>
        </Dropdown.Item>
      </DropdownButton>
    );
  }
};

const App = () => {
  return (
    <Router>
      <div className="header">
        <div className="NavMenu">
          <ul>
            <li>
              <NavLink
                exact
                className="menuLink"
                activeClassName="MenuActive"
                to="/"
              >
                <div>HOME</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menuLink"
                activeClassName="MenuActive"
                to="/Info/공지사항"
              >
                <div>INFO</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menuLink"
                activeClassName="MenuActive"
                to="/Forum/자유게시판"
              >
                <div>FORUM</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menuLink"
                activeClassName="MenuActive"
                to="/Gallery/2021"
              >
                <div>GALLERY</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menuLink"
                activeClassName="MenuActive"
                to="/Contact/문의하기"
              >
                <div>CONTACT</div>
              </NavLink>
            </li>
            <li>
              {/* <NavLink
                className="menuLink"
                activeClassName="MenuActive"
                to="/Contact/문의하기"
              >
                <div>CONTACT</div>
              </NavLink> */}
              <Login />
            </li>
          </ul>
        </div>
      </div>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Info" component={Info} />
          <Route path="/Forum" component={Forum} />
          <Route path="/Contact" component={ContactUs} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />

          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
};
export default App;
