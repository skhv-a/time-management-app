import React, { useContext, useMemo } from 'react';

import { Goals, NothingMessage } from './goals-list.styles';
import GoalItem from '../goal-item/goal-item.component';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

const GoalsList = () => {
  const {
    state: { goals },
  } = useContext(ManageYourTimeContext);

  return useMemo(() => {
    console.log('re');

    return (
      <Goals>
        {goals.length ? (
          goals.map((goal) => {
            return <GoalItem key={goal.id} {...goal} />;
          })
        ) : (
          <NothingMessage>Nothing for today</NothingMessage>
        )}
      </Goals>
    );
  }, [goals]);
};

export default GoalsList;
