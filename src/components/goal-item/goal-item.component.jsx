import React from 'react';

import { Goal } from './goal-item.styles';

const GoalItem = ({ title, description, isDone }) => {
  return <Goal>{title}</Goal>;
};

export default GoalItem;
