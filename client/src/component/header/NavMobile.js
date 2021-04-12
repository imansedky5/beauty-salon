import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useHistory } from 'react-router-dom';

import useStyles from './style';

function NavMobile() {
  const classes = useStyles();
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };
  const logOutClick = () => {
    setIsAuth(false);
  };

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="secondary"
        aria-label="menu"
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        classes={{ paper: classes.menuPaper }}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleMenuClick('/services')}>
          Services
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick('/products')}>
          Products
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick('/blogs')}>Blogs</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/contact')}>Contact</MenuItem>
        <MenuItem onClick={() => handleMenuClick('/cart')}>Cart</MenuItem>
        {isAuth && (
          <MenuItem
            classes={{ root: 'logoutMobile' }}
            className={classes.logoutMobile}
            onClick={() => logOutClick()}
          >
            Logout
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}

export default NavMobile;