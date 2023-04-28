import { LEADERS } from '../shared/leaders';
import * as ActionTypes from './ActionTypes';


export const Leaders = (state = LEADERS, action) => {
    switch (action.type) {
    case ActionTypes.ADD_LEADER:
    var leader = action.payload;
    leader.id = state.length;
    //leader.abbr = state.length;
    //leader.featured = state.length;
    console.log("Leader:", leader);
    return state.concat(leader);
    default:
    return state;
    }
};
