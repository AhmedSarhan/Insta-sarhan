import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import useStyles from './homeStyles';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../store/actions/posts';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  useEffect(() => {
    let userData = localStorage.getItem('profile');
    if (userData) {
      return;
    } else {
      history.push('/auth');
    }
  }, []);
  return (
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
  );
}
