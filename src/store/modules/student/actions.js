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
