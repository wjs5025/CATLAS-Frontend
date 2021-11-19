import LogoON from "../assets/Images/CATLAS LOCO/CATLAS Logo on.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer">
        <img
          className="footerLogo"
          src={LogoON}
          width={100}
          height={100}
          alt=""
        />
        <div
          style={{
            fontFamily: "SCDream4",
            display: "flex",
            flexDirection: "column",
            marginLeft: "3vw",
            justifyContent: "center",
          }}
        >
          <h5>Copyright ⓒ 2021 CORNER, All rights reserved</h5>
          <div>경상남도 진주시 진주대로 501, 경상국립대학교 30동 313호</div>
          <div>컴퓨터과학과 전산개발연구실 "구석방"</div>
          <div>📞 실원 전인혁. 010-7589-5025 📞 실원 김우석. 010-7589-5025</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
