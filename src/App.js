import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import connective from './images/connective.jpg';
import { useDispatch } from 'react-redux';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { getPosts } from './store/actions/posts';
import useStyles from './styles';
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const [currentId, setCurrentId] = useState(null);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h3" align="center" className={classes.heading}>
          Insta
        </Typography>
        <img
          src={connective}
          className={classes.image}
          alt="connective"
          style={{ width: '80px', height: '80px' }}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing="3"
            className={classes.mainContainer}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
