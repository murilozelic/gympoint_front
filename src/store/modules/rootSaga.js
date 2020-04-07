import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import student from './student/sagas';
import gymplans from './gymplans/sagas';
import enrollment from './enrollment/sagas';

export default function* rootSaga() {
  return yield all([auth, student, gymplans, enrollment]);
}
