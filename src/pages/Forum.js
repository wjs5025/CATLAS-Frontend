import {
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./css/SideBar.css";
import Board from "./SubPages/Board";
import Detail from "./SubPages/Detail";
import NotFound from "./SubPages/NotFound";
import Posting from "./SubPages/Posting";
import PleaseLogin from "./SubPages/PleaseLogin";
import PostEdit from "./SubPages/PostEdit";

const CanPosting = () => {
  if (sessionStorage.id === undefined) {
    return <PleaseLogin />;
  } else {
    return <Posting />;
  }
};

const CanDetail = () => {
  if (sessionStorage.id === undefined) {
    return <PleaseLogin />;
  } else {
    return <Detail />;
  }
};

const CanEdit = () => {
  if (sessionStorage.id === undefined) {
    return <PleaseLogin />;
  } else {
    return <PostEdit />;
  }
};

const Forum = () => {
  return (
    <>
      <Router>
        <div className="container">
          <div className="left">
            <div className="Header">
              <h1 className="Title noDrag">FORUM</h1>
            </div>
            <div className="menu_Nav noDrag ">
              <ul>
                <li>
                  <NavLink
                    to={"/Forum/HOTκ²μν"}
                    activeClassName="SideBarActive"
                  >
                    Hπ₯Tκ²μν
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Forum/μμ κ²μν"}
                    activeClassName="SideBarActive"
                  >
                    μμ κ²μν
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Forum/μ§λ¬Έκ²μν"}
                    activeClassName="SideBarActive"
                  >
                    μ§λ¬Έκ²μν
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Forum/νλ³΄κ²μν"}
                    activeClassName="SideBarActive"
                  >
                    νλ³΄κ²μν
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Forum/λμλ¦¬κ²μν"}
                    activeClassName="SideBarActive"
                  >
                    λμλ¦¬κ²μν
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Forum/ITκ²μν"}
                    activeClassName="SideBarActive"
                  >
                    ITκ²μν
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="Main_Component">
              <Switch>
                <Route
                  path="/Forum/μμ κ²μν/:id/κΈμμ "
                  component={CanEdit}
                />
                <Route
                  path="/Forum/μ§λ¬Έκ²μν/:id/κΈμμ "
                  component={CanEdit}
                />
                <Route
                  path="/Forum/νλ³΄κ²μν/:id/κΈμμ "
                  component={CanEdit}
                />
                <Route
                  path="/Forum/λμλ¦¬κ²μν/:id/κΈμμ "
                  component={CanEdit}
                />
                <Route path="/Forum/ITκ²μν/:id/κΈμμ " component={CanEdit} />
                <Route path="/Forum/HOTκ²μν/:id/κΈμμ " component={CanEdit} />

                <Route exact path="/Forum/μμ κ²μν" component={Board} />
                <Route exact path="/Forum/μ§λ¬Έκ²μν" component={Board} />
                <Route exact path="/Forum/νλ³΄κ²μν" component={Board} />
                <Route exact path="/Forum/λμλ¦¬κ²μν" component={Board} />
                <Route exact path="/Forum/ITκ²μν" component={Board} />
                <Route exact path="/Forum/HOTκ²μν" component={Board} />

                <Route path="/Forum/μμ κ²μν/κΈμ°κΈ°" component={CanPosting} />
                <Route
                  exact
                  path="/Forum/μ§λ¬Έκ²μν/κΈμ°κΈ°"
                  component={CanPosting}
                />
                <Route
                  exact
                  path="/Forum/νλ³΄κ²μν/κΈμ°κΈ°"
                  component={CanPosting}
                />
                <Route
                  exact
                  path="/Forum/λμλ¦¬κ²μν/κΈμ°κΈ°"
                  component={CanPosting}
                />
                <Route
                  exact
                  path="/Forum/ITκ²μν/κΈμ°κΈ°"
                  component={CanPosting}
                />
                <Route
                  exact
                  path="/Forum/HOTκ²μν/κΈμ°κΈ°"
                  component={CanPosting}
                />

                <Route path="/Forum/μμ κ²μν/:id" component={CanDetail} />
                <Route path="/Forum/μ§λ¬Έκ²μν/:id" component={CanDetail} />
                <Route path="/Forum/νλ³΄κ²μν/:id" component={CanDetail} />
                <Route path="/Forum/λμλ¦¬κ²μν/:id" component={CanDetail} />
                <Route path="/Forum/ITκ²μν/:id" component={CanDetail} />
                <Route path="/Forum/HOTκ²μν/:id" component={CanDetail} />

                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Forum;
