import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import "./../assets/css/appbar.css"
import FliqaIndia_Logo from "./../assets/images/landing/FliqaIndia_Logo.png";

const pages = ['Home', 'Services', 'Protfolio', 'Comuuity','Blog'];

const Mynavbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  return <>
  <Box  sx={{ flexGrow: 1, marginBottom:'6rem'}}>
      <AppBar className="appbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={FliqaIndia_Logo} alt=""  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} className='logo'/>
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

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box className="navbtn">
          <Button variant="contained" className='btn'>Login</Button> 
                <Button variant="contained" className='btn'>Signup</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </Box>
  </>
}

export default Mynavbar