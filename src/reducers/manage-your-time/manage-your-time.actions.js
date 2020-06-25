import types from './manage-your-time.types';

export const addGoal = (item) => ({
  type: types.ADD_GOAL,
  payload: item,
});

export const toggleModal = {
  type: types.TOGGLE_MODAL,
};

export const searchGoal = (item) => ({
  type: types.SEARCH_GOAL,
  payload: item,
});
