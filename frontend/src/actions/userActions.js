import axios from "axios";
import {
  BATCHMATES_LIST_FAIL,
  BATCHMATES_LIST_REQUEST,
  BATCHMATES_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await axios.post(
      `/api/users/login`,
      { email, password },
      { header: { "Content-Type": "application/json" } }
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getBatchmates =
  (yearOfAdmission, yearOfPassingOut) => async (dispatch, getState) => {
    try {
      dispatch({ type: BATCHMATES_LIST_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/users/batchmates`,
        {
          yearOfAdmission,
          yearOfPassingOut,
        },
        config
      );

      dispatch({ type: BATCHMATES_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: BATCHMATES_LIST_FAIL,
        payload: error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
