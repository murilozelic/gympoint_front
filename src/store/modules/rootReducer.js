import { combineReducers } from 'redux';

import auth from './auth/reducer';
import student from './student/reducer';
import gymplans from './gymplans/reducer';
import enrollment from './enrollment/reducer';

export default combineReducers({
  auth,
  student,
  gymplans,
  enrollment,
});
