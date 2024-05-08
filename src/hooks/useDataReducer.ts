import { useReducer } from "react";

interface DataState {
  data: any;
  error: boolean;
  loading: boolean;
}

interface DataAction {
  type: "LOADING" | "SUCCESS" | "ERROR";
  payload?: any;
}

const reducer = (state: DataState, action: DataAction) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      };
    case "SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case "ERROR":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

const initialState: DataState = {
  data: {},
  error: false,
  loading: false
};

const useDataReducer = () => {
  return useReducer(reducer, initialState);
};

export default useDataReducer;
