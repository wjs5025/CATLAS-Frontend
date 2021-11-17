import "../css/Detail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import FloatingBtn from "../../components/FloatingBtn";
import Comment from "../../assets/Images/comment2.png";
import Check from "../../assets/Images/submit.png";

const Detail = () => {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 변수 선언 //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //라우팅 관련 변수선언
  const history = useHistory();
  const pathArray = history.location.pathname.split("/");
  const BoardPath = pathArray[2];
  const MenuPath = pathArray[1];

  const PostNum = Number(pathArray[3]);

  const [cmtStyle, setStyle] = useState({});

  const CommentStyle = () => {
    if (MenuPath === "Info") {
      setStyle({ display: "none" });
    } else {
      setStyle({ display: "block" });
    }
  };
  //게시글 관련 변수선언
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

  // 댓글 관련 변수 선언
  const [InputCmt, setInputCmt] = useState("");
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

  // 추천 검증 변수(로그인한 사람이 추천을 눌렀는지 검증)
  const [isRmdTrue, setRmdTrue] = useState(false);
  const [Recommend_count, setCount] = useState(0);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // axios 통신 //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 게시글 정보 GET
  const getData = () => {
    axios
      .get(
        "http://172.18.3.25:3001/Detail",
        {
          params: {
            BoardPath: BoardPath,
            PostNum: PostNum,
            user_id: sessionStorage.id,
            contents: InputCmt,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("게시글 res", res.data);
        setDataSet(res.data);
        setCommentSet({ ...CommentSet, data: res.data[1] });
        setcmtCnt(res.data[1].length);
        setRmdTrue(res.data[2].state);
        setCount(res.data[2].Recommend_count);
      });
  };

  // 댓글 작성 완료 통신
  const cmtSubmit = () => {
    if (InputCmt.trim() === "") {
      alert("댓글을 입력해주세요");
    } else {
      axios
        .get(
          "http://172.18.3.25:3001/Comment",
          {
            params: {
              BoardPath,
              PostNum,
              userid: sessionStorage.id,
              contents: InputCmt,
            },
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("댓글 res", res.data);
          document.location.href = history.location.pathname;
        });
    }
  };

  // 추천 통신
  const isRecommend = () => {
    console.log(sessionStorage.id, isRmdTrue);
    axios
      .get(
        "http://172.18.3.25:3001/Recommend",
        {
          params: {
            BoardPath: BoardPath,
            PostNum: PostNum,
            user_id: sessionStorage.id,
            state: isRmdTrue,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        setCount(res.data.Recommend_count);
        setRmdTrue(res.data.state);
      });
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 댓글 및 추천 관련 //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [rmdClass, setRmdClass] = useState("recommendBtnFalse noDrag");
  const Recommend = () => {
    if (isRmdTrue === true) {
      setRmdClass("recommendBtnTrue noDrag");
    } else {
      setRmdClass("recommendBtnFalse noDrag");
    }
  };
  // 댓글리스트 상태에 따른 Open Close
  const CommentState = () => {
    if (cmtOpen === true) {
      setCmtOpen(false);
      setCmtClassName("noDrag");
      setCmtRender("cmtRenderFalse");
    } else {
      setCmtOpen(true);
      setCmtClassName("CmtClose noDrag");
      setCmtRender("cmtRenderTrue");
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(getData, []);
  useEffect(CommentState, []);
  useEffect(CommentStyle, [history.location.pathname]);
  useEffect(Recommend, [isRmdTrue]);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="Forum_container">
        {/* 게시글 헤더 */}
        <div className="Detail_info noDrag">
          <h5 className="Board_header">{history.location.pathname}</h5>
        </div>
        {/* 게시글 본문 */}
        <div className="title">
          <div
            style={{
              height: "5vh",
              lineHeight: "5vh",
              fontSize: "1.4rem",
              flexBasis: "60%",
              textAlign: "start",
              paddingLeft: "20px",
            }}
          >
            {dataSet[0][0].title}
          </div>
          <div
            style={{
              height: "5vh",
              lineHeight: "5vh",
              fontSize: "1.2rem",
              flexBasis: "15%",
            }}
          >
            {dataSet[0][0].date.substr(0, 10)}
          </div>
          <div
            style={{
              flexBasis: "15%",
              height: "5vh",
              lineHeight: "5vh",
              fontSize: "1.2rem",
            }}
          >
            {dataSet[0][0].writer}
          </div>
          <div
            style={{
              flexBasis: "15%",
              height: "5vh",
              lineHeight: "5vh",
              fontSize: "1.2rem",
            }}
          >
            {dataSet[0][0].views} VIEWS
          </div>
        </div>
        <div className="Detail_contents">
          <pre>{dataSet[0][0].contents}</pre>
          {/* ToTop, Back 버튼 */}
          <div onClick={isRecommend} className={rmdClass}>
            👍 {Recommend_count}
          </div>
          {/* <Recommend /> */}
        </div>

        {/* 댓글 */}
        {/* - 댓글 헤더 */}
        <div style={cmtStyle}>
          <div style={{ display: "flex", justifyContent: "center" }}></div>
          <div className="cmtHeader" onClick={CommentState}>
            <FloatingBtn history={history} pathArray={pathArray} />
            <img
              src={Comment}
              className={cmtClassName}
              style={{ transition: "100ms" }}
              width={15}
              height={15}
              alt=""
            />
            <h5
              className="noDrag"
              style={{ margin: "0 0 0 10px", fontFamily: "SCDream6" }}
            >
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
                      boxShadow: "1px 1px 2px 1px #f1f1f1",
                      borderRadius: "5px",
                    }}
                    placeholder="댓글을 입력해주세요"
                    value={
                      sessionStorage.id === undefined
                        ? "댓글 작성은 로그인 후 이용하실 수 있습니다"
                        : InputCmt
                    }
                    onChange={(e) => {
                      setInputCmt(e.target.value);
                    }}
                  />
                </td>
                <td className="cmtTableSubmit">
                  <div onClick={() => cmtSubmit()}>
                    <img src={Check} width={18} alt="" />
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
                      width: "100px",
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
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Detail;
