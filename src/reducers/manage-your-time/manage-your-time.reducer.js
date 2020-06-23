import types from './manage-your-time.types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_GOAL:
      return {
        ...state,
        goals: [...state.goals, action.payload],
      };
    case types.TOGGLE_MODAL:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    default:
      return state;
  }
};

export default reducer;
