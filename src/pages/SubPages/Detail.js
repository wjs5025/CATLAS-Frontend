import "../css/Detail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import FloatingBtn from "../../components/FloatingBtn";
import Comment from "../../assets/Images/comment2.png";
import Check from "../../assets/Images/submit.png";

const Detail = () => {
  const history = useHistory();
  const [dataSet, setDataSet] = useState([
    [
      {
        id: "",
        title: "",
        idx: "",
        contents: "",
        date: "",
        menu: "",
        views: "",
      },
    ],
    [{ writer: "" }],
  ]);

  const [InputCmt, setInputCmt] = useState("");

  // today = 오늘 날짜
  let getDate = new Date();
  let Year = getDate.getFullYear() + "-";
  let month = getDate.getMonth() + 1;
  let day = "-" + getDate.getDate();
  let today = Year + month + day;

  //게시글 경로 확인 관련 변수선언
  const pathArray = history.location.pathname.split("/");
  const BoardPath = pathArray[2];
  const PostNum = Number(pathArray[3]);

  // 댓글 관련 변수 선언
  const [CommentSet, setCommentSet] = useState({
    data: [
      {
        contents: "",
        date: "",
        menu: "",
        writer: "",
      },
    ],
  });
  const [cmtOpen, setCmtOpen] = useState(false);
  const [cmtClassName, setCmtClassName] = useState("");
  const [cmtRender, setCmtRender] = useState("");
  const [cmtCnt, setcmtCnt] = useState(0);

  // 댓글리스트 상태에 따른 Open Close
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

  // 게시글 정보 GET
  const getData = () => {
    axios
      .get("http://172.18.3.25:3001/Detail", {
        params: {
          BoardPath: BoardPath,
          PostNum: PostNum,
        },
      })
      .then((res) => {
        console.log("이렇게들어옴", res.data);
        setDataSet(res.data);
        setCommentSet({ ...CommentSet, data: res.data[1] });
        setcmtCnt(res.data[1].length);
      });
  };

  const cmtSubmit = () => {
    if (InputCmt.trim() == "") {
      alert("댓글을 입력해주세요");
    } else {
      axios
        .get("http://172.18.3.25:3001/Comment", {
          params: {
            BoardPath,
            PostNum,
          },
        })
        .then((res) => {
          console.log("댓글", res.data);
        });
    }
  };

  useEffect(getData, []);
  useEffect(CommentState, []);
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
            {dataSet[0][0].title}
          </div>
          <div style={{ flexBasis: "15%" }}>
            {dataSet[0][0].date.substr(0, 10)}
          </div>
          <div style={{ flexBasis: "15%" }}>{dataSet[0][0].writer}</div>
          <div style={{ flexBasis: "15%" }}>{dataSet[0][0].views} VIEWS</div>
        </div>
        <div className="Detail_contents">
          <pre>{dataSet[0][0].contents}</pre>
          <FloatingBtn history={history} pathArray={pathArray} />
        </div>
        {/* 댓글 */}
        {/* - 댓글 헤더 */}
        <div className="cmtHeader" onClick={CommentState}>
          <img
            src={Comment}
            className={cmtClassName}
            style={{ transition: "100ms" }}
            width={15}
            height={15}
          />
          <h5 style={{ margin: "0 0 0 10px", fontFamily: "SCDream6" }}>
            댓글 ({cmtCnt})
          </h5>
        </div>

        {/* - 댓글리스트 */}
        <table className={cmtRender} style={{ margin: "10px 0 0 10px" }}>
          <tbody>
            <tr>
              <td className="cmtTableWriter">{sessionStorage.id}</td>
              <td className="cmtTableContents">
                <input
                  style={{
                    width: "30vw",
                    border: "1px solid #d3d3d3",
                    borderRadius: "5px",
                  }}
                  value={InputCmt}
                  onChange={(e) => setInputCmt(e.target.value)}
                />
              </td>
              <td className="cmtTableSubmit">
                <div onClick={() => cmtSubmit()}>
                  <img src={Check} width={25} alt="" />
                </div>
              </td>
            </tr>

            {CommentSet.data.map((nowComment) => (
              <tr key={nowComment.idx}>
                <td className="cmtTableWriter">{nowComment.writer}</td>
                <td style={{ width: "30vw", textAlign: "initial" }}>
                  {nowComment.contents}
                </td>
                <td
                  style={{
                    width: "5vw",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  {nowComment.date.substr(0, 10)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Detail;
