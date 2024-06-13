"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/system";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import Logo from "../public/images/we-space-logo.png";
import JobSLogo from "../public/images/Jobslogo.webp"; // Add this line
import Divider from "@mui/material/Divider";
import Signup from "./Signup";
import { Box, Drawer, IconButton, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";

const pages = [
  "หน้าหลัก",
  "ค้นหาตัวตน",
  "สำรวจอาชีพ",
  "เรียนต่อ",
  "หาประสบการณ์",
  "หางานที่ใช่",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const CustomDivider = styled(Divider)({
  height: "40px",
  width: "1.5px",
  margin: "0 20px",
  backgroundColor: "rgba(203, 196, 200, 0.8)",
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [activePage, setActivePage] = React.useState<string>("หน้าหลัก");
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageClick = (page: string) => {
    setActivePage(page);
    handleCloseNavMenu();
  };

  const handleOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250, overflowY: 'auto', overflowX: 'hidden' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem
            button
            key={page}
            onClick={() => handlePageClick(page)}
            sx={{
              justifyContent: 'center',
              position: 'relative',
              '&:before': {
                content: '""',
                display: activePage === page ? 'block' : 'none',
                position: 'absolute',
                left: 0,
                width: '4px',
                height: '100%',
                backgroundColor: '#24D1E8',
              },
            }}
          >
            {page === "หางานที่ใช่" ? (
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography
                      component="span"
                      sx={{
                        textAlign: 'center',
                        color: activePage === page ? '#24D1E8' : '#0000008A',
                        fontSize: '20px',
                      }}
                    >
                      {page.split(" ")[0]}
                    </Typography>
                    <Image
                      src={JobSLogo}
                      alt="JobS"
                      width={30}
                      height={20}
                      style={{ marginLeft: '5px' }}
                    />
                  </Box>
                }
              />
            ) : (
              <ListItemText
                primary={page}
                primaryTypographyProps={{
                  style: {
                    textAlign: 'center',
                    color: activePage === page ? '#24D1E8' : '#0000008A',
                    fontSize: '20px',
                  },
                }}
              />
            )}
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: 'center' }}>
          <Button
            onClick={handleOpenSignUp}
            sx={{
              color: "#0000008A",
              width: "100%",
              textAlign: 'center',
              fontSize: '20px',
            }}
          >
            เข้าสู่ระบบ
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar sx={{ backgroundColor: "white", height: 65, boxShadow: 3}} position="static">
        <Container maxWidth="xl" sx={{ boxShadow: 3 }}>
          <Toolbar disableGutters>
            <Image src={Logo} alt="atritbute" width={65} height={50} />
            <CustomDivider orientation="vertical" sx={{ display: { xs: "none", md: "flex" } }} />
            <Typography
              variant="body1"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: "demi-bold",
                color: "#24D1E8",
                textDecoration: "none",
              }}
            >
              Work and Education Space for All
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: 'flex-end',
                  minWidth: "720px",
                  ":hover": { backgroundColor: "light-grey" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    variant="text"
                    sx={{
                      color: activePage === page ? "#24D1E8" : "#0000008A",
                      display: "block",
                      fontSize: "14px",
                      width: "100%",
                      padding: "0 0px 0 0px",
                      height: "65px",
                      letterSpacing: "1px",
                      position: "relative",
                      ":after": {
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: "4px",
                        backgroundColor: activePage === page ? "#24D1E8" : "transparent",
                        transition: "background-color 1s",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                      },
                    }}
                  >
                    {page === "หางานที่ใช่" ? (
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography
                          component="span"
                          sx={{
                            textAlign: 'center',
                            color: activePage === page ? '#24D1E8' : '#0000008A',
                            fontSize: '14px',
                          }}
                        >
                          {page.split(" ")[0]}
                        </Typography>
                        <Image
                          src={JobSLogo}
                          alt="JobS"
                          width={20}
                          height={14}
                          style={{ marginLeft: '5px' }}
                        />
                      </Box>
                    ) : (
                      page
                    )}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <Tooltip title="Open settings" sx={{ p: 0 }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer(true)}
                  color='default'
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, justifyContent: 'flex-end', minWidth: '80px' }}>
              <Tooltip title="Open settings" sx={{ p: 0 }}>
                <Button onClick={handleOpenSignUp} sx={{ color: "#0000008A", ":hover": { backgroundColor: "light-grey" }, height: "65px" }}>
                  เข้าสู่ระบบ
                </Button>
              </Tooltip>
            </Box>

          </Toolbar>
        </Container>
        <Signup open={openSignUp} onClose={handleCloseSignUp} />
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ boxShadow: 3 }}>
          {drawerList()}
        </Drawer>
      </AppBar>
      <Box
        sx={{
          filter: drawerOpen ? "blur(5px)" : "none",
          transition: "filter 0.3s",
        }}
      >
        {/* Add your page content here */}
      </Box>
    </>
  );
}

export default ResponsiveAppBar;
