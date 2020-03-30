import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import student from './student/reducer';
import gymplans from './gymplans/reducer';

export default combineReducers({
  auth,
  user,
  student,
  gymplans,
});
