import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  loadStudentsSuccess,
  deleteStudentSuccess,
  loadStudentSuccess,
} from './actions';

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

    yield put(deleteStudentSuccess(id));
  } catch (err) {
    toast.error(`Nao foi possivel deletar este usuario`);
  }
}

export function* loadStudentRequest({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `students`);

    const students = response.data;

    // filter retorna um array. Tem que pegar primeiro elemento do array
    const { name, email, age, weight, height } = students.filter(
      s => s.id === id
    )[0];

    const student = {
      id,
      name,
      email,
      age,
      weight: ((weight * 100) / 100).toFixed(1),
      height: (height / 100).toFixed(2),
    };

    yield put(loadStudentSuccess(student));

    history.push(`/students/${id}/edit`);
  } catch (err) {
    toast.error(`Nao foi possivel deletar este usuario`);
  }
}

export function* editStudentRequest({ payload }) {
  /* history.push(`/students/${id}/edit`); */
}

export default all([
  takeLatest('@student/LOAD_REQUEST', loadStudentsRequest),
  takeLatest('@student/EDIT_REQUEST', editStudentRequest),
  takeLatest('@student/DELETE_REQUEST', deleteStudentRequest),
  takeLatest('@student/SINGLE_LOAD_REQUEST', loadStudentRequest),
]);
