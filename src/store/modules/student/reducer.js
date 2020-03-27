import { produce } from 'immer';

const INITIAL_STATE = {
  student: {},
  students: [],
  loading: false,
  searchStudents: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/LOAD_SUCCESS': {
        draft.students = action.payload.students;
        draft.loading = false;
        draft.searchStudents = false;
        break;
      }
      case '@student/DELETE_REQUEST': {
        draft.students = draft.students.filter(s => s.id !== action.payload.id);
        draft.loading = true;
        break;
      }
      case '@student/DELETE_SUCCESS': {
        draft.students = draft.students.filter(s => s.id !== action.payload.id);
        draft.loading = false;
        break;
      }
      case '@student/SINGLE_LOAD_REQUEST': {
        draft.student = action.payload.student;
        draft.loading = true;
        break;
      }
      case '@student/SINGLE_LOAD_SUCCESS': {
        draft.student = action.payload.student;
        draft.loading = false;
        break;
      }
      case '@student/CREATE_REQUEST': {
        draft.students.push(action.payload.student);
        draft.loading = true;
        break;
      }
      case '@student/CREATE_SUCCESS': {
        draft.students.push(action.payload.student);
        draft.loading = false;
        break;
      }
      case '@student/SEARCH_REQUEST': {
        draft.searchStudents = true;
        break;
      }
      case '@student/SEARCH_SUCCESS': {
        draft.students = action.payload.students;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
