import "./css/SideBar.css";

import React from "react";
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";

const Information = () => {
  return (
    <>
      <Router>
        <div className="container">
          <div className="left">
            <div className="Header">
              <h1 className="Title noDrag">INFORMATION</h1>
            </div>
            <div className="menu_Nav noDrag">
              <div className="circle2"></div>
              <ul>
                <tr>
                  <td>
                    <Link to={"/Information/CATLAS"}>CATLAS</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to={"/Information/학과"}>학 과</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to={"/Information/학생회"}>학생회</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to={"/Information/교육과정"}>교육과정</Link>
                  </td>
                </tr>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route path="/Information/CATLAS" component={FreeForum} />
                <Route path="/Information/학과" component={FreeForum2} />
                <Route path="/Information/학생회" component={FreeForum} />
                <Route path="/Information/교육과정" component={FreeForum2} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Information;

function FreeForum() {
  return (
    <>
      <h1>프리포럼 1</h1>
    </>
  );
}

function FreeForum2() {
  return <h1>프리포럼 2</h1>;
}
