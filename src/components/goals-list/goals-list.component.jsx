import React, { useContext } from 'react';

import { Goals, NothingMessage } from './goals-list.styles';
import GoalItem from '../goal-item/goal-item.component';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import { useQuery } from '@apollo/react-hooks';

import { GET_GOALS } from '../../apollo-gqls';
import useHandleSearchInput from '../../custom-hooks/use-handle-search-input';

import { Spinner } from '../spinner/spinner.styles';

const GoalsList = ({ manageYourTimeSection, done }) => {
  const {
    state: { searchRequest },
  } = useContext(ManageYourTimeContext);
  const { searchedGoals } = useHandleSearchInput();
  const { data } = useQuery(GET_GOALS);

  return data ? (
    <Goals manageYourTimeSection={manageYourTimeSection}>
      {data.goals.results.length ? (
        //if goals don't have something display nothing for today

        searchedGoals(data.goals.results, searchRequest).length ? (
          //if nothing has found from searchedGoals display "Nothing has found" message

          searchedGoals(data.goals.results, searchRequest).map((goal) => {
            if (goal.isDone !== !done || manageYourTimeSection) {
              return (
                <GoalItem
                  key={goal.id}
                  manageYourTimeSection={manageYourTimeSection}
                  {...goal}
                />
              );
            }
          })
        ) : (
          <NothingMessage hasFound>Nothing has found</NothingMessage>
        )
      ) : (
        <NothingMessage>Nothing for today</NothingMessage>
      )}
    </Goals>
  ) : (
    <Spinner />
  );
};

export default GoalsList;
