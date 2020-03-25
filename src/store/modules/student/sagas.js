import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { loadStudentsSuccess } from './actions';

export function* loadStudentsRequest() {
  try {
    const response = yield call(api.get, 'students');

    const students = response.data;

    if (students) yield put(loadStudentsSuccess(students));
  } catch (err) {
    toast.error('Nao foi possivel carregar os usuarios');
    history.push('/');
  }
}

export default all([takeLatest('@student/LOAD_REQUEST', loadStudentsRequest)]);
