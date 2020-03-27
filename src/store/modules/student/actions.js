export function loadStudentsRequest() {
  return {
    type: '@student/LOAD_REQUEST',
  };
}

export function loadStudentsSuccess(students) {
  return {
    type: '@student/LOAD_SUCCESS',
    payload: { students },
  };
}

export function editStudentRequest(student) {
  return {
    type: '@student/EDIT_REQUEST',
    payload: { student },
  };
}

export function editStudentSuccess(student) {
  return {
    type: '@student/EDIT_SUCCESS',
    payload: { student },
  };
}

export function loadStudentRequest(id) {
  return {
    type: '@student/SINGLE_LOAD_REQUEST',
    payload: { id },
  };
}

export function loadStudentSuccess(student) {
  return {
    type: '@student/SINGLE_LOAD_SUCCESS',
    payload: { student },
  };
}

export function deleteStudentRequest(id) {
  return {
    type: '@student/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteStudentSuccess(id) {
  return {
    type: '@student/DELETE_SUCCESS',
    payload: { id },
  };
}

export function createStudentRequest(student) {
  return {
    type: '@student/CREATE_REQUEST',
    payload: { student },
  };
}

export function createStudentSuccess(student) {
  return {
    type: '@student/CREATE_SUCCESS',
    payload: { student },
  };
}
