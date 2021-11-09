import NotFound from "../NotFound";
import "../css/Detail.css";
import { useHistory } from "react-router-dom";

const Detail = () => {
  const history = useHistory();
  const data = history.location.data;
  // const dataSet = history.location.data.dataset;

  // 이전글, 다음글을 만들기 위한 로그
  // if (data.id === data.count) {
  //   console.log("다음글이 없습니다");
  // } else if (data.id === 1) {
  //   console.log("이전글이 없습니다.");
  // } else {
  //   console.log(data.id - data.dataset[0].id);
  // }
  ////////////////////////////////////

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
          </div>
          <div className="Detail_contents">
            <pre>{data.contents}</pre>
          </div>
          <div className="Detail_bottom">
            {/* <button
              onClick={() => {
                history.push({
                  pathname: history.location.pathname.replace(
                    data.id,
                    data.id - 1
                  ),
                  data: {
                    id: dataSet[data.id - 1].id,
                    title: dataSet[data.id - 1].title,
                    writer: dataSet[data.id - 1].writer,
                    date: dataSet[data.id - 1].date,
                    views: dataSet[data.id - 1].views,
                    contents: dataSet[data.id - 1].contents,
                    dataset: dataSet,
                    count: data.count,
                  },
                });
              }}
            >
              이전글
            </button>

            <button
              onClick={() => {
                history.push({
                  pathname: history.location.pathname.replace(
                    data.id,
                    data.id + 1
                  ),
                  data: {
                    id: dataSet[data.id].id,
                    title: dataSet[data.id].title,
                    writer: dataSet[data.id].writer,
                    date: dataSet[data.id].date,
                    views: dataSet[data.id].views,
                    contents: dataSet[data.id].contents,
                    dataset: dataSet,
                    count: data.count,
                  },
                });
              }}
            >
              다음글
            </button> */}

            <button
              onClick={() => {
                history.push(
                  history.location.pathname.replace("/" + data.id, "")
                );
              }}
              className="Detail_button"
            >
              목록으로
            </button>
            <button
              onClick={() => window.scrollTo(0, 0)}
              className="Detail_button"
            >
              맨 위로
            </button>
          </div>
        </div>
      </>
    );
};
export default Detail;
