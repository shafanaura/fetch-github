import http from "../../helpers/http";

export const userRepo = (name) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SET_USER_MESSAGE",
        payload: "",
        message: "",
      });
      const response = await http().get(`users/${name}`);
      dispatch({
        type: "GET_USER_REPO",
        payload: response.data,
      });
    } catch (err) {
      const { message } = err.response.data;
      dispatch({
        type: "SET_USER_MESSAGE",
        payload: message,
      });
    }
  };
};

export const userDetail = (name) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SET_USER_MESSAGE",
        payload: "",
        message: "",
      });
      const response = await http().get(`users/${name}`);
      dispatch({
        type: "GET_USER_DETAIL",
        payload: response.data,
      });
    } catch (err) {
      const { message } = err.response.data;
      dispatch({
        type: "SET_USER_MESSAGE",
        payload: message,
      });
    }
  };
};
