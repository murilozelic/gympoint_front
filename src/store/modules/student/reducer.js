import { produce } from 'immer';

const INITIAL_STATE = {
  students: [],
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/LOAD_SUCCESS': {
        draft.students = action.payload.students;
        break;
      }

      default:
    }
  });
}
