import { all, takeLatest, call, put } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  loadEnrollmentsSuccess,
  loadEnrollmentsFail,
  deleteEnrollmentSuccess,
  deleteEnrollmentFail,
  createEnrollmentSuccess,
  createEnrollmentFail,
  editEnrollmentSuccess,
  editEnrollmentFail,
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

export function* createEnrollment({ payload }) {
  try {
    const { enrollment } = payload;

    const response = yield call(api.post, 'enrollments', enrollment);

    const {
      id,
      start_date,
      active,
      end_date,
      price,
      Student,
      GymPlan,
    } = response.data;

    const newEnrollment = {
      id,
      active,
      start_date,
      end_date,
      price,
      Student,
      GymPlan,
    };

    yield put(createEnrollmentSuccess(newEnrollment));

    toast.success(`Matrícula criada com sucesso`);

    history.push(`/enrollments`);
  } catch (err) {
    yield put(createEnrollmentFail());

    toast.error(`Não foi possível criar cadastrar a matrícula`);
  }
}

export function* editEnrollment({ payload }) {
  try {
    const { id, student_id, plan_id, start_date } = payload.enrollment;

    const enrollmentToEdit = { student_id, plan_id, start_date };

    const response = yield call(api.put, `enrollments/${id}`, enrollmentToEdit);

    const { active, end_date, price, Student, GymPlan } = response.data;

    const edittedEnrollment = {
      id,
      active,
      start_date,
      end_date,
      price,
      Student,
      GymPlan,
    };

    yield put(editEnrollmentSuccess(edittedEnrollment));

    toast.success(`Matrícula atualizada com sucesso`);

    history.push(`/enrollments`);
  } catch (err) {
    yield put(editEnrollmentFail());
    toast.error(`Não foi possível editar esta matrícula`);
  }
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
