import {
  Switch,
  NavLink,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./css/SideBar.css";
import Board from "./SubPages/Board";
import Detail from "./SubPages/Detail";
import NotFound from "./SubPages/NotFound";

const Gallery = () => {
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
                  <NavLink to={"/Gallery/2021"} activeClassName="SideBarActive">
                    2021
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/Gallery/2020"} activeClassName="SideBarActive">
                    2020
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/Gallery/2019"} activeClassName="SideBarActive">
                    2019
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/Gallery/2017"} activeClassName="SideBarActive">
                    2018
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/Gallery/Down"} activeClassName="SideBarActive">
                    2017 ~
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route exact path="/Gallery/2021" component={Board} />
                <Route exact path="/Gallery/2020" component={Board} />
                <Route exact path="/Gallery/2019" component={Board} />
                <Route exact path="/Gallery/2018" component={Board} />
                <Route exact path="/Gallery/Down" component={Board} />

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
