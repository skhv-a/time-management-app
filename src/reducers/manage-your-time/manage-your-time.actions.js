import types from './manage-your-time.types';

export const addGoal = (item) => ({
  type: types.ADD_GOAL,
  payload: item,
});

export const toggleModal = {
  type: types.TOGGLE_MODAL,
};
