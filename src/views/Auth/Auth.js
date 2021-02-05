import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { LockOutlined } from '@material-ui/icons';
import Input from '../../components/CustomInput/Input';
import Icon from '../../components/CustomInput/Icon';
// import * as actionTypes from '../../store/utils/actionTypes';
import { useHistory } from 'react-router-dom';
import { signUp, signIn, googleLogIn } from '../../store/actions/auth';
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
export default function Auth() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPass, setShowPass] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState(initialState);
  useEffect(() => {
    let userData = localStorage.getItem('profile');
    if (!userData) {
      return;
    } else {
      history.push('/');
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    if (isSignUp) {
      dispatch(signUp(userData, history));
    } else {
      dispatch(signIn(userData, history));
    }
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleShowPass = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    dispatch(googleLogIn(result, token, history));
  };
  const googleFailure = (error) => {
    console.log(error);
    alert('Google Sign in failed, try again later');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignUp ? `Sing Up` : `Sign In`}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  autoFocus
                  half
                  type="text"
                  handleChange={handleChange}
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  half
                  type="text"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={!showPass ? 'password' : 'text'}
              handleShowPass={handleShowPass}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type={!showPass ? 'password' : 'text'}
                handleShowPass={handleShowPass}
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId="142791182489-7j3bk2oo33nd004ub6ala8hmtm7j1ual.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                variant="contained"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
              >
                LogIn with Google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-start">
            <Grid item>
              <Button
                onClick={() => {
                  setIsSignUp((prevIsSignUp) => !prevIsSignUp);
                  setShowPass(false);
                }}
              >
                {isSignUp
                  ? 'Already have an account? Sign In '
                  : 'New Here? Create an account'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
