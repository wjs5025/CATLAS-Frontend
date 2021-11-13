import "../css/Detail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Detail = () => {
  const history = useHistory();
  const [dataSet, setDataSet] = useState({}); // 데이터
  const [date, setDate] = useState("");

  //게시글 경로 확인
  const pathArray = history.location.pathname.split("/");
  const BoardPath = pathArray[2];
  const PostNum = Number(pathArray[3]);

  console.log(BoardPath);
  console.log(PostNum);

  const getData = () => {
    axios
      .get("http://172.18.3.25:3001/Detail", {
        params: {
          BoardPath: BoardPath,
          PostNum: PostNum,
        },
      })
      .then((res) => {
        console.log(res.data);
        setDataSet(res.data[0]);
        setDate(res.data[0].date);
      });
  };

  useEffect(getData, []);

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
              123{dataSet.title}
            </div>
            <div style={{ flexBasis: "15%" }}>저니녁 {date.substr(0, 10)}</div>
            <div style={{ flexBasis: "15%" }}>2021/11/13{dataSet.writer}</div>
            <div style={{ flexBasis: "10%" }}>32{dataSet.views} VIEWS</div>
          </div>
        </div>
        <div className="Detail_contents">
          <pre>123{dataSet.contents}</pre>
        </div>
        <div className="Detail_bottom">
          <button
            onClick={() => {
              history.push("/" + pathArray[1] + "/" + pathArray[2]);
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
