import * as ActionTypes from '../actionTypes';

export const Departments = (state = {
    isLoading: false,
    errMess: null,
    departments: [],
},action) =>{
    switch( action.type){
        case ActionTypes.INIT_DEPARTMENT:
            console.log('INIT_DEPARTMENT:', action.payload)
            return {...state, isLoading:false, errMess: null,departments:action.payload }
        
        case ActionTypes.LOADING_DEPARTMEMT:
            console.log('LOADING_DEPARTMEMT:', action.payload)
            return {...state, isLoading:true, errMess: null,departments:[] }

        case ActionTypes.DEPARTMENT_FAILED:
            console.log('DEPARTMENT_FAILED:', action.payload)
            return {...state, isLoading:false, errMess: action.payload,departments:[] }
        
        default:
            return state;
    }
} 