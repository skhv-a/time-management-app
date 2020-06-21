import types from './manage-your-time.types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_GOAL:
      return {
        goals: state.goals.push(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
