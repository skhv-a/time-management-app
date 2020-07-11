import React, { useContext } from 'react';

import {
  InProcessGoalItem,
  CustomGoalTitle,
  GoalDescription,
} from './goal-item.styles';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import { togglePreviewGoalModal } from '../../reducers/manage-your-time/manage-your-time.actions';

const GoalItem = ({ manageYourTimeSection, ...goal }) => {
  const { title, description, isDone } = goal;

  const { dispatch } = useContext(ManageYourTimeContext);

  const handleClick = () => {
    dispatch(togglePreviewGoalModal(goal));
  };

  return (
    <React.Fragment>
      {manageYourTimeSection ? (
        <CustomGoalTitle
          onClick={handleClick}
          isDone={isDone}
          manageYourTimeSection
        >
          {title}
        </CustomGoalTitle>
      ) : (
        <InProcessGoalItem onClick={handleClick}>
          <CustomGoalTitle makeRound={!description} isDone={isDone}>
            {title}
          </CustomGoalTitle>
          {description ? (
            <GoalDescription>{description}</GoalDescription>
          ) : null}
        </InProcessGoalItem>
      )}
    </React.Fragment>
  );
};

export default GoalItem;
