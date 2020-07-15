import types from './manage-your-time.types';

export const toggleAddGoalModal = (props) => ({
  type: types.TOGGLE_ADD_GOAL_MODAL,
  payload: props,
});

export const togglePreviewGoalModal = (props) => ({
  type: types.TOGGLE_PREVIEW_GOAL_MODAL,
  payload: props,
});

export const searchRequest = (item) => ({
  type: types.SEARCH_REQUEST,
  payload: item,
});
