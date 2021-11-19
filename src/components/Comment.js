import axios from "axios";
import CommentImg from "../assets/Images/comment2.png";
import { useState, useEffect } from "react";
import Pencil from "../assets/Images/submit.png";
import { useHistory } from "react-router";
import deleteIcon from "../assets/Images/delete.png";

const Comment = ({ CommentSet }) => {
  console.log("댓글 세트 ", CommentSet);
  // 라우팅 관련 변수 선언
  const history = useHistory();
  const pathArray = history.location.pathname.split("/");
  const BoardPath = pathArray[2];
  const MenuPath = pathArray[1];
  const PostNum = Number(pathArray[3]);

  //댓글 스타일 관련 변수 및 함수 선언
  const [cmtOpen, setCmtOpen] = useState(true);
  const [cmtRender, setCmtRender] = useState("");

  const [cmtStyle, setStyle] = useState({});
  const [cmtClassName, setCmtClassName] = useState("");
  let CanDeleteCN = "CantDelete";

  const DeleteClassName = (writer) => {
    if (sessionStorage.id === writer) {
      CanDeleteCN = "CanDelete";
    } else {
      CanDeleteCN = "CantDelete";
    }
    return CanDeleteCN;
  };

  const CommentStyle = () => {
    if (MenuPath === "Info") {
      setStyle({ display: "none" });
    } else {
      setStyle({ display: "block" });
    }
  };

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

  //댓글 데이터 관련 변수 선언
  const [cmtCnt, setcmtCnt] = useState(0);

  const CommentCnt = () => {
    setcmtCnt(CommentSet.data.length);
    CommentState();
  };

  //댓글 제출 관련 변수 및 선언
  const [InputCmt, setInputCmt] = useState("");

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

  // 댓글 삭제 관련 통신
  const cmtDelete = (idx) => {
    axios
      .get("http://172.18.3.25:3001/Comment_Delete", {
        params: {
          BoardPath,
          PostNum,
          userid: sessionStorage.id,
          idx: idx,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data === "/") {
          document.location.href = history.location.pathname;
        }
      });
  };

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  useEffect(CommentCnt, [CommentSet]);
  useEffect(CommentStyle, [history.location.pathname]);

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  return (
    <div style={cmtStyle}>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      <div className="cmtHeader" onClick={CommentState}>
        <img
          src={CommentImg}
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
            <td className="cmtTableWriter noDrag">{sessionStorage.id}</td>
            <td className="cmtTableContents noDrag">
              <input
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") cmtSubmit();
                }}
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
            <td className="cmtTableSubmit noDrag">
              <div onClick={() => cmtSubmit()}>
                <img src={Pencil} width={18} alt="" />
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
              <td className={DeleteClassName(nowComment.writer)}>
                <div>
                  <img
                    onClick={() => {
                      if (window.confirm("댓글을 정말 삭제하시겠습니까?")) {
                        cmtDelete(nowComment.idx);
                      }
                    }}
                    style={{ margin: "0 10px" }}
                    src={deleteIcon}
                    width={10}
                    alt=""
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comment;
