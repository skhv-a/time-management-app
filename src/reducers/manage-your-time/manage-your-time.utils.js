export const findCurrentGoal = (allGoals, currentGoal) => {
  return allGoals.find((goal) => goal.id === currentGoal.id);
};
