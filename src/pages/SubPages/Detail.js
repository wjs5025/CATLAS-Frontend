import "../css/Detail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Comment from "../../components/Comment";

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
            // contents: InputCmt,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("게시글 res", res.data);
        if (res.data === "error") {
          document.location.href = "/NotFound";
        }
        setDataSet(res.data);
        setCommentSet({ ...CommentSet, data: res.data[1] });
        setRmdTrue(res.data[2].state);
        setCount(res.data[2].Recommend_count);
      });
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

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(getData, []);
  useEffect(Recommend, [isRmdTrue]);
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
        <Comment CommentSet={CommentSet} />
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Detail;
