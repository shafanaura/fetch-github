const initialState = {
  detail: {},
  data: [],
  message: "",
  errorMsg: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DETAIL": {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case "GET_USER_REPO": {
      return {
        ...state,
        data: action.payload,
      };
    }
    case "SET_USER_MESSAGE": {
      return {
        ...state,
        errorMsg: action.payload,
        data: [],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
