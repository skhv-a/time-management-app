export const findCurrentGoal = (allGoals, currentGoal) => {
  return allGoals.find((goal) => goal.id === currentGoal.id);
};

export const findCurrentGoalIndex = (allGoals, currentGoal) => {
  return allGoals.findIndex((goal) => goal.id === currentGoal.id);
};
