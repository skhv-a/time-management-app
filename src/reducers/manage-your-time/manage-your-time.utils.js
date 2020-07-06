export const findCurrentGoalIndex = (allGoals, currentGoal) => {
  return allGoals.findIndex((goal) => goal.id === currentGoal.id);
};

export const customInputUpdater = (allGoals, goal) => {
  return (inputGoalType, updatedValue) => {
    goal[inputGoalType] = updatedValue;

    const currentUpdatedTitleGoalIndex = findCurrentGoalIndex(allGoals, goal);
    allGoals.splice(currentUpdatedTitleGoalIndex, 1, goal);

    return allGoals;
  };
};
