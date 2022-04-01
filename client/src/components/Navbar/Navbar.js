import React from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import memories from '../../images/memories.png';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Link to='/'>
        <div className={classes.brandContainer}>
          <Typography className={classes.heading} variant='h2' align='center'>
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt='icon'
            height='60'
          />
        </div>
      </Link>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>
              {user.result.name}
            </Typography>
            <Button
              variant='contained'
              className={classes.logout}
              color='secondary'
            >
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
