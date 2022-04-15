import React, { useState, useEffect } from 'react';import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import memoriesLogo from '../../images/memories-Logo.png';
import memoriesText from '../../images/memories-Text.png';

import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    setUser(null);
    window.location.reload();
  };

  const token = user?.token;

  useEffect(() => {
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch({ type: 'LOGOUT' });
        setUser(null);
        window.location.reload();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, token, dispatch]);

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Link to='/'>
        <div className={classes.brandContainer}>
          <img className={classes.image} src={memoriesLogo} alt='icon' height='60' />
          <img className={classes.image} src={memoriesText} alt='icon' height='60' />
        </div>
      </Link>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>
              {user.result.name}
            </Typography>
            <Button variant='contained' className={classes.logout} color='secondary' onClick={() => logout()}>
              Logout
            </Button>
          </div>
        ) : (
          <Link to='/auth'>
            <Button variant='contained' color='primary'>
              Sign In
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
