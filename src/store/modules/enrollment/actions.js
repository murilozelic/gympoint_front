export function loadEnrollmentsRequest() {
  return {
    type: '@enrollment/LOAD_REQUEST',
  };
}

export function loadEnrollmentsSuccess(enrollments) {
  return {
    type: '@enrollment/LOAD_SUCCESS',
    payload: { enrollments },
  };
}

export function loadEnrollmentsFail() {
  return {
    type: '@enrollment/LOAD_FAIL',
  };
}

export function createEnrollmentRequest(enrollment) {
  return {
    type: '@enrollment/CREATE_REQUEST',
    payload: { enrollment },
  };
}

export function createEnrollmentSuccess(enrollment) {
  return {
    type: '@enrollment/CREATE_SUCCESS',
    payload: { enrollment },
  };
}

export function createEnrollmentFail() {
  return {
    type: '@enrollment/CREATE_FAIL',
  };
}

export function editEnrollmentRequest(enrollment) {
  return {
    type: '@enrollment/EDIT_REQUEST',
    payload: { enrollment },
  };
}

export function editEnrollmentSuccess(enrollment) {
  return {
    type: '@enrollment/EDIT_SUCCESS',
    payload: { enrollment },
  };
}

export function editEnrollmentFail() {
  return {
    type: '@enrollment/EDIT_FAIL',
  };
}

export function deleteEnrollmentRequest(id) {
  return {
    type: '@enrollment/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteEnrollmentSuccess(id) {
  return {
    type: '@enrollment/DELETE_SUCCESS',
    payload: { id },
  };
}

export function deleteEnrollmentFail() {
  return {
    type: '@enrollment/DELETE_FAIL',
  };
}
