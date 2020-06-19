import React from 'react';

import {
  TimeManageSectionContainer,
  Header,
  LogoContainer,
  LogoTitle,
  SearchContainer,
  Search,
  GoalsForTodayContainer,
  GoalsForTodayHeader,
  GoalsForTodayTitle,
  AddGoalContainer,
  AddButton,
} from './time-manage-section.styles.js';

const TimeManageSection = () => {
  return (
    <TimeManageSectionContainer>
      <Header>
        <LogoContainer>
          <LogoTitle>Manage your time</LogoTitle>
        </LogoContainer>
      </Header>
      <SearchContainer>
        <Search placeholder={'search...'} />
      </SearchContainer>
      <GoalsForTodayContainer>
        <GoalsForTodayHeader>
          <GoalsForTodayTitle>Your goals for today</GoalsForTodayTitle>
        </GoalsForTodayHeader>
        <AddGoalContainer>
          <AddButton />
        </AddGoalContainer>
      </GoalsForTodayContainer>
    </TimeManageSectionContainer>
  );
};

export default TimeManageSection;
