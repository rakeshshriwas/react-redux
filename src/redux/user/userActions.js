// Action Creator

import {
  FEATCH_USER_REQUEST,
  FEATCH_USER_SUCCESS,
  FEATCH_USER_FAILURE,
} from "./userActionType";

import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: FEATCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FEATCH_USER_SUCCESS,
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FEATCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => dispatch(fetchUserFailure(error.message)));
  };
};
