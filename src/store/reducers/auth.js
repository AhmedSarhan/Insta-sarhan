import * as actionTypes from '../utils/actionTypes';

export default (authData = {}, action) => {
  switch (action.type) {
    case actionTypes.AUTH: {
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return action?.payload;
    }
    case actionTypes.LOGOUT: {
      localStorage.removeItem('profile');
      return (authData = null);
    }
    default:
      return authData;
  }
};
