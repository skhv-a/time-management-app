import React from 'react';
import { ModalForm } from '../custom-modal/custom-modal.styles';
import GoalItemModal from '../goal-item-modal/goal-item-modal.component';

const CustomGoalModal = ({ goal, onSubmitFunc }) => {
  return (
    <ModalForm onSubmit={onSubmitFunc}>
      <GoalItemModal goal={goal} />
    </ModalForm>
  );
};

export default CustomGoalModal;
