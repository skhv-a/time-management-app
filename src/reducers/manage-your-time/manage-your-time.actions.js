import types from './manage-your-time.types';

export const addGoal = (item) => ({
  type: types.ADD_GOAL,
  payload: item,
});
