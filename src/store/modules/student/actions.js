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

export function editStudentRequest(id) {
  return {
    type: '@student/EDIT_REQUEST',
    payload: { id },
  };
}

export function editStudentSuccess(id) {
  return {
    type: '@student/EDIT_SUCCESS',
    payload: { id },
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
