import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { loadStudentsSuccess, deleteStudentsSuccess } from './actions';

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

export function* deleteStudentRequest({ payload }) {
  const { id } = payload;

  try {
    yield call(api.delete, `students/${id}`);

    yield put(deleteStudentsSuccess(id));
  } catch (err) {
    toast.error(`Nao foi possivel deletar este usuario`);
  }
}

export function editStudentRequest({ payload }) {
  const { id } = payload;

  history.push(`/students/${id}/edit`);
}

export default all([
  takeLatest('@student/LOAD_REQUEST', loadStudentsRequest),
  takeLatest('@student/EDIT_REQUEST', editStudentRequest),
  takeLatest('@student/DELETE_REQUEST', deleteStudentRequest),
]);
