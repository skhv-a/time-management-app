import React from 'react';

import {
  TimeManageSectionContainer,
  Header,
  LogoContainer,
  LogoTitle,
  GoalsForTodayContainer,
  GoalsForTodayHeader,
  GoalsForTodayTitle,
  AddGoalContainer,
  AddButton,
  Goals,
  GoalItem,
} from './time-manage-section.styles.js';

import SearchBox from '../search-box/search-box.component';

const TimeManageSection = () => {
  return (
    <TimeManageSectionContainer>
      <Header>
        <LogoContainer>
          <LogoTitle>Manage your time</LogoTitle>
        </LogoContainer>
      </Header>
      <SearchBox />
      <GoalsForTodayContainer>
        <GoalsForTodayHeader>
          <GoalsForTodayTitle>Your goals for today</GoalsForTodayTitle>
        </GoalsForTodayHeader>
        <Goals>
          <GoalItem>Купить молоко</GoalItem>
        </Goals>
        <AddGoalContainer>
          <AddButton />
        </AddGoalContainer>
      </GoalsForTodayContainer>
    </TimeManageSectionContainer>
  );
};

export default TimeManageSection;
