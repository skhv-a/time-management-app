import React, { useContext } from 'react';

import {
  InProcessGoalItem,
  CustomGoalTitle,
  GoalDescription,
} from './goal-item.styles';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';
import { toggleModal } from '../../reducers/manage-your-time/manage-your-time.actions';

const GoalItem = ({
  title,
  description,
  isDone,
  isPinned,
  id,
  whichComponent,
}) => {
  const { dispatch } = useContext(ManageYourTimeContext);

  const handleClick = () => {
    dispatch(
      toggleModal({
        modalType: isDone ? 'done' : 'inProcess',
        goal: { title, description, isDone, isPinned, id },
      })
    );
  };
  if (whichComponent === 'inProcess' || whichComponent === 'done') {
    return (
      <InProcessGoalItem onClick={handleClick}>
        <CustomGoalTitle makeRound={!description} isDone={isDone}>
          {title}
        </CustomGoalTitle>
        {description ? <GoalDescription>{description}</GoalDescription> : null}
      </InProcessGoalItem>
    );
  } else {
    return (
      <CustomGoalTitle
        onClick={handleClick}
        isDone={isDone}
        manageYourTimeSection
      >
        {title}
      </CustomGoalTitle>
    );
  }
};

export default GoalItem;
