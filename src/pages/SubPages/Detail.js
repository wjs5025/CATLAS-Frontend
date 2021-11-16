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
  const PostNum = Number(pathArray[3]);

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
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // axios 통신 //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

  // 댓글 작성 완료 통신
  const cmtSubmit = () => {
    if (InputCmt.trim() === "") {
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

  // 추천 통신
  const isRecommend = () => {
    axios.get("").then((res) => {
      if (res.data === "1") {
        setRmdTrue(true);
      } else {
        setRmdTrue(false);
      }
    });
  };

  const RecommendClick = () => {
    if (isRmdTrue === true) {
      setRmdTrue(false);
    } else {
      setRmdTrue(true);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 댓글 및 추천 관련 //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const Recommend = () => {
    if (isRmdTrue === true) {
      return (
        <div onClick={RecommendClick} className="recommendBtnTrue noDrag">
          👍 65
        </div>
      );
    } else {
      return (
        <div onClick={RecommendClick} className="recommendBtnFalse noDrag">
          👍🏻 65
        </div>
      );
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
  useEffect(isRecommend, []);

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

          <Recommend />
        </div>

        {/* 댓글 */}
        {/* - 댓글 헤더 */}
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
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Detail;
