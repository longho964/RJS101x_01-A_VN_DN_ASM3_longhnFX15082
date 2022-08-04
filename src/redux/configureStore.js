import { legacy_createStore as createStore,applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Staffs } from './reducer/staff';
import { Departments } from './reducer/department';
import { Payroll } from './reducer/payroll';
import logger from 'redux-logger';

export const configureStore = () => {
  const rootReducer = combineReducers({
    staffs: Staffs,
    departments: Departments,
    payroll: Payroll
  })
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,logger)));
  return store;
};
