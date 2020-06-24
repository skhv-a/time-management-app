import React, { useEffect, useRef, useContext } from 'react';

import {
  GoalsForTodayContainer,
  GoalsForTodayHeader,
  GoalsForTodayTitle,
} from './goals-for-today.styles.js';

import AddGoal from '../add-goal/add-goal.component';
import GoalsList from '../goals-list/goals-list.component';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context.jsx';

const GoalsForToday = () => {
  const {
    state: { goals },
  } = useContext(ManageYourTimeContext);

  const prevRef = useRef(goals);

  useEffect(() => {
    prevRef.current = goals;
  }, [goals]);

  return (
    <GoalsForTodayContainer>
      <GoalsForTodayHeader>
        <GoalsForTodayTitle>Your goals for today</GoalsForTodayTitle>
      </GoalsForTodayHeader>
      <GoalsList oldProps={prevRef.current} newProps={goals} />
      <AddGoal />
    </GoalsForTodayContainer>
  );
};

export default GoalsForToday;
