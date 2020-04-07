import { produce } from 'immer';

const INITIAL_STATE = {
  plans: [],
  page: 1,
  totalPlans: 0,
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
        draft.plans = action.payload.gymplans;
        draft.page = action.payload.page;
        draft.totalPlans = action.payload.totalPlans;
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
        const planIndex = draft.plans.findIndex(gp => gp.id === id);

        draft.plans[planIndex] = action.payload.gymplan;
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
        const planIndex = draft.plans.findIndex(gp => gp.id === id);
        draft.plans.splice(planIndex, 1);

        draft.totalPlans -= 1;
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
        draft.plans.push(action.payload.gymplan);
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
