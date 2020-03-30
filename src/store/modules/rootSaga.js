import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import student from './student/sagas';
import gymplans from './gymplans/sagas';

export default function* rootSaga() {
  return yield all([auth, user, student, gymplans]);
}
