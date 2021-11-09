import ReactFullpage from "@fullpage/react-fullpage";
import gnuCS from "../assets/Images/gnuCS.png";

const Fullpage = () => {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={700} /* Options here */
      navigation={true}
      anchors={["1", "2", "3", "4"]}
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div id="fullpage">
              <div className="section">
                <p>1</p>
              </div>
              <div className="section">
                <img src={gnuCS} />
              </div>
              <div className="section">
                <p>1</p>
              </div>
              <div className="section">
                <p>1</p>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Fullpage;
