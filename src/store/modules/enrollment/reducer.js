import { produce } from 'immer';

const INITIAL_STATE = {
  enrollments: [],
  loading: false,
};

export default function enrollment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollment/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@enrollment/LOAD_SUCCESS': {
        draft.enrollments = action.payload.enrollments;
        draft.loading = false;
        break;
      }
      case '@enrollment/LOAD_FAIL': {
        draft.loading = false;
        break;
      }

      case '@enrollment/CREATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@enrollment/CREATE_SUCCESS': {
        draft.enrollments.push(action.payload.enrollment);
        draft.loading = false;
        break;
      }
      case '@enrollment/CREATE_FAIL': {
        draft.loading = false;
        break;
      }

      case '@enrollment/EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@enrollment/EDIT_SUCCESS': {
        const { id } = action.payload.enrollment;
        const enrollIndex = draft.enrollments.findIndex(e => e.id === id);

        draft.enrollments[enrollIndex] = action.payload.enrollment;
        draft.loading = false;
        break;
      }
      case '@enrollment/EDIT_FAIL': {
        draft.loading = false;
        break;
      }

      case '@enrollment/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@enrollment/DELETE_SUCCESS': {
        const { id } = action.payload;
        const enrollIndex = draft.enrollments.findIndex(e => e.id === id);

        draft.enrollments.splice(enrollIndex, 1);
        draft.loading = false;
        break;
      }
      case '@enrollment/DELETE_FAIL': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
