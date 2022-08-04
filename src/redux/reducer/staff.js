import * as ActionTypes from '../actionTypes';

export const Staffs = (state = {
    isLoading: false,
    errMess: null,
    staffs: [],
},action) =>{
    switch( action.type){
        case ActionTypes.INIT_STAFFS:
            console.log('INIT_STAFFS:', action.payload)
            return {...state, isLoading:false, errMess: null,staffs:action.payload }

        case ActionTypes.STAFF_LOADING:
            console.log('STAFF_LOADING:', action.payload)
            return {...state, isLoading:true, errMess: null,staffs:[] }

        case ActionTypes.STAFF_FAILED:
            console.log('STAFF_FAILED:', action.payload)
            return {...state, isLoading:false, errMess: action.payload,staffs:[] }
        
        default:
            return state;
    }
} 