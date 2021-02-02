import * as api from '../../api';
import * as actionTypes from '../utils/actionTypes';
// Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: actionTypes.FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({
      type: actionTypes.CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const editPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.editPost(id, post);

    dispatch({
      type: actionTypes.UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  await api.deletePost(id);
  try {
    dispatch({
      type: actionTypes.DELETE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
export const likePost = (id) => async (dispatch) => {
  const { data } = await api.likePost(id);

  try {
    dispatch({
      type: actionTypes.LIKE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
