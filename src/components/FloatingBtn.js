import { useHistory } from "react-router";
import Back from "../assets/Images/Back.png";
import ToTop from "../assets/Images/ToTop.png";

const FloatingBtn = () => {
  const history = useHistory();
  const pathArray = history.location.pathname.split("/");

  return (
    <>
      <img
        className="FloatingBtn noDrag"
        src={ToTop}
        onClick={() => window.scrollTo(0, 0)}
        alt=""
      />
      <img
        className="FloatingBtn marginRight noDrag"
        src={Back}
        onClick={() => {
          history.push("/" + pathArray[1] + "/" + pathArray[2]);
        }}
        alt=""
      />
    </>
  );
};

export default FloatingBtn;
