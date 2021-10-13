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
                HOME
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/Information">
                INFORMATION
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/Forum">
                FORUM
              </Link>
            </li>

            <li>
              <Link className="menuLink" to="/Bachelor">
                BACHELOR
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/ContactUs">
                CONTACT US
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/SignUp">
                SIGN UP
              </Link>
            </li>
            <li>
              <Link className="menuLink" to="/SignIn">
                SIGN IN
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
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </main>
    </Router>
  );
};
export default App;
