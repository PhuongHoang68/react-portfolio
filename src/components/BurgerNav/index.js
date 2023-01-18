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
import MenuItem from '@mui/material/MenuItem';
import LinkedIn from "../../assets/linkedIn/linkedIn.jpg"
import {Link} from "react-router-dom";
// import AdbIcon from '@mui/icons-material/Adb';

const pages = [
  {title: 'Home', url: '/home'},
  {title: 'Projects', url: '/projects'}, 
  {title: 'Resume', url: 'https://docdro.id/wrrTUVH', isExternalLink: true}
];

//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MyMenuItem({title, url, onClick, isExternalLink= false}) {
  const style = {textDecoration: "none", color: "black", fontSize: "12px" }
  return (
    <MenuItem onClick={onClick}>
      <Typography textAlign="center">
        {
          isExternalLink 
          ? <a href={url} style={style} target="_blank">{title}</a>
          : <Link style={style} to={url}>{title}</Link>
        }
        </Typography>
    </MenuItem>
  )
}

function MyAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static" sx={{backgroundColor: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          

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
              {pages.map((page, index) => 
                <MyMenuItem key={`${page.title}-${index}`} onClick={handleOpenUserMenu} {...page} />
              )}
            </Menu>
          </Box>
           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />  */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
          </Typography> */}
          <Box sx={{ flexGrow: 1, alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => 
                <MyMenuItem key={`${page.title}-${index}`} onClick={handleCloseNavMenu} {...page} />
              )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
          <a href="https://www.linkedin.com/in/phuong-hoang-a0b4901a5/"
                        target="_blank"
                        rel="noreferrer"
                    >
                <Avatar alt="Phuong Hoang" src={LinkedIn} sx={{ width: 40, height: 40 }} />
          </a>
              
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>

      </Container>
    </AppBar>
  );
}
export default MyAppBar;
