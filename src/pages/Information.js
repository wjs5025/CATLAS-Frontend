import "./css/SideBar.css";

import React from "react";
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import FreeForum from "./menu_Forums/Board";
import Detail from "./menu_Forums/Detail";

const Information = ({ history }) => {
  return (
    <>
      <Router>
        <div className="container">
          <div className="left">
            <div className="Header">
              <h1 className="Title noDrag">INFORMATION</h1>
            </div>
            <div className="menu_Nav noDrag">
              <ul>
                <li>
                  <Link to={"/Information/CATLAS"}>CATLAS</Link>
                </li>
                <li>
                  <Link to={"/Information/학과"}>학 과</Link>
                </li>
                <li>
                  <Link to={"/Information/학생회"}>학생회</Link>
                </li>
                <li>
                  <Link to={"/Information/교육과정"}>교육과정</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route path="/Information/CATLAS" component={FreeForum} />
                <Route path="/Information/학과" component={FreeForum} />
                <Route path="/Information/학생회" component={FreeForum} />
                <Route path="/Information/교육과정" component={FreeForum} />

                <Route
                  path={`${history.location.pathname}/:id`}
                  component={Detail}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Information;
