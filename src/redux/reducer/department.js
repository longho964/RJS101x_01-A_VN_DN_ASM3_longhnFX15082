import * as ActionTypes from '../actionTypes';

export const Departments = (state = {
    isLoading: false,
    errMess: null,
    departments: [],
},action) =>{
    switch( action.type){
        case ActionTypes.INIT_DEPARTMENT:
            return {...state, isLoading:false, errMess: null,departments:action.payload }
        
        case ActionTypes.LOADING_DEPARTMEMT:
            return {...state, isLoading:true, errMess: null,departments:[] }

        case ActionTypes.DEPARTMENT_FAILED:
            return {...state, isLoading:false, errMess: action.payload,departments:[] }
        
        default:
            return state;
    }
} 