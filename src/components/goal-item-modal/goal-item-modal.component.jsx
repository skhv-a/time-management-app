import React from 'react';
import {
  GoalItemModalContainer,
  ModalTitle,
  ModalDescription,
} from './goal-item-modal.styles';

const GoalItemModal = ({ goal: { title, description, isDone } }) => {
  return (
    <GoalItemModalContainer>
      <ModalTitle isDone={isDone}>{title}</ModalTitle>
      {description ? (
        <ModalDescription isDone={isDone}>{description}</ModalDescription>
      ) : null}
    </GoalItemModalContainer>
  );
};

export default GoalItemModal;
