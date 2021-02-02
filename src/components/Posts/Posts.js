import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';

export default function Posts({ setCurrentId }) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      {posts.length ? (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing="3"
        >
          {posts.map((post) => {
            return (
              <Grid item key={post._id} xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
