import {
  BATCHMATES_LIST_FAIL,
  BATCHMATES_LIST_REQUEST,
  BATCHMATES_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const getBatchmatesReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case BATCHMATES_LIST_REQUEST:
      return { loading: true };

    case BATCHMATES_LIST_SUCCESS:
      return { loading: false, batchmates: action.payload };

    case BATCHMATES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
