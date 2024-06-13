import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Two from "../../public/images/2.png";
import AC from "../../public/images/ac.png";
import Achieve from "../../public/images/achieve.png";
import Base from "../../public/images/base.png";
import Foun from "../../public/images/foun.png";
import SE from "../../public/images/se.png";
import SNNT from "../../public/images/snnt.png";
import TACT from "../../public/images/tact.png";
import TED from "../../public/images/ted.png";
import UNI from "../../public/images/uni.png";
import SVT from "../../public/images/svt.png";
import { Button, Container } from "@mui/material";

function PartnerMain() {
  const logoRowStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  };

  const logoStyle = {
    maxWidth: "100px",
    maxHeight: "100px",
    margin: "0 30px",
  };

  return (
    <section>
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin:"30px"}}>
        <div style={logoRowStyle}>
          <Image src={SVT} alt="Logo 1" style={logoStyle} />
          <Image src={Two} alt="Logo 2" style={logoStyle} />
          <Image src={AC} alt="Logo 3" style={logoStyle} />
          <Image src={SNNT} alt="Logo 4" style={logoStyle} />
        </div>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          showStatus={false}
        >
          <div>
            <Image src={Base} alt="Logo 5" style={logoStyle} />
            <Image src={UNI} alt="Logo 6" style={logoStyle} />{" "}
            <Image src={Foun} alt="Logo 7" style={logoStyle} />{" "}
          </div>
          <div>
            <Image src={TACT} alt="Logo 8" style={logoStyle} />
            <Image src={Achieve} alt="Logo 9" style={logoStyle} />
            <Image src={TED} alt="Logo 10" style={logoStyle} />
            <Image src={SE} alt="Logo 11" style={logoStyle} />
          </div>
        </Carousel>
        <Button
            style={{
              backgroundColor: "#24d1e8",
              width: "200px",
              height: "50px",
              borderRadius: "30px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              color: "#FFFFFF",
              fontSize: "16px",
              alignSelf: "center",
              marginTop: "30px"
            }}
          >
            ร่วมเป็นพันธมิตรกับเรา
          </Button>
      </Container>
    </section>
  );
}

export default PartnerMain;
