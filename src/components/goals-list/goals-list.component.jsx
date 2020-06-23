import React, { useContext } from 'react';

import { Goals } from './goals-list.styles';
import GoalItem from '../goal-item/goal-item.component';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

const GoalsList = () => {
  const {
    state: { goals },
  } = useContext(ManageYourTimeContext);
  console.log(goals);

  return (
    <Goals>
      {goals.map((goal) => (
        <GoalItem key="1" title={goal.title} />
      ))}
    </Goals>
  );
};

export default GoalsList;
