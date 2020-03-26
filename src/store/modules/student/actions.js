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

export function editStudentSuccess(student) {
  return {
    type: '@student/EDIT_SUCCESS',
    payload: { student },
  };
}

export function deleteStudentRequest(id) {
  return {
    type: '@student/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteStudentsSuccess(id) {
  return {
    type: '@student/DELETE_SUCCESS',
    payload: { id },
  };
}
