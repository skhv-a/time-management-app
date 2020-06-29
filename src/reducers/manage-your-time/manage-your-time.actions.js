import types from './manage-your-time.types';

export const addGoal = (item) => ({
  type: types.ADD_GOAL,
  payload: item,
});

export const toggleModal = (props) => ({
  type: types.TOGGLE_MODAL,
  payload: props,
});

export const searchGoal = (item) => ({
  type: types.SEARCH_GOAL,
  payload: item,
});

export const done = (item) => ({
  type: types.DONE,
  payload: item,
});

export const remove = (item) => ({
  type: types.REMOVE,
  payload: item,
});
