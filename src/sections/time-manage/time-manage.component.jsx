import React from 'react';

import { TimeManageSectionContainer } from './time-manage.styles.js';

import SearchBox from '../../components/search-box/search-box.component';
import GoalsForToday from '../../components/goals-for-today/goals-for-today.component';
import CustomHeader from '../../components/custom-header/custom-header.component.jsx';

const TimeManageSection = () => {
  return (
    <TimeManageSectionContainer>
      <CustomHeader mainLogo>Manage your time</CustomHeader>
      <SearchBox />
      <GoalsForToday />
    </TimeManageSectionContainer>
  );
};

export default TimeManageSection;
