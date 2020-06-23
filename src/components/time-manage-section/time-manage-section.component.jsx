import React from 'react';

import {
  TimeManageSectionContainer,
  Header,
  LogoContainer,
  LogoTitle,
} from './time-manage-section.styles.js';

import SearchBox from '../search-box/search-box.component';
import GoalsForToday from '../goals-for-today/goals-for-today.component';

const TimeManageSection = () => {
  return (
    <TimeManageSectionContainer>
      <Header>
        <LogoContainer>
          <LogoTitle>Manage your time</LogoTitle>
        </LogoContainer>
      </Header>
      <SearchBox />
      <GoalsForToday />
    </TimeManageSectionContainer>
  );
};

export default TimeManageSection;
