import React from 'react';
import { CustomSectionContainer } from '../../components/custom-section-container/custom-section-container.styles';
import CustomHeader from '../../components/custom-header/custom-header.component';

import GoalsList from '../../components/goals-list/goals-list.component';

const InProcessSection = () => {
  return (
    <CustomSectionContainer inProcess>
      <CustomHeader inProcess>In process</CustomHeader>
      <GoalsList />
    </CustomSectionContainer>
  );
};

export default InProcessSection;
