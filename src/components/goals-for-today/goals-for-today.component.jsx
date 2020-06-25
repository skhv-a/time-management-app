import React from 'react';

import {
  GoalsForTodayContainer,
  GoalsForTodayHeader,
  GoalsForTodayTitle,
} from './goals-for-today.styles.js';

import AddGoal from '../add-goal/add-goal.component';
import GoalsList from '../goals-list/goals-list.component';

const GoalsForToday = () => {
  return (
    <GoalsForTodayContainer>
      <GoalsForTodayHeader>
        <GoalsForTodayTitle>Your goals for today</GoalsForTodayTitle>
      </GoalsForTodayHeader>
      <GoalsList />
      <AddGoal />
    </GoalsForTodayContainer>
  );
};

export default GoalsForToday;
