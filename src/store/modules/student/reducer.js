import { produce } from 'immer';

const INITIAL_STATE = {
  student: {},
  students: [],
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/LOAD_SUCCESS': {
        draft.students = action.payload.students;
        break;
      }
      case '@student/DELETE_SUCCESS': {
        draft.students = draft.students.filter(s => s.id !== action.payload.id);
        break;
      }
      case '@student/SINGLE_LOAD_SUCCESS': {
        draft.student = action.payload.student;
        break;
      }

      default:
    }
  });
}
