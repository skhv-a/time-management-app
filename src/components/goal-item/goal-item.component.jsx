import React, { useContext } from 'react';

import {
  Goal,
  InProcessGoalItem,
  GoalTitle,
  GoalDescription,
} from './goal-item.styles';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';
import { toggleModal } from '../../reducers/manage-your-time/manage-your-time.actions';

const GoalItem = ({ title, description, isDone, otherProps }) => {
  const { dispatch } = useContext(ManageYourTimeContext);

  const handleClick = () => {
    console.log({ title, description });

    dispatch(toggleModal({ displayGoal: true }));
  };
  if (otherProps.inProcess) {
    return (
      <InProcessGoalItem onClick={handleClick}>
        <GoalTitle makeRound={!description}>{title}</GoalTitle>
        {description ? <GoalDescription>{description}</GoalDescription> : null}
      </InProcessGoalItem>
    );
  }

  return <Goal onClick={handleClick}>{title}</Goal>;
};

export default GoalItem;
