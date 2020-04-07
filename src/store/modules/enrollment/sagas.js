import { all, takeLatest, call, put } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  loadEnrollmentsSuccess,
  loadEnrollmentsFail,
  deleteEnrollmentSuccess,
  deleteEnrollmentFail,
} from './actions';

export function* loadEnrollments() {
  try {
    const response = yield call(api.get, 'enrollments');

    const enrollments = response.data;

    // Se retornou algo do backend:
    const formattedEnrollments = enrollments.map(e => ({
      ...e,
      start_date: format(parseISO(e.start_date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
      end_date: format(parseISO(e.end_date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    }));

    yield put(loadEnrollmentsSuccess(formattedEnrollments));
  } catch (err) {
    yield put(loadEnrollmentsFail());
    toast.error('Erro ao carregar matrículas');
  }
}

export function* createEnrollment() {
  try {
  } catch (err) {}
}

export function* editEnrollment() {
  try {
  } catch (err) {}
}

export function* deleteEnrollment({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `enrollments/${id}`);

    if (!response.data.error) {
      yield put(deleteEnrollmentSuccess(id));
      toast.success('Matrícula deletada com sucesso');
    }
  } catch (err) {
    yield put(deleteEnrollmentFail());
    console.tron.log(err.response);
    toast.error('Erro ao deletar matrícula');
  }
}

export default all([
  takeLatest('@enrollment/LOAD_REQUEST', loadEnrollments),
  takeLatest('@enrollment/CREATE_REQUEST', createEnrollment),
  takeLatest('@enrollment/EDIT_REQUEST', editEnrollment),
  takeLatest('@enrollment/DELETE_REQUEST', deleteEnrollment),
]);
