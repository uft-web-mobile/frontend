import {Link} from 'react-router-dom'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useAuth } from '../../context/auth';
import { SignOut, User } from '@phosphor-icons/react';

import './style.css'

export const NavBar = () => {
  
  const { Logout } = useAuth();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleProfile = () => {

  }
  
  const handleClose = () => {
    setAnchorElUser(null);
  };


  async function handleLogout() {
    Logout();
  }

  return (

    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Home
            </Typography>
          </Link>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/about">
              <Typography
               sx={{ 
                my: 3, 
                mr: 2,
                color: 'white', 
                display: { xs: 'none', md: 'flex' }, 
              }}
              >
                About
              </Typography>
            </Link>

            <Link to="/desafios">
              <Typography
               sx={{
                my: 3, 
                mr: 2,
                color: 'white', 
                display: { xs: 'none', md: 'flex' }, 
              }}
              >
                Desafios
              </Typography>
            </Link>

            <Link to="/desafios/10">
              <Typography
                sx={{
                  my: 3, 
                  mr: 2,
                  color: 'white', 
                  display: { xs: 'none', md: 'flex' }, 
                }}
              >
                Desafio 10
              </Typography>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfile}>
                <Link to='/perfil'>
                  <div className='menuItem'>
                    <User className='menuItem-icon' size={24} />
                    Perfil
                  </div>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <div className='menuItem'>
                  <SignOut className='menuItem-icon' size={24}/>
                  Logout
                </div>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}