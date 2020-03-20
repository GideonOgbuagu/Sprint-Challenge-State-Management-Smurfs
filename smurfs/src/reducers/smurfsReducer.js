import { GET_SMURF } from '../actions/smurfsActions';

export const initialState = {
   smurfs: [],
}

export const smurfsReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_SMURF: 
        return {
            ...state,
            smurfs: action.payload
        }
        default: 
            return state;
            
    }
}