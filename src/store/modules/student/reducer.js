import { produce } from 'immer';

const INITIAL_STATE = {
  students: {
    data: [],
  },
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/LOAD_SUCCESS': {
        draft.students.data = action.payload.students;
        break;
      }
      case '@student/DELETE_SUCCESS': {
        draft.students.data = draft.students.data.filter(
          s => s.id !== action.payload.id
        );
        break;
      }

      default:
    }
  });
}
