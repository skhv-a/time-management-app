import React from 'react';

import {
  GoalsForTodayContainer,
  GoalsForTodayHeader,
  GoalsForTodayTitle,
} from './goals-for-today.styles.js';

import AddGoal from '../add-goal/add-goal.component';
import GoalsList from '../goals-list/goals-list.component';
import { useContext } from 'react';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context.jsx';

const GoalsForToday = () => {
  const {
    state: { goals },
  } = useContext(ManageYourTimeContext);
  return (
    <GoalsForTodayContainer>
      <GoalsForTodayHeader>
        <GoalsForTodayTitle>Your goals for today</GoalsForTodayTitle>
      </GoalsForTodayHeader>
      <GoalsList goalsSrc={goals} />
      <AddGoal />
    </GoalsForTodayContainer>
  );
};

export default GoalsForToday;
