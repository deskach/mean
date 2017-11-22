import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form';
import surveyReducer from './surveys';

export default combineReducers({
  auth: authReducer,
  surveys: surveyReducer,
  form: formReducer,
});
