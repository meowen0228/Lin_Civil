import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// MUI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
// ICON
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ListIcon from '@mui/icons-material/List';
// CSS
import './Home.scss';

export default function Home(props) {
  // style
  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const drawerWidth = 240;
  const activeStyle = {};
  // state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Ffun
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // data
  const sideList = [{ listName: '電纜涵洞', path: 'atest' }];
  const drawer = (
    <List>
      {sideList.map((v) => (
        <NavLink
          key={v.listName}
          to={v.path}
          className="customerNavLink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={handleDrawerToggle}
        >
          <ListItemButton>{v.listName}</ListItemButton>
        </NavLink>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
        }}
      >
        <Toolbar className="customerToolbar">
          <IconButton
            sx={{ fontSize: 30, display: { sm: 'none', xs: 'flex', color: 'white' } }}
            onClick={handleDrawerToggle}
          >
            <ListIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <NavLink to="/home">Civil Tools</NavLink>
          </Typography>
          {/* <IconButton sx={{ color: 'white' }}>
            <AccountBoxIcon />
          </IconButton> */}
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, color: 'white' }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <AccountBoxIcon sx={{ width: 32, height: 32 }}>M</AccountBoxIcon>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar />
          Profile
        </MenuItem>
        <MenuItem>
          <Avatar />
          My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '70px' },
        }}
        open
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{
          boxSizing: 'border-box',
          width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
          p: 3,
          margin: '0 0 0 auto',
        }}
      >
        <Toolbar />
        home
        <Outlet />
      </Box>
    </Box>
  );
}
