import "../css/Detail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import FloatingBtn from "../../components/FloatingBtn";
import Comment from "../../assets/Images/comment2.png";

const Detail = () => {
  const history = useHistory();
  const [dataSet, setDataSet] = useState([
    {
      id: "",
      menu: "",
      writer: "",
      date: "",
      contents: "",
      title: "",
      views: "",
      idx: "",
    },
  ]);

  // 댓글
  const [date, setDate] = useState("");
  const [CommentSet, setCommentSet] = useState({
    data: [],
  });
  const [cmtOpen, setCmtOpen] = useState(true);
  const [cmtClassName, setCmtClassName] = useState("");
  const [cmtRender, setCmtRender] = useState("");

  const CommentState = () => {
    if (cmtOpen == true) {
      setCmtOpen(false);
      setCmtClassName("");

      setCmtRender("cmtRenderFalse");
    } else {
      setCmtOpen(true);
      setCmtClassName("CmtClose");
      setCmtRender("cmtRenderTrue");
    }
  };

  useEffect(CommentState, []);
  //게시글 경로 확인
  const pathArray = history.location.pathname.split("/");
  const BoardPath = pathArray[2];
  const PostNum = Number(pathArray[3]);

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
        <div
          style={{
            display: "flex",
            margin: "15px 0 0 10px",
            alignItems: "center",
          }}
          onClick={CommentState}
        >
          <img
            src={Comment}
            className={cmtClassName}
            style={{ transition: "100ms" }}
            width={15}
            height={15}
          />
          <h5 style={{ margin: "0 0 0 10px", fontFamily: "SCDream6" }}>댓글</h5>
        </div>
        <div className={cmtRender} style={{ margin: "10px 0 0 10px" }}>
          {CommentSet.data.map((nowComment) => (
            <tr key={nowComment.idx}>
              <td>{nowComment.writer}/</td>
              <td>{nowComment.contents}/</td>
              <td> {nowComment.date.substr(0, 10)}</td>
            </tr>
          ))}
        </div>
      </div>
    </>
  );
};
export default Detail;
