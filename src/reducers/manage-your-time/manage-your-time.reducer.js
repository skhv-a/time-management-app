import types from './manage-your-time.types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_GOAL:
      return {
        ...state,
        goals: [...state.goals, action.payload],
      };

    case types.TOGGLE_ADD_GOAL_MODAL:
      return {
        ...state,
        addGoalModalIsHidden: !state.addGoalModalIsHidden,
      };

    case types.TOGGLE_PREVIEW_GOAL_MODAL:
      return {
        ...state,
        currentGoal: action.payload,
        previewGoalModalIsHidden: !state.previewGoalModalIsHidden,
      };

    case types.SEARCH_REQUEST:
      return {
        ...state,
        searchRequest: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
