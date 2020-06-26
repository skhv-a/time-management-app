import React, { useContext, useMemo } from 'react';

import { Goals, NothingMessage } from './goals-list.styles';
import GoalItem from '../goal-item/goal-item.component';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

const GoalsList = (props) => {
  const {
    state: { goals, searchedGoals },
  } = useContext(ManageYourTimeContext);

  return useMemo(() => {
    return (
      <Goals>
        {goals.length ? (
          //if goals don't have something display nothing for today

          searchedGoals.length ? (
            //if nothing has found from searchedGoals display "Nothing has found" message

            searchedGoals.map((goal) => {
              return (
                <GoalItem key={goal.id} {...goal} otherProps={{ ...props }} />
              );
            })
          ) : (
            <NothingMessage hasFound>Nothing has found</NothingMessage>
          )
        ) : (
          <NothingMessage>Nothing for today</NothingMessage>
        )}
      </Goals>
    );
  }, [goals, searchedGoals, props]);
};

export default GoalsList;
