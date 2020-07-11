import React, { useContext } from 'react';

import { AddGoalContainer, AddGoalButton } from './add-goal.styles';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import CustomModal from '../custom-modal/custom-modal.component';
import { toggleAddGoalModal } from '../../reducers/manage-your-time/manage-your-time.actions';
import { createPortal } from 'react-dom';

const AddGoal = () => {
  const {
    dispatch,
    state: { addGoalModalIsHidden },
  } = useContext(ManageYourTimeContext);

  return (
    <AddGoalContainer>
      <AddGoalButton
        onClick={() => {
          dispatch(toggleAddGoalModal());
        }}
      />
      {!addGoalModalIsHidden
        ? createPortal(
            <CustomModal createGoalModal />,
            document.getElementById('add-goal-modal')
          )
        : null}
    </AddGoalContainer>
  );
};

export default AddGoal;
