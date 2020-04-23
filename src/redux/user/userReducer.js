import {
  FEATCH_USER_REQUEST,
  FEATCH_USER_SUCCESS,
  FEATCH_USER_FAILURE,
} from "./userActionType";

const initialState = {
  loding: false,
  users: [],
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEATCH_USER_REQUEST:
      return {
        ...state,
        loding: true,
      };
    case FEATCH_USER_SUCCESS:
      return {
        loding: false,
        data: action.payload,
        error: "",
      };
    case FEATCH_USER_FAILURE:
      return {
        loding: false,
        user: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
