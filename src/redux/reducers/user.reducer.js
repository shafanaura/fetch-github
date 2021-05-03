const initialState = {
  data: [],
  message: "",
  errorMsg: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER": {
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
