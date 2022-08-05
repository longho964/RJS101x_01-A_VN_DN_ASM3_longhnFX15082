import * as ActionTypes from '../actionTypes';

export const Payroll = (state = {
    isLoading: false,
    errMess: null,
    payroll: [],
},action) =>{
    switch( action.type){
        case ActionTypes.INIT_PAYROLL:
            return {...state, isLoading:false, errMess: null,payroll:action.payload }

        case ActionTypes.LOADING_PAYROLL:
            return {...state, isLoading:true, errMess: null,payroll:[] }

        case ActionTypes.PAYROLL_FAILED:
            return {...state, isLoading:false, errMess: action.payload,payroll:[] }
        
        default:
            return state;
    }
} 