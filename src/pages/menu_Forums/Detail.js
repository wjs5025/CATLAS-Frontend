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
          <div className="Detail_Info">
            <h5 className="Board_header">{history.location.pathname}</h5>
          </div>
          <div className="Detail">
            <div className="title">{data.title}</div>
            <div>
              {data.writer},{data.date},{data.views}
            </div>
            <div
              style={{
                height: "65%",
                textOverflow: "scroll",
                fontSize: "50px",
              }}
            >
              텍스트탤텍스트탤텍탤텍스탤텍스트텍스트탤트탤텍탤텍스탤텍스트텍스트트탤텍탤텍스탤텍스트텍스트트탤텍탤텍스탤텍스트텍스트트탤텍탤텍스탤텍스트텍스트텍스탤텍스트텍스탤텍스트텍스트탤텍스탤텍스트탤텍스텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스트탤텍스
            </div>
          </div>
        </div>
      </>
    );
};
export default Detail;
