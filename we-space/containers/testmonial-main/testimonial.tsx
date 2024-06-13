/* eslint-disable react/no-unescaped-entities */

import { Container } from "@mui/material";
import Image from "next/image";
import Logo from "../../public/images/we-space-logo.png"; // Ensure this path is correct

function TestimonialMain() {
  return (
    <section
      style={{
        backgroundColor: "#f6f6f6",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#32658a", fontWeight: "lighter" }}>
          "เราอยากให้คุณเจอสิ่งที่ชอบและพัฒนาไปสู่เป้าหมายนั้น"
        </h1>
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Image src={Logo} alt="We Space" width={165} height={135} />
          <Container style={{ textAlign: "center" }}>
            <p style={{ maxWidth: "800px", lineHeight: "1.6", fontWeight: 50, fontSize:"17px" }}>
              นักเรียนและนักศึกษาจำนวนมากเมื่อใกล้เรียนจบ แต่กลับไม่มีเป้าหมาย
              ศึกษาไม่ชัดเจนเวเราจึงอยากให้มีพื้นที่ของ
              การเริ่มต้นที่ได้ช่วยให้เกิดกระบวนการเรียนรู้
              เข้าใจความต้องการของตนเอง และมีแนวทางที่ทำได้ต่อไปในชีวิต
              พวกเราพัฒนา WE Space
              เป็นธุรกิจเพื่อสังคมที่ต้องการช่วยแก้ปัญหาความเหลื่อมล้ำทางการศึกษาที่จะช่วยเป็น
              เครื่องมือให้นักเรียนและนักศึกษา ค้นพบตัวเอง รู้จักชอบ
              รู้วิธีการพัฒนาตนเอง และไปสู่เป้าหมายอาชีพของตนเองได้
            </p>
          </Container>
        </Container>
      </Container>
    </section>
  );
}

export default TestimonialMain;
