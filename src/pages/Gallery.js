import {
  Switch,
  NavLink,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./css/SideBar.css";
import GalleryBoard from "./SubPages/GalleryBoard";
import Detail from "./SubPages/Detail";
import NotFound from "./SubPages/NotFound";
import Posting from "./SubPages/Posting";

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
                  <NavLink to={"/Gallery/2018"} activeClassName="SideBarActive">
                    2018
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/Gallery/down"} activeClassName="SideBarActive">
                    2017 ~
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route exact path="/Gallery/2021" component={GalleryBoard} />
                <Route exact path="/Gallery/2020" component={GalleryBoard} />
                <Route exact path="/Gallery/2019" component={GalleryBoard} />
                <Route exact path="/Gallery/2018" component={GalleryBoard} />
                <Route exact path="/Gallery/Down" component={GalleryBoard} />

                <Route exact path="/Gallery/2021/글쓰기" component={Posting} />
                <Route exact path="/Gallery/2020/글쓰기" component={Posting} />
                <Route exact path="/Gallery/2019/글쓰기" component={Posting} />
                <Route exact path="/Gallery/2018/글쓰기" component={Posting} />
                <Route exact path="/Gallery/down/글쓰기" component={Posting} />

                <Route path="/Gallery/2021/:id" component={Detail} />
                <Route path="/Gallery/2020/:id" component={Detail} />
                <Route path="/Gallery/2019/:id" component={Detail} />
                <Route path="/Gallery/2018/:id" component={Detail} />
                <Route path="/Gallery/down/:id" component={Detail} />

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
