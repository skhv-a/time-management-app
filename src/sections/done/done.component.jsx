import React from 'react';

import { CustomSectionContainer } from '../../components/custom-section-container/custom-section-container.styles';
import CustomHeader from '../../components/custom-header/custom-header.component';

import GoalsList from '../../components/goals-list/goals-list.component';

const DoneSection = () => {
  return (
    <CustomSectionContainer done>
      <CustomHeader done>Done</CustomHeader>
      <GoalsList done />
    </CustomSectionContainer>
  );
};

export default DoneSection;
