import http from "../../helpers/http";

export const userDetail = (name) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SET_USER_MESSAGE",
        payload: "",
        message: "",
      });
      const response = await http().get(`users/${name}/repos`);
      dispatch({
        type: "GET_USER",
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
