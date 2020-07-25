import React, { useContext } from 'react';

import { Goals, NothingMessage } from './goals-list.styles';
import GoalItem from '../goal-item/goal-item.component';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import { useQuery } from '@apollo/client';

import useHandleSearchInput from '../../custom-hooks/use-handle-search-input';

import { Spinner } from '../spinner/spinner.styles';
import { CURRENT_USER_DATA } from '../../apollo-gqls/user.gql';

const GoalsList = ({ manageYourTimeSection, done }) => {
  const {
    state: { searchRequest },
  } = useContext(ManageYourTimeContext);
  const { searchedGoals } = useHandleSearchInput();
  const { data, loading } = useQuery(CURRENT_USER_DATA);

  if (!loading) {
    const currentUserData = data.viewer.userGoals.results;
    // console.log(data.viewer.userGoals);
    return (
      <Goals manageYourTimeSection={manageYourTimeSection}>
        {currentUserData.length ? (
          //if goals don't have something display nothing for today

          searchedGoals(currentUserData, searchRequest).length ? (
            //if nothing has found from searchedGoals display "Nothing has found" message

            searchedGoals(currentUserData, searchRequest).map((goal) => {
              if (goal.isDone !== !done || manageYourTimeSection) {
                return (
                  <GoalItem
                    key={goal.id}
                    manageYourTimeSection={manageYourTimeSection}
                    {...goal}
                  />
                );
              }
              return null;
            })
          ) : (
            <NothingMessage hasFound>Nothing has found</NothingMessage>
          )
        ) : (
          <NothingMessage>Nothing for today</NothingMessage>
        )}
      </Goals>
    );
  }
  return <Spinner />;
};

export default GoalsList;
