export function loadGymPlansRequest(page, resultsPerPage) {
  return {
    type: '@gymplans/LOAD_REQUEST',
    payload: { page, resultsPerPage },
  };
}
export function loadGymPlansSuccess(totalPlans, gymplans, page) {
  return {
    type: '@gymplans/LOAD_SUCCESS',
    payload: { totalPlans, gymplans, page },
  };
}
export function loadGymPlansFail() {
  return {
    type: '@gymplans/LOAD_FAIL',
  };
}

export function editGymPlansRequest(gymplan) {
  return {
    type: '@gymplans/EDIT_REQUEST',
    payload: { gymplan },
  };
}
export function editGymPlansSuccess(gymplan) {
  return {
    type: '@gymplans/EDIT_SUCCESS',
    payload: { gymplan },
  };
}
export function editGymPlansFail() {
  return {
    type: '@gymplans/EDIT_FAIL',
  };
}

export function deleteGymPlanRequest(id) {
  return {
    type: '@gymplans/DELETE_REQUEST',
    payload: { id },
  };
}
export function deleteGymPlanSuccess(id) {
  return {
    type: '@gymplans/DELETE_SUCCESS',
    payload: { id },
  };
}
export function deleteGymPlanFail() {
  return {
    type: '@gymplans/DELETE_FAIL',
  };
}

export function createGymPlanRequest(gymplan) {
  return {
    type: '@gymplans/CREATE_REQUEST',
    payload: { gymplan },
  };
}
export function createGymPlanSuccess(gymplan) {
  return {
    type: '@gymplans/CREATE_SUCCESS',
    payload: { gymplan },
  };
}
export function createGymPlanFail() {
  return {
    type: '@gymplans/CREATE_FAIL',
  };
}
