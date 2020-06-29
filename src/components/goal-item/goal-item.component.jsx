import React, { useContext } from 'react';

import {
  Goal,
  InProcessGoalItem,
  GoalTitle,
  GoalDescription,
} from './goal-item.styles';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';
import { toggleModal } from '../../reducers/manage-your-time/manage-your-time.actions';

const GoalItem = ({ title, description, isDone, id, whichComponent }) => {
  const { dispatch } = useContext(ManageYourTimeContext);

  const handleClick = () => {
    dispatch(
      toggleModal({
        modalType: whichComponent === 'inProcess' ? 'inProcess' : 'done',
        goal: { title, description, isDone, id },
      })
    );
  };
  if (whichComponent === 'inProcess' || whichComponent === 'done') {
    return (
      <InProcessGoalItem onClick={handleClick}>
        <GoalTitle makeRound={!description} isDone={isDone}>
          {title}
        </GoalTitle>
        {description ? <GoalDescription>{description}</GoalDescription> : null}
      </InProcessGoalItem>
    );
  }

  return (
    <Goal onClick={handleClick} isDone={isDone}>
      {title}
    </Goal>
  );
};

export default GoalItem;
