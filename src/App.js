import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Pages Import
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Info from "./pages/Info";
import Forum from "./pages/Forum";
import ContactUs from "./pages/Contact_Us";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

// App.css
import "./App.css";

//axios
import axios from "axios";

let Who = "Unknown";

const WhoLogined = async () => {
  try {
    const res = await axios.get("api/WhoLogined");
    return res;
  } catch (err) {
    return err;
  }
};

WhoLogined().then(function (res) {
  Who = res.data;
  console.log("then ", res.data);
});

const App = () => {
  return (
    <Router>
      <header id="header">
        <nav id="topMenu">
          <ul>
            <li>
              <Link className="menuLink" to="/">
                <div>HOME</div>
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/Info/공지사항">
                <div>INFO</div>
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/Forum/자유게시판">
                <div>FORUM</div>
              </Link>
            </li>

            <li>
              <Link className="menuLink" to="/Gallery/2021">
                <div>GALLERY</div>
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/Contact_us/문의하기">
                <div>CONTACT US</div>
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/SignUp">
                <div>SIGN UP</div>
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/SignIn">
                <div>SIGN IN</div>
              </Link>
            </li>

            {/* <li>{sessionStorage.getItem("user_id")} 님이 로그인 중!</li> */}
          </ul>
        </nav>
      </header>
      <main style={{ display: "inline-block" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Info" component={Info} />
          <Route path="/Forum" component={Forum} />
          <Route path="/Contact_us" component={ContactUs} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
};
export default App;
