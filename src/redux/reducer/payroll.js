import * as ActionTypes from '../actionTypes';

export const Payroll = (state = {
    isLoading: false,
    errMess: null,
    payroll: [],
},action) =>{
    switch( action.type){
        case ActionTypes.INIT_PAYROLL:
            console.log('INIT_PAYROLL:', action.payload)
            return {...state, isLoading:false, errMess: null,payroll:action.payload }

        case ActionTypes.LOADING_PAYROLL:
            console.log('LOADING_PAYROLL:', action.payload)
            return {...state, isLoading:true, errMess: null,payroll:[] }

        case ActionTypes.PAYROLL_FAILED:
            console.log('PAYROLL_FAILED:', action.payload)
            return {...state, isLoading:false, errMess: action.payload,payroll:[] }
        
        default:
            return state;
    }
} 