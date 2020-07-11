import React from 'react';
import { CustomSectionContainer } from '../../components/custom-section-container/custom-section-container.styles';
import CustomHeader from '../../components/custom-header/custom-header.component';

import GoalsList from '../../components/goals-list/goals-list.component';

import withCustomGoals from '../../high-order-components/with-custom-goals.hoc';

const InProcessSection = ({ customGoals }) => {
  return (
    <CustomSectionContainer inProcess>
      <CustomHeader inProcess>In process</CustomHeader>
      <GoalsList goalsSrc={customGoals} />
    </CustomSectionContainer>
  );
};

export default withCustomGoals(InProcessSection, 'inProcess');
