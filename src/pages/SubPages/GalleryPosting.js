import "../css/Posting.css";
import { useHistory } from "react-router";
import Check from "../../assets/Images/Check.png";
import Back from "../../assets/Images/Back.png";
import axios from "axios";
import { useState,useContext } from "react";
import { NewContext } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";

//게시판

const GalleryPosting = () => {
  const serverURL = useContext(NewContext).serverURL;

  const history = useHistory();
  const pathArray = history.location.pathname.split("/");

  let getDate = new Date();
  let Year = getDate.getFullYear() + "-";
  let month = getDate.getMonth() + 1;
  let day = "-" + getDate.getDate();
  let today = Year + month + day;

  const BoardPath = pathArray[2];
  const MenuPath = pathArray[1];

  const PostNum = Number(pathArray[3]);

  // || MenuPath === "Gallery"
  if (MenuPath === "Info") {
    history.push("/NotFound");
  }
  const [InputTitle, setTitle] = useState("");
  const [InputContents, setContents] = useState("");

  const Done = () => {
    if (InputTitle.trim() === "") {
      alert("제목을 입력하세요");
    } else if (InputContents.trim() === "") {
      alert("내용을 입력하세요");
    } else {
      axios
        .get(
          serverURL +"/Posting",
          {
            params: {
              BoardPath,
              PostNum,
              userid: sessionStorage.id,
              title: InputTitle,
              contents: InputContents,
            },
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("게시글작성 res", res.data);
        });
      alert("게시글 작성 완료");
      history.push("/" + pathArray[1] + "/" + pathArray[2]);
    }
  };



  ///////////////파일업로드////////////////
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null);	//파일

 ///////////////통신////////////////
  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  }

  return (
    <>
      <div className="Forum_container">
        {/* 게시글 헤더 */}
        <div className="Detail_info noDrag">
          <h5 className="Board_header">{history.location.pathname}</h5>
        </div>
        <div className="title noBorderBottom">
          <input
            maxLength="45"
            className="borderGray"
            type="text"
            placeholder="제목을 입력하세요"
            style={{
              height: "40px",
              flexBasis: "60%",
              textAlign: "start",
              paddingLeft: "20px",
            }}
            value={InputTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div style={{ flexBasis: "15%" }}></div>
          <div style={{ flexBasis: "15%" }}>{today}</div>
          <div style={{ flexBasis: "15%" }}>{sessionStorage.id}</div>
        </div>
        <Swiper
          style={{border:"1px solid red", width:"70%"}}
          className="swiperStyle"
          navigation={true}
          pagination={{
            clickable: true,
          }}>
          <SwiperSlide>
              <input style={{width : "100vw", height:"100%", border:"1px solid red"}} type="file" onChange={handleChangeFile} accept="image/*" multiple/>
          </SwiperSlide>
          <SwiperSlide>
          <input style={{backgroundColor:"yellow", width : "100vw", height:"100%", border:"1px solid red"}} type="file" onChange={handleChangeFile} accept="image/*" multiple/>

          </SwiperSlide>
        </Swiper>
        <textarea
          value={InputContents}
          onChange={(e) => setContents(e.target.value)}
          className="Detail_contents borderGray posting"
        ></textarea>
        <div className="Detail_bottom">
          <img
            className="FloatingBtn marginRight2"
            onClick={() => {
              if (window.confirm("게시글을 작성하시겠습니까?")) {
                Done();
              } else {
              }
            }}
            src={Check}
            width={35}
            alt=""
          />
          <img
            className="FloatingBtn marginRight3"
            onClick={() => {
              if (
                window.confirm(
                  "주의 : 이 페이지를 벗어나면 작성된 내용은 저장되지 않습니다"
                )
              ) {
                history.push("/" + pathArray[1] + "/" + pathArray[2]);
              } else {
              }
            }}
            src={Back}
            width={35}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default GalleryPosting;
