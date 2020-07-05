import React, { useEffect, useState, useContext } from 'react';
import { ModalForm } from '../custom-modal/custom-modal.styles';
import GoalItemModal from '../goal-item-modal/goal-item-modal.component';
import { CustomButton } from '../custom-button/custom-button.styles';
import {
  toggleModal,
  done,
} from '../../reducers/manage-your-time/manage-your-time.actions';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

const InProcessGoalModal = ({ goal }) => {
  const { dispatch } = useContext(ManageYourTimeContext);

  const handleDoneSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleModal({}));
    goal.isDone = true;
    dispatch(done(goal));
  };
  return (
    <ModalForm
      onSubmit={handleDoneSubmit}
      onKeyUp={(e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
          CustomButton.click();
        }
      }}
    >
      <GoalItemModal goal={goal} />
    </ModalForm>
  );
};

export default InProcessGoalModal;
