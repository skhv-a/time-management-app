import React, { useContext, memo } from 'react';

import { Goals } from './goals-list.styles';
import GoalItem from '../goal-item/goal-item.component';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

let id = 0;

const GoalsList = memo(({ oldProps, newProps }) => {
  const {
    state: { goals },
  } = useContext(ManageYourTimeContext);

  if (oldProps.length !== newProps.length) {
    console.log('rerender');
    return (
      <Goals>
        {goals.map((goal) => (
          <GoalItem key={++id} {...goal} />
        ))}
      </Goals>
    );
  }
});

export default GoalsList;
