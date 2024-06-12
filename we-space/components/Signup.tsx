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
  FormControlLabel,
  Link,
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
  const [activeTab, setActiveTab] = useState("เข้าสู่ระบบ");
  const [checked, setChecked] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      PaperProps={{
        style: {
          width: "100%",
          height: "100%",
          maxWidth: "400px",
          padding: 0,
          overflow: "hidden",
          margin: 0,
        },
      }}
    >
      <Container className={style.popupFormContainer}>
        <IconButton
          onClick={onClose}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Image src={Logo} alt="We Space" width={165} height={135} />
        </Box>
        <Container
          className={style.tabs}
          style={{ paddingLeft: 10, paddingRight: 10, margin: 0 }}
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
                  className={style.textField}
                />
                <TextField
                  margin="dense"
                  id="password-login"
                  label="รหัสผ่าน"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  variant="standard"
                  className={style.textField}
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
                <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <Box>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="email-signup"
                      label="ชื่อผู้ใช้งาน (อีเมล)"
                      type="text"
                      fullWidth
                      variant="standard"
                      className={style.textField}
                    />
                    <TextField
                      margin="dense"
                      id="password-signup"
                      label="รหัสผ่าน"
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      variant="standard"
                      className={style.textField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <TextField
                    margin="dense"
                    id="cpassword-signup"
                    label="ยืนยันรหัสผ่าน"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    variant="standard"
                    className={style.textField}
                  />
                  <FormControlLabel
                    style={{ marginTop: "10px" }}
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleCheckboxChange}
                        name="acceptTerms"
                        color="primary"
                      />
                    }
                    label={
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{ fontSize: "12px" }}
                      >
                        การสมัครสมาชิกหมายถึงคุณยอมรับ{" "}
                        <Link target="_blank" href="https://drive.google.com/file/d/1bgjojmiy8rY7lwYCJW48WYNrcTZVAdOV/view " style={{ color: "#24D1E8" }} underline="none">
                          ข้อกำหนดและเงื่อนไขการใช้บริการ
                        </Link>
                        <Link target="_blank" href="https://drive.google.com/file/d/1pUAS63LPdwnKjXckfaI0dCZX7d-ha9Hs/view" style={{ color: "#24D1E8" }} underline="none">
                          {" "}
                          นโยบายความเป็นส่วนตัว{" "}
                        </Link>
                        และ
                        <Link target="_blank" href="https://drive.google.com/file/d/1GFjwk2auBBh-KnLN1sqIhsuo4B2-ghAu/view" style={{ color: "#24D1E8" }} underline="none">
                          นโยบายคุ้มครองข้อมูลส่วนบุคคล
                        </Link>{" "}
                        ของ WE Space
                      </Typography>
                    }
                  />
                </Container>
              </>
            )}
          </Box>
        </Container>

        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "10px 10px",
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: activeTab === "สมัครสมาชิก" && !checked ? "#ccc" : "#24D1E8",
              color: "white",
              borderRadius: "60px",
              height: "50px",
              cursor: activeTab === "สมัครสมาชิก" && !checked ? "default" : "pointer",
            }}
            onClick={activeTab === "สมัครสมาชิก" && !checked ? undefined : onClose}
          >
            {activeTab === "เข้าสู่ระบบ" ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
          </Button>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <SeparatorLine />
            หรือ
            <SeparatorLine />
          </Container>
          <Button
            variant="contained"
            style={{
                backgroundColor: activeTab === "สมัครสมาชิก" && !checked ? "#ccc" : "#05CC46",
              color: "white",
              marginTop: "12px",
              borderRadius: "60px",
              height: "50px",
              cursor: checked ? "pointer" : "default",
            }}
            onClick={checked ? onClose : undefined}
          >
            เข้าสู่ระบบด้วย Line
          </Button>
        </Container>
      </Container>
    </Dialog>
  );
};

export default Signup;
