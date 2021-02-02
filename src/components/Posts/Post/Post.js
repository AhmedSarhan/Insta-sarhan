import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../store/actions/posts';

import { ThumbUpAlt, Delete, MoreHoriz } from '@material-ui/icons';
export default function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: '#ffffff' }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => {
            return <span key={tag}>#{tag}</span>;
          })}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="caption">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAlt fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <Delete fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
}
