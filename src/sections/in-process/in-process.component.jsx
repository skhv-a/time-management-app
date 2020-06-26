import React from 'react';
import { InProcessSectionContainer } from './in-process.styles';
import CustomHeader from '../../components/custom-header/custom-header.component';

import GoalsList from '../../components/goals-list/goals-list.component';

const InProcessSection = (props) => {
  return (
    <InProcessSectionContainer>
      <CustomHeader inProcess>In process</CustomHeader>
      <GoalsList inProcess />
    </InProcessSectionContainer>
  );
};

export default InProcessSection;
