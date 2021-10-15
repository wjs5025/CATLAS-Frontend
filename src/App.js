import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Pages Import
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Bachelor from "./pages/Bachelor";
import Forum from "./pages/Forum";
import ContactUs from "./pages/Contact_Us";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Information from "./pages/Information";
import NotFound from "./pages/NotFound";

// App.css
import "./App.css";

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
              <Link className="menuLink" to="/Information">
                <div>INFORMATION</div>
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/Forum/자유게시판">
                <div>FORUM</div>
              </Link>
            </li>

            <li>
              <Link className="menuLink" to="/Bachelor/공지사항">
                <div>BACHELOR</div>
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/Contact_us/기술문제">
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
          </ul>
        </nav>
      </header>
      <main style={{ display: "inline-block" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Information" component={Information} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Bachelor" component={Bachelor} />
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
