import "../css/Detail.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Comment from "../../components/Comment";
import FloatingBtn from "../../components/FloatingBtn";
import Edit from "../../assets/Images/edit.png";
import Delete from "../../assets/Images/deletepost.png";
import { NewContext } from "../../App";
const Detail = () => {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 변수 선언 //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //라우팅 관련 변수선언
  const serverURL = useContext(NewContext).serverURL;
  const history = useHistory();
  const pathArray = history.location.pathname.split("/");
  const MenuPath = pathArray[1];
  const BoardPath = pathArray[2];
  const PostNum = Number(pathArray[3]);

  //게시글 관련 변수선언
  const [CanManagePost, setManage] = useState("Disable");
  const [thisWriter, setWriter] = useState("");
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
    console.log("getData 통신했음");
    axios
      .get(
        serverURL + "/Detail",
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
        if (res.data === "error") {
          document.location.href = "/NotFound";
        }
        setWriter(res.data[0][0].writer);
        setDataSet(res.data);
        setCommentSet({ ...CommentSet, data: res.data[1] });
        setRmdTrue(res.data[2].state);
        setCount(res.data[2].Recommend_count);
      });
  };

  // 추천 통신
  const isRecommend = () => {
    axios
      .get(
        serverURL + "/Recommend",
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

  const ManagePost = () => {
    if (thisWriter === sessionStorage.id) {
      setManage("Visible");
    } else {
      setManage("Disable");
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 게시글 삭제 및 수정 //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const DeletePost = () => {
    axios
      .get(serverURL + "/Post_Delete", {
        params: {
          BoardPath: BoardPath,
          PostNum: PostNum,
          user_id: sessionStorage.id,
        },
      })
      .then(() => {
        document.location.href = "/" + MenuPath + "/" + BoardPath;
      });
  };

  const EditPost = (title, contents, date, writer) => {
    history.push(history.location.pathname + "/글수정", {
      title: title,
      contents: contents,
      date: date,
      writer: writer,
    });
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(getData, []);
  useEffect(ManagePost, [thisWriter]);
  useEffect(Recommend, [isRmdTrue]);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Router>
        <div className="Forum_container">
          {/* 게시글 헤더 */}
          <div className="Detail_info noDrag">
            <h5 className="Board_header">{history.location.pathname}</h5>
          </div>
          {/* 게시글 본문 */}
          <div className="title">
            <div className="table_titleArea">{dataSet[0][0].title}</div>
            <div className="table_dateArea">
              {dataSet[0][0].date.substr(0, 10)}
            </div>
            <div className="table_writerArea">{dataSet[0][0].writer}</div>
            <div className="table_viewsArea">{dataSet[0][0].views} VIEWS</div>
          </div>
          <div className="Detail_contents">
            <pre>{dataSet[0][0].contents}</pre>
            <FloatingBtn history={history} pathArray={pathArray} />
            <div className={CanManagePost}>
              <img
                className="FloatingBtn noDrag"
                src={Delete}
                onClick={() => {
                  if (window.confirm("게시글을 정말 삭제하시겠습니까?")) {
                    DeletePost();
                  } else {
                  }
                }}
                alt=""
              />
              <img
                className="FloatingBtn marginRight noDrag"
                src={Edit}
                onClick={() => {
                  if (window.confirm("게시글을 수정하시겠습니까?")) {
                    EditPost(
                      dataSet[0][0].title,
                      dataSet[0][0].contents,
                      dataSet[0][0].date,
                      dataSet[0][0].writer
                    );
                  } else {
                  }
                }}
                alt=""
              />
            </div>

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
      </Router>
    </>
  );
};
export default Detail;
