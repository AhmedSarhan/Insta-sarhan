import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import connective from '../../images/connective.jpg';
import useStyles from './styles';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/utils/actionTypes';
import decode from 'jwt-decode';
export default function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  useEffect(() => {
    const token = user?.token;

    // JWT ...
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logOutHandler();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  const logOutHandler = () => {
    dispatch({ type: actionTypes.LOGOUT });
    history.push('/auth');
    setUser(null);
  };
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          variant="h3"
          align="center"
          className={classes.heading}
        >
          InstaSarhan
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <div className={classes.account}>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                className={classes.logOut}
                color="secondary"
                onClick={logOutHandler}
              >
                Sign Out
              </Button>
            </div>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
