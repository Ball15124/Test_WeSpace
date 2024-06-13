/* eslint-disable @next/next/no-img-element */
import { Container, Grid, Link, Typography } from "@mui/material";
import Self from "../../public/images/self.png";
import Occu from "../../public/images/occu.png";
import Exp from "../../public/images/exp.png";

// Span component for the underline
const Span = () => {
  return (
    <div
      style={{
        width: "40px",
        height: "10px",
        backgroundColor: "#24D1E8",
        marginTop: "12px",
        alignSelf: "center",
      }}
    />
  );
};


const FeatureCard = ({ image, title, subtitle }: { image: string, title: string, subtitle: string }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img src={image} alt={title} style={{ width: "200px", height: "200px" }} />
      <Typography variant="h2" style={{ marginTop: "10px", fontSize:"20px", fontWeight:"Bold" }}>{title}</Typography>
      <Link variant="body2" underline="none" style={{ color: "#24d1e8", fontSize:"15px"  }}>{subtitle}</Link>
    </div>
  );
};

function FeatureMain() {
  return (
    <section
      style={{
        display: "flex",
        width: "100%", 
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <h1 className="text-center text mt-4">อยากทำอะไร</h1>
        <Span />
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={4}>
            <FeatureCard
              image={Self.src}
              title="ค้นหาตัวตน"
              subtitle="คำถามช่วยสะท้อนตนเอง"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard
              image={Occu.src}
              title="สำรวจอาชีพ"
              subtitle="กับ 240+ อาชีพในระบบ"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard
              image={Exp.src}
              title="หาประสบการณ์"
              subtitle="กับกิจกรรมที่มีอยู่รอบตัว"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default FeatureMain;
