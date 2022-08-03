import { STAFFS } from "../StaffListApp/staffs"
import * as ActionTypes from './actionTypes';

export const innitialState = {
    staffs: STAFFS
}

export const reducer = (state = innitialState, action ) => {
    switch(action.type) {
        case ActionTypes.ADD_STAFF:
            console.log('ADD_STAFF:', action.payload)
            return {...state,staffs: [...state.staffs, action.payload]}
        default:
            return state

    }
}