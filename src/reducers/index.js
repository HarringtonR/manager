import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmplolyeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmplolyeeFormReducer,
  employees: EmployeeReducer
});
