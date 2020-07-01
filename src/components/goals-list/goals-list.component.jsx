import React, { useContext, useMemo } from 'react';

import { Goals, NothingMessage } from './goals-list.styles';
import GoalItem from '../goal-item/goal-item.component';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

const GoalsList = ({ whichComponent, goalsSrc }) => {
  const {
    state: { goals, searchedGoals },
  } = useContext(ManageYourTimeContext);

  return useMemo(() => {
    return (
      <Goals whichComponent={whichComponent}>
        {goals.length ? (
          //if goals don't have something display nothing for today

          searchedGoals.length ? (
            //if nothing has found from searchedGoals display "Nothing has found" message

            searchedGoals.map((goal) =>
              goalsSrc.includes(goal) ? (
                <GoalItem
                  key={goal.id}
                  whichComponent={whichComponent}
                  {...goal}
                />
              ) : null
            )
          ) : (
            <NothingMessage hasFound whichComponent={whichComponent}>
              Nothing has found
            </NothingMessage>
          )
        ) : (
          <NothingMessage whichComponent={whichComponent}>
            Nothing for today
          </NothingMessage>
        )}
      </Goals>
    );
  }, [searchedGoals]);
};

export default GoalsList;
