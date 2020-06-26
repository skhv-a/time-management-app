import React from 'react';

import {
  Goal,
  InProcessGoalItem,
  GoalTitle,
  GoalDescription,
} from './goal-item.styles';

const GoalItem = ({ title, description, isDone, otherProps }) => {
  if (otherProps.inProcess) {
    return (
      <InProcessGoalItem>
        <GoalTitle>{title}</GoalTitle>
        <GoalDescription>{description}</GoalDescription>
      </InProcessGoalItem>
    );
  }

  return <Goal>{title}</Goal>;
};

export default GoalItem;
