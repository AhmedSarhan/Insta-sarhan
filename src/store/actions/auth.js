import * as api from '../../api';
import * as actionTypes from '../utils/actionTypes';

export const googleLogIn = (result, token, history) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.AUTH,
      payload: { result, token },
    });
    await history.push('/');
  } catch (error) {
    console.log(error);
  }
};
export const signUp = (user, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(user);
    dispatch({
      type: actionTypes.AUTH,
      payload: data,
    });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (user, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(user);
    dispatch({
      type: actionTypes.AUTH,
      payload: data,
    });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
