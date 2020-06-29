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
        modalType: action.payload,
      };
    case types.SEARCH_GOAL:
      return {
        ...state,
        searchedGoals: [...action.payload],
      };
    case types.DONE:
      const currentInProcessGoal = state.goals.find(
        (goal) => goal.id === action.payload.id //!To utils
      );

      return {
        ...state,
        goals: [
          ...state.goals.filter((goal) => goal !== currentInProcessGoal),
          action.payload,
        ],
      };
    case types.REMOVE:
      const currentDoneGoal = state.goals.find(
        (goal) => goal.id === action.payload.id //!To utils
      );
      return {
        ...state,
        goals: [...state.goals.filter((goal) => goal !== currentDoneGoal)],
      };
    default:
      return state;
  }
};

export default reducer;
