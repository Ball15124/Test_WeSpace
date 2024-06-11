import * as React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../public/images/we-space-logo.png";
import Image from "next/image";
import {
  Box,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
} from "@mui/material";
import style from "../styles/signup.module.css";
import CloseIcon from "@mui/icons-material/Close";

interface SignupProps {
  open: boolean;
  onClose: () => void;
}

const SeparatorLine = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 1,
        backgroundColor: "lightgray",
        margin: "12px 0",
      }}
    />
  );
};

const Signup: React.FC<SignupProps> = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("เข้าสู่ระบบ"); // Set default active tab to "เข้าสู่ระบบ"

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <CssBaseline />
      <IconButton onClick={onClose} style={{ justifyContent: "end" }}>
        <CloseIcon />
      </IconButton>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          borderRadius: "30px",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <Image src={Logo} alt="We Space" width={165} height={138} />
        </Box>
        <Container
          className={style.tabs}
          style={{ paddingLeft: 50, paddingRight: 50 }}
        >
          <Typography
            className={`${style.tab} ${
              activeTab === "เข้าสู่ระบบ" ? style.active : ""
            }`}
            onClick={() => setActiveTab("เข้าสู่ระบบ")}
          >
            เข้าสู่ระบบ
          </Typography>
          <Typography
            className={`${style.tab} ${
              activeTab === "สมัครสมาชิก" ? style.active : ""
            }`}
            onClick={() => setActiveTab("สมัครสมาชิก")}
          >
            สมัครสมาชิก
          </Typography>
        </Container>
        <Container style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Box>
            {activeTab === "เข้าสู่ระบบ" ? (
              <>
                <TextField
                  autoFocus
                  margin="dense"
                  id="email-login"
                  label="ชื่อผู้ใช้งาน (อีเมล)"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  margin="dense"
                  id="password-login"
                  label="รหัสผ่าน"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "20px",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="black"
                    style={{ cursor: "pointer" }}
                    onClick={handleForgotPassword}
                  >
                    ลืมรหัสผ่าน?
                  </Typography>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email-login"
                    label="ชื่อผู้ใช้งาน (อีเมล)"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                  <TextField
                    margin="dense"
                    id="password-login"
                    label="รหัสผ่าน"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    variant="standard"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <TextField
                  autoFocus
                  margin="dense"
                  id="cpassword-login"
                  label="ยืนยันรหัสผ่าน"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  variant="standard"
                />
              </>
            )}
          </Box>
          {/* <Container style={{ display: "flex", flexDirection: "row" }}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="" />
            <p style={{ fontSize: "12px" }}>
              การสมัครสมาชิกหมายถึงคุณยอมรับ
            </p>
            <p style={{ fontSize: "12px" }}>การสมัครสมาชิกหมายถึงคุณยอมรับ</p>
          </Container> */}
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "10px",
            padding: "10px 10px",
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "#24D1E8",
              color: "white",
              borderRadius: "60px",
              height: "50px",
            }}
            onClick={onClose}
          >
            {activeTab === "เข้าสู่ระบบ" ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
          </Button>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "13px",
            }}
          >
            <SeparatorLine />
            หรือ
            <SeparatorLine />
          </Container>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#05CC46",
              color: "white",
              marginTop: "16px",
              borderRadius: "60px",
              height: "50px",
            }}
            onClick={onClose}
          >
            เข้าสู่ระบบด้วย Line
          </Button>
        </Container>
      </Container>
    </Dialog>
  );
};

export default Signup;
