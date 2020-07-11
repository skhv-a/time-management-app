import types from './manage-your-time.types';
import {
  findCurrentGoalIndex,
  customInputUpdater,
} from './manage-your-time.utils';

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

    case types.SEARCH_GOAL:
      return {
        ...state,
        searchedGoals: [...action.payload],
      };

    case types.DONE:
      const currentInProcessGoalIndex = findCurrentGoalIndex(
        state.goals,
        action.payload
      );

      state.goals.splice(currentInProcessGoalIndex, 1, action.payload);

      return {
        ...state,
        goals: [...state.goals],
      };

    case types.REMOVE:
      return {
        ...state,
        goals: [...state.goals.filter((goal) => goal.id !== action.payload.id)],
      };

    case types.TITLE_UPDATE:
      const { updatedTitle, goal: titleGoal } = action.payload;

      const titleUpdater = customInputUpdater(state.goals, titleGoal);
      const goalsWithUpdatedTitle = titleUpdater('title', updatedTitle);
      return {
        ...state,
        goals: [...goalsWithUpdatedTitle],
      };

    case types.DESCRIPTION_UPDATE:
      const { updatedDescription, goal: descriptionGoal } = action.payload;

      const descriptionUpdater = customInputUpdater(
        state.goals,
        descriptionGoal
      );

      const goalsWithUpdatedDescription = descriptionUpdater(
        'description',
        updatedDescription
      );

      return {
        ...state,
        goals: [...goalsWithUpdatedDescription],
      };

    default:
      return { ...state };
  }
};

export default reducer;
