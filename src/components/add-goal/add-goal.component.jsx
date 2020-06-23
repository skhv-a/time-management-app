import React, { useContext } from 'react';

import { AddGoalContainer, AddGoalButton } from './add-goal.styles';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import { toggleModal } from '../../reducers/manage-your-time/manage-your-time.actions';

const AddGoal = () => {
  const { dispatch } = useContext(ManageYourTimeContext);
  return (
    <AddGoalContainer>
      <AddGoalButton
        onClick={(e) => {
          dispatch(toggleModal);
        }}
      />
    </AddGoalContainer>
  );
};

export default AddGoal;
