import { baseUrl1,baseUrlDepartment,baseUrlPayroll } from "../server/hostlink";
import * as ActionTypes from "./actionTypes";

// export const addNewStaff = (newstaff) => ({
//   type: ActionTypes.ADD_STAFF,
//   payload: newstaff,
// });


// action to staffs
export const initStaffs = (staffs) => ({
    type: ActionTypes.INIT_STAFFS,
    payload: staffs,
  });

export const staffLoading = () => ({
  type: ActionTypes.STAFF_LOADING,
});

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffLoading());
  return fetch(baseUrl1)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let error = new Error(
          "Error" + response.status + ":" + response.statusText
        );
        error.response = response;
        throw error;
      }
    })
    .then((response) => response.json())
    .then((response) => {
        console.log('response',response)
        dispatch(initStaffs(response))
    })
    .catch((error) => alert(" SOS..." + error.message));
};


//action to department
export const initDepartment = (departments) => ({
    type: ActionTypes.INIT_DEPARTMENT,
    payload: departments,
  });

export const departmentLoading = () => ({
  type: ActionTypes.LOADING_DEPARTMEMT,
});

export const fetchDepartment = () => (dispatch) => {
  dispatch(departmentLoading());
  return fetch(baseUrlDepartment)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let error = new Error(
          "Error" + response.status + ":" + response.statusText
        );
        error.response = response;
        throw error;
      }
    })
    .then((response) => response.json())
    .then((response) => {
        console.log('response',response)
        dispatch(initDepartment(response))
    })
    .catch((error) => alert(" SOS..." + error.message));
};

// action to payroll
export const initPayroll = (payroll) => ({
    type: ActionTypes.INIT_PAYROLL,
    payload: payroll,
  });

export const PayrollLoading = () => ({
  type: ActionTypes.LOADING_PAYROLL,
});

export const fetchPayroll = () => (dispatch) => {
  dispatch(PayrollLoading());
  return fetch(baseUrlPayroll)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let error = new Error(
          "Error" + response.status + ":" + response.statusText
        );
        error.response = response;
        throw error;
      }
    })
    .then((response) => response.json())
    .then((response) => {
        console.log('response',response)
        dispatch(initPayroll(response))
    })
    .catch((error) => alert(" SOS..." + error.message));
};