import * as ActionTypes from '../actionTypes';

export const Staffs = (state = {
    isLoading: false,
    errMess: null,
    staffs: [],
},action) =>{
    switch( action.type){
        case ActionTypes.INIT_STAFFS:
            return {...state, isLoading:false, errMess: null,staffs:action.payload }

        case ActionTypes.STAFF_LOADING:
            return {...state, isLoading:true, errMess: null,staffs:[] }

        case ActionTypes.STAFF_FAILED:
            return {...state, isLoading:false, errMess: action.payload,staffs:[] }

        case ActionTypes.ADD_STAFF:
                return {...state,staffs: [...state.staffs, action.payload]}
        default:
            return state;
    }
} 