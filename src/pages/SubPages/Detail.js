import "../css/Detail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import FloatingBtn from "../../components/FloatingBtn";

const Detail = () => {
  const history = useHistory();
  const [dataSet, setDataSet] = useState({}); // 데이터
  const [CommentSet, setCommentSet] = useState({
    data: [],
  }); // 댓글

  const [date, setDate] = useState("");

  //게시글 경로 확인
  const pathArray = history.location.pathname.split("/");
  const BoardPath = pathArray[2];
  const PostNum = Number(pathArray[3]);

  console.log("게시판", BoardPath);
  console.log("게시글번호", PostNum);

  const getData = () => {
    axios
      .get("http://172.18.3.25:3001/Detail", {
        params: {
          BoardPath: BoardPath,
          PostNum: PostNum,
        },
      })
      .then((res) => {
        setDataSet(res.data[0]);
        setDate(res.data[0].date);
      });
  };

  useEffect(getData, []);

  const getComment = () => {
    axios
      .get("http://172.18.3.25:3001/Comment", {
        params: {
          BoardPath: BoardPath,
          PostNum: PostNum,
        },
      })
      .then((res) => {
        setCommentSet({ ...CommentSet, data: res.data });
      });
  };

  useEffect(getComment, []);

  const { data } = CommentSet;

  return (
    <>
      <div className="Forum_container">
        {/* 게시글 헤더 */}
        <div className="Detail_info noDrag">
          <h5 className="Board_header">{history.location.pathname}</h5>
        </div>
        <div className="title">
          <div
            style={{
              flexBasis: "60%",
              textAlign: "start",
              paddingLeft: "20px",
            }}
          >
            {dataSet.title}
          </div>
          <div style={{ flexBasis: "15%" }}> {date.substr(0, 10)}</div>
          <div style={{ flexBasis: "15%" }}>{dataSet.writer}</div>
          <div style={{ flexBasis: "15%" }}>{dataSet.views} VIEWS</div>
        </div>
        <div className="Detail_contents">
          <pre>{dataSet.contents}</pre>
          <FloatingBtn history={history} pathArray={pathArray} />
        </div>

        {CommentSet.data.map((nowComment) => (
          <tr key={nowComment.idx}>
            <td>{nowComment.writer} </td>
            <td>{nowComment.contents} </td>
            <td> {nowComment.date.substr(0, 10)}</td>
          </tr>
        ))}
      </div>
    </>
  );
};
export default Detail;
