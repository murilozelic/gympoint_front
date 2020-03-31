import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  loadGymPlansSuccess,
  loadGymPlansFail,
  editGymPlansSuccess,
  editGymPlansFail,
  deleteGymPlanSuccess,
  deleteGymPlanFail,
  createGymPlanSuccess,
  createGymPlanFail,
} from './actions';

export function* gymplansLoadRequest() {
  try {
    const response = yield call(api.get, 'gymplans');

    if (response.data.status) {
      yield put(loadGymPlansSuccess([]));
    } else {
      const gymplans = response.data;

      yield put(loadGymPlansSuccess(gymplans));
    }
  } catch (err) {
    yield put(loadGymPlansFail());
    toast.error('Erro ao carregar os planos');
  }
}

export function* gymplansEditRequest({ payload }) {
  try {
    const { gymplan } = payload;

    const response = yield call(api.put, `gymplans/${gymplan.id}`, gymplan);

    if (!response.data.error) {
      const { gymPlan } = response.data;

      yield put(editGymPlansSuccess(gymPlan));

      history.push('/gymplans');

      toast.success('Plano editado com sucesso');
    }
  } catch (err) {
    yield put(editGymPlansFail());
    toast.error('Erro ao editar o plano de academia');
  }
}

export function* gymplansDeleteRequest({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `gymplans/${id}`);

    if (!response.data.error) {
      yield put(deleteGymPlanSuccess(id));
      toast.success('Plano deletado com sucesso');
    }
  } catch (err) {
    yield put(deleteGymPlanFail());
    toast.error('Erro ao deletar o plano de academia');
  }
}

export function* gymplansCreateRequest({ payload }) {
  try {
    const { gymplan } = payload;

    const response = yield call(api.post, `gymplans`, gymplan);

    if (!response.data.error) {
      const { newPlan } = response.data;

      yield put(createGymPlanSuccess(newPlan));

      history.push('/gymplans');

      toast.success('Plano criado com sucesso');
    }
  } catch (err) {
    yield put(createGymPlanFail());
    toast.error('Erro ao criar o plano de academia');
  }
}

export default all([
  takeLatest('@gymplans/LOAD_REQUEST', gymplansLoadRequest),
  takeLatest('@gymplans/DELETE_REQUEST', gymplansDeleteRequest),
  takeLatest('@gymplans/EDIT_REQUEST', gymplansEditRequest),
  takeLatest('@gymplans/CREATE_REQUEST', gymplansCreateRequest),
]);
