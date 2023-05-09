import { LEADERS } from '../shared/leaders';
import * as ActionTypes from './ActionTypes';

//new state
const initialState  = {
    isLoading: false,
    errMess: null,
    leaders: []
}

//REDUCER
export const Leaders = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADER: 
        return {
            ...state,
            isLoading: false,
            errMess: null,
            leaders: action.payload,
        };
        


    
        default: {
        return state;
        }
    }
};
