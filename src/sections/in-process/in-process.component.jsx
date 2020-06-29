import React, { useState, useContext, useEffect } from 'react';
import { InProcessSectionContainer } from './in-process.styles';
import CustomHeader from '../../components/custom-header/custom-header.component';

import GoalsList from '../../components/goals-list/goals-list.component';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

const InProcessSection = (props) => {
  const {
    state: { goals },
  } = useContext(ManageYourTimeContext);

  const [inProcessGoals, setInProcessGoals] = useState();
  useEffect(() => {
    setInProcessGoals(goals.filter((goal) => goal.isDone === false));
  }, [goals]);

  return (
    <InProcessSectionContainer>
      <CustomHeader inProcess>In process</CustomHeader>
      <GoalsList whichComponent={'inProcess'} goalsSrc={inProcessGoals} />
    </InProcessSectionContainer>
  );
};

export default InProcessSection;
