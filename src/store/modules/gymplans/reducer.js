import { produce } from 'immer';

const INITIAL_STATE = {
  gymplans: [],
  loading: false,
};

export default function gymplans(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@gymplans/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@gymplans/LOAD_SUCCESS': {
        draft.gymplans = action.payload.gymplans;
        draft.loading = false;
        break;
      }
      case '@gymplans/LOAD_FAIL': {
        draft.loading = false;
        break;
      }
      case '@gymplans/EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@gymplans/EDIT_SUCCESS': {
        const { id } = action.payload.gymplan;
        const planIndex = draft.gymplans.findIndex(gp => gp.id === id);

        draft.gymplans[planIndex] = action.payload.gymplan;
        draft.loading = false;
        break;
      }
      case '@gymplans/EDIT_FAIL': {
        draft.loading = false;
        break;
      }
      case '@gymplans/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@gymplans/DELETE_SUCCESS': {
        const { id } = action.payload;
        const planIndex = draft.gymplans.findIndex(gp => gp.id === id);

        draft.gymplans.splice(planIndex, 1);
        draft.loading = false;
        break;
      }
      case '@gymplans/DELETE_FAIL': {
        draft.loading = false;
        break;
      }
      case '@gymplans/CREATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@gymplans/CREATE_SUCCESS': {
        draft.gymplans.push(action.payload.gymplan);
        draft.loading = false;
        break;
      }
      case '@gymplans/CREATE_FAIL': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
