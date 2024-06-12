import { Button, Container } from "@mui/material";
import Image from "next/image";
import Hero from "../../public/images/landing.png";

function HeroMain() {
  return (
    <section
      className="hero-main"
      style={{
        width: "100%",
        height: "100vh", // Set the height to fit the viewport
        display: "flex", // Use Flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        background: "linear-gradient(30deg, #24d1e8, #fff 30%)", // Radial gradient for bottom left
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        //   margin: "5px",
        }}
      >
        <div
          className="hero-main__content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "45%",
            margin: "5%",
          }}
        >
          <h1
            className="hero-main__title"
            style={{ color: "#24D1E8", fontSize: "70px" }}
          >
            We Space
          </h1>
          <h2
            className="hero-main__description"
            style={{ fontSize: "30px", margin: "0" }}
          >
            Live a meaningful life
          </h2>
          <p style={{ marginTop: "5px", marginBottom: "30px" }}>
            เราจะช่วยให้คุณได้รู้จักตนเอง รู้จักอาชีพและ
            <br />
            ออกแบบเส้นทางเดินในชีวิต
          </p>
          <Button
            style={{
              backgroundColor: "#FAD456",
              width: "200px",
              height: "60px",
              borderRadius: "30px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              color: "#FFFFFF",
              fontSize: "16px",
              alignSelf: "center",
            }}
          >
            เริ่มต้น
          </Button>
        </div>
        <div style={{ maxWidth: "55%", marginRight:"35px" }}>
          <Image
            src={Hero}
            alt="Hero image"
            style={{ width: "700px", height: "auto", objectFit: "contain" }}
          />
        </div>
      </Container>
    </section>
  );
}
export default HeroMain;
