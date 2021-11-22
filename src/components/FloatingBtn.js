import Back from "../assets/Images/Back.png";
import ToTop from "../assets/Images/ToTop.png";

const FloatingBtn = ({ history }) => {
  const pathArray = history.location.pathname.split("/");

  return (
    <>
      <img
        className="FloatingBtn marginRight2 noDrag"
        src={ToTop}
        onClick={() => window.scrollTo(0, 0)}
        alt=""
      />
      <img
        className="FloatingBtn marginRight3 noDrag"
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
