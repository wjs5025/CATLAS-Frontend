import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import "./css/SideBar.css";
import FreeForum from "./menu_Forums/Board";
import Detail from "./menu_Forums/Detail";
import NotFound from "../pages/NotFound";
import { useState } from "react";

const Gallery = (history) => {
  const [cate, setCate] = useState("자유게시판");
  let nowIn;

  switch (history.location.pathname) {
    case "/Gallery/자유게시판":
      nowIn = "자유게시판";
    case "/Gallery/질문게시판":
      nowIn = "질문게시판";
    case "/Gallery/홍보게시판":
      nowIn = "홍보게시판";
    case "/Gallery/동아리게시판":
      nowIn = "동아리게시판";
    case "/Gallery/IT게시판":
      nowIn = "IT게시판";
    case "/Gallery/자료실":
      nowIn = "자료실";
  }

  return (
    <>
      <Router>
        <div className="container">
          <div className="left">
            <div className="Header">
              <h1 className="Title noDrag">GALLERY</h1>
            </div>
            <div className="menu_Nav noDrag">
              <ul>
                <li>
                  <Link to={"/Gallery/2021"}>2021</Link>
                </li>
                <li>
                  <Link to={"/Gallery/2020"}>2020</Link>
                </li>
                <li>
                  <Link to={"/Gallery/2019"}>2019</Link>
                </li>
                <li>
                  <Link to={"/Gallery/2017"}>2018</Link>
                </li>
                <li>
                  <Link to={"/Gallery/Down"}>2017 ~</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route exact path="/Gallery/2021" component={FreeForum} />
                <Route exact path="/Gallery/2020" component={FreeForum} />
                <Route exact path="/Gallery/2019" component={FreeForum} />
                <Route exact path="/Gallery/2018" component={FreeForum} />
                <Route exact path="/Gallery/Down" component={FreeForum} />

                <Route path="/Gallery/2021/:id" component={Detail} />
                <Route path="/Gallery/2020/:id" component={Detail} />
                <Route path="/Gallery/2019/:id" component={Detail} />
                <Route path="/Gallery/2018/:id" component={Detail} />
                <Route path="/Gallery/Down/:id" component={Detail} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Gallery;
