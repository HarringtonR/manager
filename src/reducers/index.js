import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmplolyeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmplolyeeFormReducer
});
