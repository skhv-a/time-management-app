import React from 'react';

import { CustomSectionContainer } from '../../components/custom-section-container/custom-section-container.styles';
import CustomHeader from '../../components/custom-header/custom-header.component';

import GoalsList from '../../components/goals-list/goals-list.component';

import withCustomGoals from '../../high-order-components/with-custom-goals.hoc';

const DoneSection = ({ customGoals }) => {
  return (
    <CustomSectionContainer done>
      <CustomHeader done>Done</CustomHeader>
      <GoalsList goalsSrc={customGoals} />
    </CustomSectionContainer>
  );
};

export default withCustomGoals(DoneSection, 'done');
