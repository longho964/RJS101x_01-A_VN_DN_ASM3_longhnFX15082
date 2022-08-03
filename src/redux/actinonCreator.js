import * as ActionTypes from './actionTypes';

export const addNewStaff = (newstaff) => ({
    type: ActionTypes.ADD_STAFF,
    payload: newstaff
})

export const postNewStaff = (newstaff) => (dispatch) => {
   dispatch(addNewStaff(newstaff))
}