import { GET_SMURF, POST_SMURF } from "../actions/smurfsActions";

export const initialState = {
  smurfs: []
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    // need cases for LOADING and for ERROR
    case GET_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case POST_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
