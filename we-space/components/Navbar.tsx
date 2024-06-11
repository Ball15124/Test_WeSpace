"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import Logo from '../public/images/we-space-logo.png';
import Divider from '@mui/material/Divider';
import { Kanit } from 'next/font/google';

const pages = ['หน้าหลัก', 'ค้นหาตัวตน', 'สำรวจอาชีพ', 'เรียนต่อ', 'หาประสบการณ์', 'หางานที่ใช่',];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const CustomDivider = styled(Divider)({
  height: '40px',
  width: '1.8px',
  margin: '0 20px',
  backgroundColor: 'rgba(203, 196, 200, 0.8)',
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [activePage, setActivePage] = React.useState<string>('หน้าหลัก');

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

  return (
    <AppBar sx={{ backgroundColor: 'white' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={Logo} alt='atritbute' width={70} height={50} />
          <CustomDivider orientation="vertical" />
          <Typography
            variant='body2'
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 'bold',
              color: '#24D1E8',
              textDecoration: 'none',
            }}
          >
            Work and Education Space for All
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end', } }}>
            <Box sx={{ display: 'flex', width: '100%', maxWidth: '650px', justifyContent: 'flex-end', height: '70px', ':hover' : {backgroundColor: 'light-grey'} }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  variant='text'
                  sx={{
                    // backgroundColor: 'pink',
                    color: activePage === page ? '#24D1E8' : '#0000008A',
                    display: 'block',
                    fontSize: 14,
                    position: 'relative',
                    ':after': {
                      content: '""',
                      display: 'block',
                      width: '100%',
                      height: '4px',
                      backgroundColor: activePage === page ? '#24D1E8' : 'transparent',
                      transition: 'background-color 1s',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                    },

                  }}
                >
                  
                  {page}
                  
                </Button>
              ))}
            </Box>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
