import types from './manage-your-time.types';
import {
  findCurrentGoal,
  findCurrentGoalIndex,
} from './manage-your-time.utils';

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
      const currentInProcessGoal = findCurrentGoal(state.goals, action.payload);

      return {
        ...state,
        goals: [
          ...state.goals.filter((goal) => goal !== currentInProcessGoal),
          action.payload,
        ],
      };
    case types.REMOVE:
      const currentDoneGoal = findCurrentGoal(state.goals, action.payload);
      return {
        ...state,
        goals: [...state.goals.filter((goal) => goal !== currentDoneGoal)],
      };
    case types.TITLE_UPDATE: //! TO UTILS
      const currentUpdatedTitleGoal = findCurrentGoal(
        state.goals,
        action.payload.goal
      );

      const currentUpdatedTitleGoalIndex = findCurrentGoalIndex(
        state.goals,
        action.payload.goal
      );

      currentUpdatedTitleGoal.title = action.payload.updatedTitle;

      state.goals.splice(
        currentUpdatedTitleGoalIndex,
        1,
        currentUpdatedTitleGoal
      );

      return {
        ...state,
        goals: [...state.goals],
      };

    case types.DESCRIPTION_UPDATE: //! TO UTILS
      const currentUpdatedDescriptionGoal = findCurrentGoal(
        state.goals,
        action.payload.goal
      );

      const currentUpdatedDescriptionGoalIndex = findCurrentGoalIndex(
        state.goals,
        action.payload.goal
      );

      currentUpdatedDescriptionGoal.description =
        action.payload.updatedDescription;

      state.goals.splice(
        currentUpdatedDescriptionGoalIndex,
        1,
        currentUpdatedDescriptionGoal
      );

      return {
        ...state,
        goals: [...state.goals],
      };
    default:
      return state;
  }
};

export default reducer;
