import React from 'react';

import {
  GoalsForTodayContainer,
  GoalsForTodayHeader,
  GoalsForTodayTitle,
  LogOut,
} from './goals-for-today.styles.js';

import AddGoal from '../add-goal/add-goal.component';
import GoalsList from '../goals-list/goals-list.component';
import { useContext } from 'react';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context.jsx';
import { CURRENT_USER_DATA } from '../../apollo-gqls/user.gql.js';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import { LOG_OUT } from '../../apollo-gqls/log-out.gql.js';
import { HomepageContext } from '../../contexts/homepage/homepage.context.jsx';
import { canRender } from '../../reducers/homepage/homepage.actions.js';

const GoalsForToday = () => {
  const {
    state: { goals },
  } = useContext(ManageYourTimeContext);
  const { data, loading } = useQuery(CURRENT_USER_DATA);
  const [logOut] = useMutation(LOG_OUT);
  const client = useApolloClient();

  const { dispatch } = useContext(HomepageContext);
  return (
    <GoalsForTodayContainer>
      <GoalsForTodayHeader>
        <GoalsForTodayTitle>
          {!loading ? data.viewer.username : 'loading...'}
        </GoalsForTodayTitle>
        <LogOut
          onClick={async () => {
            await logOut();
            dispatch(canRender);
            localStorage.clear();
            client.clearStore();
          }}
        />
      </GoalsForTodayHeader>
      <GoalsList goalsSrc={goals} manageYourTimeSection />
      <AddGoal />
    </GoalsForTodayContainer>
  );
};

export default GoalsForToday;
