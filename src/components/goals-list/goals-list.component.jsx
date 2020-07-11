import React, { useContext } from 'react';

import { Goals, NothingMessage } from './goals-list.styles';
import GoalItem from '../goal-item/goal-item.component';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

const GoalsList = ({ goalsSrc, manageYourTimeSection }) => {
  const {
    state: { goals, searchedGoals },
  } = useContext(ManageYourTimeContext);

  return (
    <Goals manageYourTimeSection={manageYourTimeSection}>
      {goals.length ? (
        //if goals don't have something display nothing for today

        searchedGoals.length ? (
          //if nothing has found from searchedGoals display "Nothing has found" message

          searchedGoals.map((goal) => {
            return goalsSrc.includes(goal) ? (
              <GoalItem
                key={goal.id}
                manageYourTimeSection={manageYourTimeSection}
                {...goal}
              />
            ) : null;
          })
        ) : (
          <NothingMessage hasFound>Nothing has found</NothingMessage>
        )
      ) : (
        <NothingMessage>Nothing for today</NothingMessage>
      )}
    </Goals>
  );
};

export default GoalsList;
