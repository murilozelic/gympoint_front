import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  loadStudentsSuccess,
  deleteStudentSuccess,
  loadStudentSuccess,
  editStudentSuccess,
  createStudentSuccess,
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
  try {
    const { id } = payload;

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
    toast.error(`Não foi possível carregar este usuário`);
  }
}

export function* editStudentRequest({ payload }) {
  try {
    const { id, name, email, age, weight, height } = payload.student;

    const response = yield call(api.put, `students/${id}`, {
      name,
      email,
      age,
      weight: weight.toFixed(0),
      height: height * 100,
    });

    yield put(editStudentSuccess(response.data));

    toast.success(`Usuário atualizado com sucesso`);

    history.push(`/students`);
  } catch (err) {
    toast.error(`Não foi possível editar este usuário`);
  }
}

export function* createStudentsRequest({ payload }) {
  try {
    const { name, email, age, weight, height } = payload.student;

    const student = {
      name,
      email,
      age,
      weight: weight.toFixed(0),
      height: height * 100,
    };

    yield call(api.post, 'students', student);

    yield put(createStudentSuccess(student));

    toast.success(`Usuário criado com sucesso`);

    history.push(`/students`);
  } catch (err) {
    toast.error(`Não foi possível editar este usuário`);
  }
}

export default all([
  takeLatest('@student/LOAD_REQUEST', loadStudentsRequest),
  takeLatest('@student/EDIT_REQUEST', editStudentRequest),
  takeLatest('@student/DELETE_REQUEST', deleteStudentRequest),
  takeLatest('@student/SINGLE_LOAD_REQUEST', loadStudentRequest),
  takeLatest('@student/CREATE_REQUEST', createStudentsRequest),
]);
