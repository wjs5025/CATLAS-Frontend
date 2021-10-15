import NotFound from "../NotFound";
import "../css/Detail.css";

const Detail = (history) => {
  const data = history.location.data;
  console.log(data);
  if (data === undefined) return <NotFound />;
  else
    return (
      <>
        <div className="Forum_container">
          {/* 게시글 헤더 */}
          <div className="Detail_address">
            <h5 className="Board_header">{history.location.pathname}</h5>
          </div>

          <div className="Detail_info">
            <div className="title">
              <div
                style={{
                  flexBasis: "60%",
                  textAlign: "start",
                  paddingLeft: "20px",
                }}
              >
                {data.title}
              </div>
              <div style={{ flexBasis: "15%" }}>{data.date}</div>
              <div style={{ flexBasis: "15%" }}>{data.writer}</div>
              <div style={{ flexBasis: "10%" }}>{data.views} VIEWS</div>
            </div>
            <div className="Detail_contents">
              {data.contents}
              <div>
                <button
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  gd
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default Detail;
